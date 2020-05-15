const express = require('express');

const Tasks = require('./tasks-model.js');
const Projects = require ("../projects/projects-model")

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
    if (req.body.project_id) {
        Projects.getProjectsByID(req.body.project_id)
            .then(project =>{
                console.log("Task project", project)
                if (project.length!==0){
                    if (req.body.task_description){
                        next();
                    } else {
                        res.status(401).json({message: "Please create a task name"})
                    }
                } else {
                    res.status(400).json({message: "Could not find a project by that ID"})
                }
            })
            .catch(err => {
                res.status(500).json({ message: 'Failed to get project by that ID' });
            });   
    } else {
        res.status(401).json({message: "Please iinsert a project_id that references an existing project"})
    }
    
}



module.exports = router;