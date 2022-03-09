const express = require('express');
const router = express.Router();

let taskModel = require('../schema/taskModel');

//create task
router.route('/add').post((req, res) => {
    const task = req.body.task;

    const newTask = new taskModel({task});

    newTask.save()
           .then(() => res.json('task added!'))
           .catch(err => res.status(400).json(`Error: ${err}`))
});

//get all tasks
router.route('/').get((req, res) => {
    taskModel.find()
        .then(tasks => res.json(tasks))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

//delete task
router.route('/:id').delete((req, res) => {
    taskModel.findByIdAndDelete(req.params.id)
        .then(() => res.json('task deleted!'))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

//update task
router.route('/update/:id').post((req, res) => {
    taskModel.findById(req.params.id)
        .then(tasks => {
            tasks.task = req.body.task;

            tasks.save()
                 .then(() => res.json('task updated!'))
                 .catch(err => res.status(400).json(`Error: ${err}`));
        })  .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
