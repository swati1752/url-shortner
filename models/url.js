const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    originalURL:{
        type:String,
        required:true
    },
    shortURL:{
        type:String,
        required: true,
    }
},{
        timestamps:true
    })

module.exports = mongoose.model('Url', urlSchema);