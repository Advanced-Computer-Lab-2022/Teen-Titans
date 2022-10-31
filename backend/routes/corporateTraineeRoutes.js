const express = require('express')
const path = require('path');
const corporateTraineeRouter = express.Router()
const courses = require('../controller/searchController')

corporateTraineeRouter.get('/:searchInput', courses)

module.exports = corporateTraineeRouter