const express = require('express');

const Resources = require('./resources-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    console.log("resources")
    Resources.getResources()
        .then(resources => {
            res.json(resources);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get resources' });
        });
  });

module.exports = router;