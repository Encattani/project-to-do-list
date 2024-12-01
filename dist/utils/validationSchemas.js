const Joi = require("joi");
const userSchemaRegister = Joi.object({
  name: Joi.string().min(3).max(50).required().messages({
    "string.empty": `O nome é obrigatório.`,
    "string.min": "O nome deve ter no mínimo {#limit} caracteres."
  }),
  email: Joi.string().email().required().messages({
    "string.empty": `O email é obrigatório.`
  }),
  password: Joi.string().min(6).required().messages({
    "string.empty": `A senha é obrigatório.`,
    "string.min": "A senha deve ter no mínimo {#limit} caracteres."
  })
});
const createTaskSchema = Joi.object({
  title: Joi.string().min(3).max(50).required().messages({
    "string.empty": "O título é obrigatório.",
    "string.min": "O título deve ter pelo menos {#limit} caracteres.",
    "string.max": "O título pode ter no máximo {#limit} caracteres."
  }),
  description: Joi.string().max(255).required().messages({
    "string.empty": "A descrição é obrigatória.",
    "string.max": "A descrição pode ter no máximo {#limit} caracteres."
  })
});
const updateTaskSchema = Joi.object({
  title: Joi.string().min(3).max(50).required().messages({
    "string.empty": "O título é obrigatório.",
    "string.min": "O título deve ter pelo menos {#limit} caracteres.",
    "string.max": "O título pode ter no máximo {#limit} caracteres."
  }),
  description: Joi.string().max(255).required().messages({
    "string.empty": "A descrição é obrigatória.",
    "string.max": "A descrição pode ter no máximo {#limit} caracteres."
  }),
  status: Joi.boolean().required()
});
module.exports = {
  userSchemaRegister,
  createTaskSchema,
  updateTaskSchema
};