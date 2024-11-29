const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const task = new Task({ title, description, user: req.user.id });
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = { ...req.body, updatedAt: Date.now() };
    const task = await Task.findOneAndUpdate(
      { _id: id, user: req.user.id },
      updates,
      { new: true }
    );
    if (!task)
      return res.status(404).send({ message: "Tarefa não encontrada!" });
    res.send(task);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete({
      _id: id,
      usuario: req.user.id,
    });
    if (!task)
      return res.status(404).send({ message: "Tarefa não encontrada" });
    res.send({ message: "Tarefa removida com sucesso!" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    res.send(tasks);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
