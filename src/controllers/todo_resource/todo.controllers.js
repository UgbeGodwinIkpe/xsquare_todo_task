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
    transaction = await Transaction.startSession();
    try {
        const {
            title,
            description,
            completed,
        } = await todoValidation.updateTodoValidation.validateAsync(req.body);
        const { todoId } = await todoValidation.todoIdValidation.validateAsync(req.params);
        await todoServices.updateTheTodo({
            todoId,
            title,
            description,
            completed,
        });
        return res.status(200).send({ msg: "Successfully updated", Todo: todo });
    } catch (err) {
        return res.status(409).send({ error: err });
    }
};


// Delete by todo id
const deleteTodoById = async(req, res, next) => {
    try {
        const id = await todoValidation.todoIdValidation.validateAsync(req.params.id);
        // check user exits or not
        const todo = await todoServices.deleteTodotById({ id });
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
        const { todoId } = await todoValidation.todoIdValidation.validateAsync(req.query);
        const todo = await todoServices.getTodo({ todoId });
        return res.status(200).send({ msg: "Successfully updated", Todo: todo });

    } catch (err) {
        return res.status(409).send({ error: err });
    }
}
module.exports = {
    addTodo,
    updateTodo,
    deleteTodoById,
    getTodo
};