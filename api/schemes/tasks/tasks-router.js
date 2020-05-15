const express = require('express');

const Tasks = require('./tasks-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    console.log("tasks")
    Tasks.getTasks()
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get tasks' });
        });
  });

router.post("/",validateTask,(req,res)=>{
    console.log("task post")
    Tasks.createTask(req.body)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(err => {
            res.status(500).json({error: "Database error while creating task"+err})
        })
})

function validateTask (req,res,next){
    if (req.body.task_name){
        next();
    } else {
        res.status(401).json({message: "Please create a task name"})
    }
}

module.exports = router;