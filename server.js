const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/notes', require('./middleware/api'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}....`);
});