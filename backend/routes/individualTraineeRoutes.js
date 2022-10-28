const express = require('express')
const path = require('path');
const individualTraineeRouter = express.Router()
const course = require('../controller/searchController')

individualTraineeRouter.get('/:searchInput', course)

module.exports = individualTraineeRouter