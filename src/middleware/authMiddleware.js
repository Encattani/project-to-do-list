const jwt = require("jsonwebtoken");
const user = require("../models/User");

const authMiddleware = async (req, res, next) => {
  const token = req.headers["authorization"]?.replace("Bearer", "").trim();

  if (!token) return res.status(401).send({ message: "Acesso negado" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await user.findById(decoded.id);
    next();
  } catch (error) {
    console.error(error);
    res.status(401).send({ message: error });
  }
};

module.exports = authMiddleware;
