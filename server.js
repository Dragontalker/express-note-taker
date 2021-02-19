const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());


app.use('/api/notes', require('./middleware/api'));
app.use('/', require('./middleware/html'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}....`);
});