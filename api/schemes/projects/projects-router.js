const express = require('express');

const Projects = require('./projects-model.js');

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

module.exports = router;