const URL = require('../models/url');
const isURL = require('isurl');
const shortid = require('shortid');
const express = require('express');
const router = express.Router()
const baseURL = process.env.baseURL
// if(isURL(new URL()))

const createURL = async(req,res,next) => {
    const { originalurl} = req.body
    if(!isURL(new URL(originalurl)))
    {
        return res.status(422).send({
            error: 'This is not a valid URL'
        });
    }
    const shortId = shortid.generate()
    const urlExist = await URL.findOne({originalURL: originalurl})
    if(urlExist)
    {
        return res.send({
            message:"URL already have a shortURL generated",
            link:urlExist.originalURL,
            shorturl: urlExist.shortURL
        })
    }
    const shorturl = baseURL + '/' + shortId
    const url = new URL({
        originalurl,
        shorturl
    });

    await url.save()
    res.status(201).json({
        message: 'Success',
        shorturl
    });
}

const showURL = async(req,res,next) =>{
    const shorturl = baseURL + '/' + req.params.shortId
    try {
        const url = await URL.findOne({shortURL:shorturl})
        if(url)
        {
            return res.redirect(url.originalURL)
        }
        else{
            return res.status(422).json({
                message:'Page not found'
            })
        }
    }
    catch {
        res.status(500).send({error: 'Server Error'});
    }
} 

router.post('/shortUrl' , createURL)
router.get('/:shortId' , showURL)

module.exports = router 