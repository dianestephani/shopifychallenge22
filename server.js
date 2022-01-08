const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


//Get route
app.get('/', (req, res) => {
    res.send('Hello world!');
});

//Listening on specified port
app.listen(port, () => console.log(`Listening on port ${port}`));