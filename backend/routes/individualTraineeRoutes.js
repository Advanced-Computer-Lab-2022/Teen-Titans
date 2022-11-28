const express = require('express');
const path = require('path');
const individualTraineeRouter = express.Router()
const courses = require('../controller/searchController')
const { changePassword, registerForCourse, watchVideo } = require('../controller/individualTraineeController')
const { getCourses, getPrices } = require('../controller/viewCoursesController')

individualTraineeRouter.get('/getCourses', getCourses)

individualTraineeRouter.get('/getPrices', getPrices)

individualTraineeRouter.get('/:searchInput', courses)

individualTraineeRouter.patch('/changePassword', changePassword)

individualTraineeRouter.post('/registerForCourse', registerForCourse)

individualTraineeRouter.get('/watch', watchVideo)

module.exports = individualTraineeRouter