const express = require('express')
const path = require('path');
const searchRouter = express.Router()
const courses = require('../controller/searchController')


searchRouter.get('/', courses)


module.exports = searchRouter