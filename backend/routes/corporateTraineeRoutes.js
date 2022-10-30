const express = require('express')
const path = require('path');
const corporateTraineeRouter = express.Router()
const course = require('../controller/searchController')

const {getCourses,getPrices}= require('../controller/viewCoursesController')

corporateTraineeRouter.get('/getCourses',getCourses)
corporateTraineeRouter.get('/getPrices',getPrices)


corporateTraineeRouter.get('/:searchInput', course)

module.exports = corporateTraineeRouter