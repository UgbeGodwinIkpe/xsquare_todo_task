const express = require('express');

const { todoControllers } = require('../../controllers');

const todoRoutes = express.Router();

todoRoutes.get('/todos', todoControllers.getTodo);
todoRoutes.get('todos/:id', todoControllers.getTodo);
todoRoutes.put('todos/:id', todoControllers.updateTodo);
todoRoutes.delete('/:id', todoControllers.deleteTodoById);
todoRoutes.post('/todos', todoControllers.addTodo);

module.exports = todoRoutes;