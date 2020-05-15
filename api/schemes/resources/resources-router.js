const express = require('express');

const Resources = require('./resources-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    console.log("resources")
    Resources.getResources()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get resources' });
        });
  });

router.post("/",validateResource,(req,res)=>{
    console.log("Resource post")
    Resources.createResource(req.body)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(err => {
            res.status(500).json({error: "Database error while creating resource"+err})
        })
})

function validateResource (req,res,next){
    if (req.body.resource_name){
        next();
    } else {
        res.status(401).json({message: "Please create a resource name"})
    }
}

module.exports = router;