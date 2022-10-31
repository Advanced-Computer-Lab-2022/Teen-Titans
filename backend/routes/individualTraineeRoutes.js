const express = require('express')
const path = require('path');
const individualTraineeRouter = express.Router()
const courses = require('../controller/searchController')

individualTraineeRouter.get('/:searchInput', courses)

module.exports = individualTraineeRouter