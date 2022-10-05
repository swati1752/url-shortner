const mongoose = require('mongoose');

const url = process.env.MONGO_URL
mongoose.connect(url, {
    useUnifiedTopology: true,
    // useNewUrlParser: true,
    // useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log('Connect to Database');
}).catch(err => {
    console.log('DB connection failed!');
});