const express = require('express')
const path = require('path');
const countryRouter = express.Router()

const { selectedCountry } = require('../controller/countryController')

countryRouter.get('/:country', selectedCountry);

module.exports = countryRouter