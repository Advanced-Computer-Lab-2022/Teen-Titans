const express = require('express')
const path = require('path');
const corporateTraineeRouter = express.Router()
const courses = require('../controller/searchController')
const { changePassword, registerForCourse } = require('../controller/corporateTraineeController')
const { getCourses, getPrices } = require('../controller/viewCoursesController')

corporateTraineeRouter.get('/getCourses', getCourses)
corporateTraineeRouter.get('/getPrices', getPrices)
corporateTraineeRouter.patch('/changePassword', changePassword)
corporateTraineeRouter.post('/registerForCourse', registerForCourse)
corporateTraineeRouter.get('/:searchInput', courses)
// corporateTraineeRouter.post('/forgotPassword', forgotPassword)
// corporateTraineeRouter.patch('/resetPassword/:id', resetPassword)
module.exports = corporateTraineeRouter