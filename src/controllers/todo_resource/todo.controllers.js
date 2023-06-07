const { todoValidation } = require('../../validations');
const { todoServices } = require('../../services');
// fetching all available projects


const addTodo = async(req, res, next) => {
    try {
        const {
            title,
            description,
            completed,
        } = await todoValidation.addTodoValidation.validateAsync(req.body);
        const todo = await todoServices.createTodo({
            title,
            description,
            completed,
        });
        return res.status(201).send({ msg: "Successfully created", Todo: todo });
    } catch (err) {
        return res.status(409).send({ error: err });
    }
};

const updateTodo = async(req, res, next) => {
    try {
        const {
            title,
            description,
            completed,
        } = await todoValidation.updateTodoValidation.validateAsync(req.body);
        const { id } = await todoValidation.todoIdValidation.validateAsync(req.params);
        await todoServices.updateTheTodo({
            id,
            title,
            description,
            completed,
        });
        return res.status(200).send({ msg: "Successfully updated" });
    } catch (err) {
        return res.status(409).send({ error: err });
    }
};


// Delete by todo id
const deleteTodoById = async(req, res, next) => {
    try {
        const { id } = await todoValidation.todoIdValidation.validateAsync(req.params);
        console.log(id);
        // check user exits or not
        const todo = await todoServices.deleteTodoById({ id });
        if (!todo) {
            throw error.throwNotFound({ message: 'Todo' });
        }
        return WriteResult({ 'nRemoved': 1 })
    } catch (err) {
        return res.status(409).send({ error: err });
    }
};
const getTodo = async(req, res, next) => {
    try {
        const { id } = await todoValidation.todoIdValidation.validateAsync(req.params);
        const todo = await todoServices.getTodo({ id });
        return res.status(200).send({ msg: "Successfully fetched", Todo: todo });

    } catch (err) {
        return res.status(409).send({ error: err });
    }
}
const getTodos = async(req, res, next) => {
    try {
        const todos = await todoServices.getTodo({});
        return res.status(200).send({ msg: "Successfully fetched", Todo: todos });

    } catch (err) {
        return res.status(409).send({ error: err });
    }
}
module.exports = {
    addTodo,
    updateTodo,
    deleteTodoById,
    getTodo,
    getTodos
};