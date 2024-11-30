const Joi = require("joi");
const userSchemaRegister = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});
const taskSchema = Joi.object({
  title: Joi.string().min(3).max(255).required(),
  description: Joi.string().max(500).optional(),
  status: Joi.bool().optional()
});
module.exports = {
  userSchemaRegister,
  taskSchema
};