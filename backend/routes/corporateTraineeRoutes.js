const express = require('express')
const path = require('path');
const corporateTraineeRouter = express.Router()
const course = require('../controller/searchController')

corporateTraineeRouter.get('/:searchInput', course)

module.exports = corporateTraineeRouter