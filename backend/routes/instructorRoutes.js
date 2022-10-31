const express = require('express')
const path = require('path');
const instructorRouter = express.Router()
const { createCourse, instructorSearchCourse } = require('../controller/instructorController')
const course = require('../controller/searchController')

instructorRouter.post('/createCourse', createCourse)
instructorRouter.get('/myCourses/:searchInput/:id', instructorSearchCourse)
instructorRouter.get('/:searchInput', course)

module.exports = instructorRouter