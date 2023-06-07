const { TodoModel } = require('../../models');


// Fetching Todos
const getTodo = async({ id }) => {
        let q = {};
        if (id) {
            q._id = id;
        }
        return TodoModel.find(q);
    }
    // Deleting todo by todotId
const deleteTodoById = async({ _id }) => TodoModel.findOneAndDelete({ _id });

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
    id,
    title,
    description,
    completed,
}) => TodoModel.findByIdAndUpdate(
    id, {
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