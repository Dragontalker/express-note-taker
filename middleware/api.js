const express = require('express');
const router = express.Router();

const data = require('../db/db.json');

console.log(data);

module.exports = router;