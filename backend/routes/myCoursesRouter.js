const express = require('express')
const path = require('path');
const myCoursesRouter = express.Router()
const { watchVideoC, videoSeenC, openCourseC } = require('../controller/corporateTraineeController');
// const { openCourse } = require('../controller/viewCoursesController')
const { watchVideo, videoSeen, openCourse } = require('../controller/individualTraineeController')

myCoursesRouter.get('/individualTrainee/watch', watchVideo)

myCoursesRouter.get('/corporateTrainee/watch', watchVideoC)

myCoursesRouter.get('/corporateTrainee/openCourse', openCourseC)

myCoursesRouter.get('/individualTrainee/openCourse', openCourse)

myCoursesRouter.patch('/individualTrainee/seen', videoSeen)

myCoursesRouter.patch('/corporateTrainee/seen', videoSeenC)

module.exports = myCoursesRouter