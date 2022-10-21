const express = require('express')
const path = require('path');
const countryRouter = express.Router()

countryRouter.get('/', function(req, res) {
        res.send('frontend/selectCountry.html')
      });

module.exports = countryRouter