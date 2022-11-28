const express = require('express')
const path = require('path');
const myCoursesRouter = express.Router()
const { watchVideoC } = require('../controller/corporatetraineeController');
const { openCourse } = require('../controller/viewCoursesController')
const { watchVideo } = require('../controller/individualTraineeController')

myCoursesRouter.get('/individualTrainee/watch', watchVideo)

myCoursesRouter.get('/corporateTrainee/watch', watchVideoC)

myCoursesRouter.get('/openCourse', openCourse)


module.exports = myCoursesRouter