const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { userSchemaRegister } = require("../utils/validationSchemas");
exports.register = async (req, res) => {
  const { error } = userSchemaRegister.validate(req.body);
  if (error)
    return res.status(400).json({
      message: error.details[0].message,
    });
  const { name, email, password } = req.body;
  try {
    const userExists = await User.findOne({
      email,
    });
    if (userExists)
      return res.status(400).json({
        message: "Usuário já existe!",
      });
    const hashedPassword = await bcrypt.hash(password, 13);
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    await user.save();
    return res.status(201).json({
      message: "Usuário registrado com sucesso!",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      email,
    });
    if (!user)
      return res.status(404).json({
        message: "Usuário não enontrado.",
      });
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.status(400).json({
        message: "Credenciais inválidas.",
      });
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    return res.setHeader("Authorization", token).status(200).send({
      msg: "Login realizado com sucesso",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
