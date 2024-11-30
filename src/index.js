const express = require("express");
const dotenv = require("dotenv");
const DBconnection = require("./config/database");
const auth = require("./routes/authRoutes");
const task = require("./routes/taskRoutes");

dotenv.config();
DBconnection();

const app = express();
app.use(express.json());

app.use("/auth", auth);
app.use("/task", task);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`));
