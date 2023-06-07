const { TodoModel } = require('../../models');


// Fetching Todo
const getTodo = async({ todoId}) => {
        let q = {};
        if (todoId) {
            q._id = todoId;
        }
        return TodoModel.find(q);
    }
    // Deleting todo by todotId
const deleteTodoById = async({ id }) => ProjectModel.findAndDeleteOne({ id });

const createTodo = async({
    title,
    description,
    completed,
}) => TodoModel.create({
    title,
    description,
    completed,
});

const updateTheTodo = async({
    todoId,
    title,
    description,
    completed,
}) => TodoModel.findByIdAndUpdate(
    todoId, {
        title,
    description,
    completed,
    }, { returnedDocument: 'after' },
);

module.exports = {
    createTodo,
    updateTheTodo,
    getTodo,
    deleteTodoById,
};