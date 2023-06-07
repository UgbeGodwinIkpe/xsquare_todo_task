const Joi = require('joi');
const { TODO_STATUS } = require('../../const');

const addTodoValidation = Joi.object().keys({
    title: Joi.string().required().label('Title'),
    description: Joi.string().required().label('Description'),
    completed: Joi.boolean().valid(TODO_STATUS.completed, TODO_STATUS.not_completd).label('Completed'),
});

const todoIdValidation = Joi.object().keys({
    todoId: Joi.string().required().label('Todo Id'),
});


const updateTodoValidation = Joi.object().keys({
    title: Joi.string().required().label('Title'),
    description: Joi.string().required().label('Description'),
    completed: Joi.boolean().valid(TODO_STATUS.completed, TODO_STATUS.not_completd).label('Completed'),
});

module.exports = {
    addTodoValidation,
    todoIdValidation,
    updateTodoValidation,
};