const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.status(404).send({
            error: 'Page not found',
            name: 'Todo App v1.0'
        })
})

app.get('/users', (req, res) => {
    res.status(200).send([{
        name: 'Mario',
        age:31
    }])
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
})

module.exports = { app };
