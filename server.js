const express = require('express');
const app = express()
const path = require('path');
const urlroutes = require('./routes/url.routes');
require('./db/mongoose');

const port = process.env.PORT || 8000

app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')));

app.use(urlroutes);

app.listen(port , () =>{
    console.log(`Server is running on port ${port}`);
})