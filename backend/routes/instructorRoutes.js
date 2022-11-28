const express = require('express');
const path = require('path');
const instructorRouter = express.Router()
const { createCourse, upload, allcourses, course, subject, instructorSearchCourse, changePassword } = require('../controller/instructorController')
const courses = require('../controller/searchController')

const { getCourses, getPrices } = require('../controller/viewCoursesController')

instructorRouter.get('/getCourses', getCourses)
instructorRouter.get('/getPrices', getPrices)

instructorRouter.post('/createCourse', createCourse)
// instructorRouter.get('/getCoursesTitles', getCoursesTitles)
instructorRouter.get('/:id', course)
instructorRouter.get('/all/:id', allcourses)
instructorRouter.get('/subject/:id', subject)
instructorRouter.get('/myCourses/:searchInput/:id', instructorSearchCourse)
instructorRouter.get('/:searchInput', courses)
instructorRouter.patch('/changePassword', changePassword)
instructorRouter.post('/upload', upload)
// instructorRouter.post('/forgotPassword', forgotPassword)
// instructorRouter.patch('/resetPassword/:id', resetPassword)



module.exports = instructorRouter