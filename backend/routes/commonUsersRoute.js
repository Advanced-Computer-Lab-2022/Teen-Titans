const express = require('express')
const path = require('path');
const commonUsersRouter = express.Router()
const { forgotPassword, resetPassword, RatingCourses, addReview } = require('../controller/commonUsersController')
const { viewMyCourses } = require('../controller/individualTraineeController')
const { myCourses, exercise } = require('../controller/corporateTraineeController')

commonUsersRouter.post('/forgotPassword', forgotPassword)
commonUsersRouter.patch('/resetPassword', resetPassword)
commonUsersRouter.get('/individualTraineeCourses', viewMyCourses)
commonUsersRouter.get('/corporateTraineeCourses', myCourses)
commonUsersRouter.patch('/review', addReview)
commonUsersRouter.post('/rateCourse', RatingCourses)

module.exports = commonUsersRouter