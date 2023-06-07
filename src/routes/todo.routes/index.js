const express = require('express');
const todoRoutes = require('./todo.routes');

const todosRoutes = express.Router();

todosRoutes.use(todoRoutes);

todosRoutes.use('*', (req, res) => console.log({ Error: "Route not found!" }));


module.exports = todosRoutes;