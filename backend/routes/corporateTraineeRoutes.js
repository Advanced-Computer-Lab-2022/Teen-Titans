const express = require('express')
const path = require('path');
const corporateTraineeRouter = express.Router()
const courses = require('../controller/searchController')
const { changePassword, registerForCourse ,watchPreviewVideo} = require('../controller/corporateTraineeController')
const { getCourses, getPrices } = require('../controller/viewCoursesController')

corporateTraineeRouter.get('/watchPreviewVideo', watchPreviewVideo)
corporateTraineeRouter.get('/getCourses', getCourses)
corporateTraineeRouter.get('/getPrices', getPrices)
corporateTraineeRouter.patch('/changePassword', changePassword)
corporateTraineeRouter.post('/registerForCourse', registerForCourse)
corporateTraineeRouter.get('/:searchInput', courses)
module.exports = corporateTraineeRouter