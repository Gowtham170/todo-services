const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    task: {type: String, required: true},
}, {
    timestamps: true
});

const taskModel = mongoose.model('taskModel', taskSchema);

module.exports = taskModel;