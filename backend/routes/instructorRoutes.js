const express = require('express')
const path = require('path');
const instructorRouter = express.Router()
const {createCourse,getCoursesTitles,allcourses,course,subject} = require('../controller/instructorController')

instructorRouter.post('/createCourse',createCourse)
instructorRouter.get('/getCoursesTitles',getCoursesTitles)
instructorRouter.get('/',course)
instructorRouter.get('/all',allcourses)
instructorRouter.get('/subject',subject)




module.exports = instructorRouter