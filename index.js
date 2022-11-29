const express = require('express');
const app = express()
const path = require('path');
var cors = require('cors')
const urlroutes = require('./routes/url.routes');
require('./db/mongoose');

const port = process.env.PORT || 8000

app.use(express.json())


app.use(cors())

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(express.static(path.join(__dirname, 'public')));

app.use(urlroutes);

app.listen(port , () =>{
    console.log(`Server is running on port ${port}`);
})