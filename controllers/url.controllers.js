const URL = require('../models/url');
require('dotenv').config()
const shortid = require('shortid');
const isUrl = require("is-valid-http-url");
const baseURL = process.env.baseURL || 'https://sheltered-harbor-86959.herokuapp.com'


const createURL = async(req,res,next) => {
    const originalurl = req.body.originalurl;
    if(!isUrl(originalurl))
    {
        return res.status(422).send({
            error: 'This is not a valid URL'
        });
    }
    const shortId = shortid.generate()
    const urlExist = await URL.findOne({originalUrl: originalurl})
    if(urlExist)
    {
        return res.send({
            message:"URL already have a shortURL generated",
            link:urlExist.originalUrl,
            shorturl: urlExist.shortUrl
        })
    }
    const shorturl = baseURL + '/' + shortId
    const url = new URL({
        originalUrl: originalurl,
        shortUrl: shorturl
    });

    await url.save()
    res.status(201).json({
        message: 'Success',
        link:originalurl,
        shorturl:shorturl
    });

}

const showURL = async(req,res,next) =>{
    const shorturl = baseURL + '/' + req.params.shortId
    try {
        const url = await URL.findOne({shortURL:shorturl})
        if(url)
        {
            return res.redirect(url.originalUrl)
        }
        else{
            return res.status(404).json({
                message:'Page not found'
            })
        }
    }
    catch {
        res.status(500).send({error: 'Server Error'});
    }
} 


module.exports = { createURL , showURL } 