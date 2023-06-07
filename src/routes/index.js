const express = require("express");
const todosRoutes = require("./todo.routes");
const apiRoutes = express.Router();

apiRoutes.use("/todo", todosRoutes);
apiRoutes.use("*", (req, res) => console.log({ Error: "Route not found!" }));

module.exports = apiRoutes;