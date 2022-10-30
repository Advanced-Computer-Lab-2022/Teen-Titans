const express = require('express')
const path = require('path');
const instructorRouter = express.Router()
const { createCourse, searchCourse } = require('../controller/instructorController')
const course = require('../controller/searchController')

instructorRouter.post('/createCourse', createCourse)
instructorRouter.get('/myCourses/:searchInput', searchCourse)
instructorRouter.get('/:searchInput', course)

module.exports = instructorRouter