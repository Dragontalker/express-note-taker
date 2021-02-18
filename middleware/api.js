const express = require('express');
const uuid = require('uuid');
const router = express.Router();

const data = require('../db/db.json');

router.get('/', (req, res) => res.json(data));

router.post('/', (req, res) => {
    const newTitle = req.body.title;
    const newText = req.body.text;
    if (!newTitle || !newText) {
        console.log(`400 Bad Request: With Title: ${newTitle} and Text: ${newText}...`);
        res.status(400).json({msg: 'Need non-empty title and text input.'})
    } else {
        const newJSON = {
            id: uuid.v4(),
            title: newTitle,
            text: newText
        };
        console.log(`200 Good Request: With ID: ${newJSON.id} Title: ${newJSON.title} and Text: ${newJSON.text}...`);
        data.push(newJSON);
        res.json(data);
    };
});

router.delete('/:id', (req, res) => {
    const found = data.some(obj => obj.id === req.params.id);
    if (found) {
        console.log(`Entry with id ${req.params.id} found, deleting...`);
        const newData = data.filter(obj => obj.id !== req.params.id);
        res.json(newData);
    } else {
        console.log(`Error: Entry with id ${req.params.id} not found, double check your id!`);
        res.status(400).json(data);
    }
});

module.exports = router;