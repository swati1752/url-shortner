const express = require('express');
const { createURL , showURL } = require('../controllers/url.controllers');
const router = express.Router();

router.post('/shortUrl', createURL);
router.get('/:shortId', showURL);

module.exports = router;