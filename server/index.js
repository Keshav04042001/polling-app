const express = require('express');
const app = express();

const handle = require('./handlers/');

const port = 5000;

app.get('/', (req, res) => {
    res.json({
        Hello:'Sir'
    })
})

app.use(handle.notFound);
app.use(handle.errors);

app.listen(port, console.log(`Listening on port ${port}`))
