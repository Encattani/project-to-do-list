const Joi = require("joi");
const userSchemaRegister = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
const taskSchema = Joi.object({
  title: Joi.string().min(3).max(50).required().messages({
    "any.required": "O título é obrigatório.",
    "string.min": "O título deve ter pelo menos {#limit} caracteres.",
    "string.max": "O título pode ter no máximo {#limit} caracteres.",
  }),
  description: Joi.string().max(255).optional().messages({
    "string.base": "A descrição deve ser um texto.",
    "string.max": "A descrição pode ter no máximo {#limit} caracteres.",
  }),
  status: Joi.boolean().default(false).optional().messages({
    "boolean.base": "O status deve ser um valor booleano (true ou false).",
  }),
});

const updateTaskSchema = Joi.object({
  title: Joi.string().min(3).max(50).optional().messages({
    "string.min": "O título deve ter pelo menos {#limit} caracteres.",
    "string.max": "O título pode ter no máximo {#limit} caracteres.",
  }),
  description: Joi.string().max(255).optional().messages({
    "string.base": "A descrição deve ser um texto.",
    "string.max": "A descrição pode ter no máximo {#limit} caracteres.",
  }),
});
module.exports = {
  userSchemaRegister,
  taskSchema,
  updateTaskSchema,
};
