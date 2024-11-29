const mongoose = require("mongoose");

const DBconnection = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Banco de Dados conectado.");
  } catch (error) {
    console.error("Falha na conexão do Banco de Dados", error.message);
    process.exit(1);
  }
};

module.exports = DBconnection;
