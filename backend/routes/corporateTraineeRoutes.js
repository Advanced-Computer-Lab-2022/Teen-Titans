const express = require('express')
const path = require('path');
const corporateTraineeRouter = express.Router()
const courses = require('../controller/searchController')

const { getCourses, getPrices } = require('../controller/viewCoursesController')
const {course} = require('../controller/corporatetraineeController')

corporateTraineeRouter.get('/getCourses', getCourses)
corporateTraineeRouter.get('/getPrices', getPrices)
corporateTraineeRouter.get('/:title', course)


corporateTraineeRouter.get('/:searchInput', courses)

module.exports = corporateTraineeRouter