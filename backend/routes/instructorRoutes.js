const express = require('express')
const path = require('path');
const instructorRouter = express.Router()
const { createCourse, getCoursesTitles, allcourses, course, subject, instructorSearchCourse } = require('../controller/instructorController')
const course = require('../controller/searchController')

instructorRouter.post('/createCourse', createCourse)
instructorRouter.get('/getCoursesTitles', getCoursesTitles)
instructorRouter.get('/', course)
instructorRouter.get('/all', allcourses)
instructorRouter.get('/subject', subject)



instructorRouter.get('/myCourses/:searchInput/:id', instructorSearchCourse)
instructorRouter.get('/:searchInput', course)

module.exports = instructorRouter