const express = require('express');
const uuid = require('uuid');
const router = express.Router();

const data = require('../db/db.json');

router.get('/', (req, res) => res.json(data));

router.post('/', (req, res) => {
    const newTitle = req.body.title;
    const newText = req.body.text;
    if (!newTitle || !newText) {
        res.status(400).send({msg: 'Need non-empty title and text input.'})
    } else {
        const newJSON = {
            title: newTitle,
            text: newText
        };
        data.push(newJSON);
        res.send(data);
    };
});

module.exports = router;