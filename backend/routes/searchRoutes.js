const express = require('express')
const path = require('path');
const searchRouter = express.Router()
const course = require('../controller/searchController')

searchRouter.get('/:searchInput',course)

module.exports = searchRouter