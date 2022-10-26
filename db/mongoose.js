const mongoose = require('mongoose');
require('dotenv').config()
const url = process.env.MONGO_URL
mongoose.connect(url, {
    useUnifiedTopology: true,
    // useNewUrlParser: true,
    // useFindAndModify: false,
    // useCreateIndex: true
}).then(() => {
    console.log('Connect to Database');
}).catch(err => {
    console.log(err);
});