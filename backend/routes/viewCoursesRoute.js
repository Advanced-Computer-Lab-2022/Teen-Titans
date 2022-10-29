const express = require('express');
const path = require('path');
const viewCoursesRouter = express.Router()

const { getCourses, getPrices, viewCourseOnHover } = require('../controller/viewCoursesController')



viewCoursesRouter.get('/', getCourses)
viewCoursesRouter.get('/prices', getPrices)
viewCoursesRouter.get('/:id', viewCourseOnHover)


module.exports = viewCoursesRouter