const express = require('express');

const Projects = require('./projects-model.js');
const Tasks = require('../tasks/tasks-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    console.log("projects")
    Projects.getProjects()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get projects' });
        });
  });

router.get("/:id",validateProjectID,(req,res)=>{
    Projects.getProjectsByID(req.params.id)
        .then(project => {
            Tasks.getTasksByProjectId(req.params.id)
            
                .then(tasks => {
                    res.status(200).json({...project[0],tasks});
                })
                .catch(err=>{
                    console.log(err)
                    res.status(500).json({error: "Database failure while findin tasks for that project id"})
                })
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get project by that ID' });
        });
})


router.post("/",validateProject,(req,res)=>{
    console.log("projects post")
    Projects.createProject(req.body)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => {
            res.status(500).json({error: "Database error while creating project"+err})
        })
})


function validateProject (req,res,next){
    if (req.body.project_name){
        next();
    } else {
        res.status(401).json({message: "Please create a project name"})
    }
}

function validateProjectID (req,res,next){
    Projects.getProjectsByID(req.params.id)
        .then(project =>{
            if (project.length!==0){
                next();
            } else {
                res.status(400).json({message: "Could not find a project by that ID"})
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get project by that ID' });
        });   
}

module.exports = router;