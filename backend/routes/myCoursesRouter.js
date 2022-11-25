const express = require('express')
const path = require('path');
const myCoursesRouter = express.Router()
const { openCourse } = require('../controller/viewCoursesController')


myCoursesRouter.get('/openCourse', openCourse)

module.exports = myCoursesRouter