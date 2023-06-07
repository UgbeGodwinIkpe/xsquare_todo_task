const mongoose = require('mongoose');

const { Schema } = mongoose;

const { TODO_STATUS } = require('../const');

const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Number,
    enum: [TODO_STATUS.completed, TODO_STATUS.not_completd],
    required: true,
  }
}, {
  timestamps: true,
});

const todoModel = mongoose.model('todos', todoSchema);
module.exports = todoModel;
