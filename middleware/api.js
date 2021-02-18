const express = require('express');
const router = express.Router();

const data = require('../db/db.json');

router.get('/', (req, res) => res.json(data));

router.post('/', (req, res) => {
    
});

module.exports = router;