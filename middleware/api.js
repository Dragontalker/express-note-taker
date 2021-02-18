const express = require('express');
const router = express.Router();

const data = require('../db/db.json');

router.get('/', (req, res) => res.json(data));

router.post('/', (req, res) => {
    const newTitle = req.params.title;
    const newText = req.params.text;
    if (!newTitle || !newText) {
        res.status(400).send({msg: 'Need non-empty title and text input.'})
    };
});

module.exports = router;