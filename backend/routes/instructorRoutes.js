const express = require('express');
const path = require('path');
const instructorRouter = express.Router()
const { createCourse } = require('../controller/instructorController')
const course = require('../controller/searchController')

const{ getCourses,getPrices} = require('../controller/viewCoursesController')

instructorRouter.get('/getCourses',getCourses)
instructorRouter.get('/getPrices',getPrices)

instructorRouter.post('/createCourse', createCourse)
instructorRouter.get('/:searchInput', course)

module.exports = instructorRouter