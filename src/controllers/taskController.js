const Task = require("../models/Task");
const {
  createTaskSchema,
  updateTaskSchema,
} = require("../utils/validationSchemas");

exports.createTask = async (req, res) => {
  const { error } = createTaskSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const validationErrors = error.details.map((err) => err.message);
    return res.status(400).json({
      message: "Erro na validação dos dados.",
      errors: validationErrors,
    });
  }

  try {
    const { title, description } = req.body;
    const task = new Task({
      title,
      description,
      status: false,
      user: req.user.id,
    });
    await task.save();
    return res.status(201).json(task);
  } catch (error) {
    return res.status(500).json({
      message: "Erro ao criar a tarefa.",
      error: error.message,
    });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    if (tasks.length === 0) {
      return res.status(200).json({
        message: "A lista de tarefas está vazia.",
      });
    }
    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json({
      message: "Erro ao buscar as tarefas.",
      error: error.message,
    });
  }
};

exports.updateTask = async (req, res) => {
  const { error } = updateTaskSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const validationErrors = error.details.map((err) => err.message);
    return res.status(400).json({
      message: "Erro na validação dos dados.",
      errors: validationErrors,
    });
  }

  try {
    const { id } = req.params;
    const updates = {
      ...req.body,
      updatedAt: new Date(),
    };

    const task = await Task.findOneAndUpdate(
      { _id: id, user: req.user.id },
      updates,
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ message: "Tarefa não encontrada." });
    }

    return res.status(200).json({
      message: "Tarefa atualizada com sucesso!",
      task,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Erro ao atualizar a tarefa.",
      error: error.message,
    });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOneAndDelete({ _id: id, user: req.user.id });

    if (!task) {
      return res.status(404).json({ message: "Tarefa não encontrada." });
    }

    return res.status(200).json({ message: "Tarefa deletada com sucesso." });
  } catch (error) {
    return res.status(500).json({
      message: "Erro ao excluir a tarefa.",
      error: error.message,
    });
  }
};
