const express = require('express');
const path = require('path');
const individualTraineeRouter = express.Router()
const courses = require('../controller/searchController')
const { changePassword, registerForCourse, viewWallet, signUp, watchPreviewVideo, viewMostPopularCourses, registerForCourseUsingWallet } = require('../controller/individualTraineeController')
const { getCourses, getPrices } = require('../controller/viewCoursesController');
individualTraineeRouter.get('/viewPopularCourses', viewMostPopularCourses)

individualTraineeRouter.get('/watchPreviewVideo', watchPreviewVideo)

individualTraineeRouter.get('/getCourses', getCourses)

individualTraineeRouter.get('/getPrices', getPrices)

individualTraineeRouter.get('/:searchInput', courses)

individualTraineeRouter.patch('/changePassword', changePassword)

individualTraineeRouter.post('/registerForCourse', registerForCourse)

individualTraineeRouter.post('/signup', signUp)

individualTraineeRouter.post('/registerForCourseUsingWallet', registerForCourseUsingWallet)


module.exports = individualTraineeRouter