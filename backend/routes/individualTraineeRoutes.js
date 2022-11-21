const express = require('express');
const path = require('path');
const individualTraineeRouter = express.Router()
const courses = require('../controller/searchController')
const { changePassword, forgotPassword, resetPassword, registerForCourse } = require('../controller/individualTraineeController')
const { getCourses, getPrices } = require('../controller/viewCoursesController')

individualTraineeRouter.get('/getCourses', getCourses)

individualTraineeRouter.get('/getPrices', getPrices)

individualTraineeRouter.get('/:searchInput', courses)

individualTraineeRouter.patch('/changePassword/:id', changePassword)

individualTraineeRouter.post('/forgotPassword', forgotPassword)

individualTraineeRouter.patch('/resetPassword/:id', resetPassword)

individualTraineeRouter.post('/registerForCourse', registerForCourse)

module.exports = individualTraineeRouter