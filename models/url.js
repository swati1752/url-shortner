const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    originalURL:{

    },
    shortURL:{

    }
},{
        timestamps:true
    })

module.exports = mongoose.model('Url', urlSchema);