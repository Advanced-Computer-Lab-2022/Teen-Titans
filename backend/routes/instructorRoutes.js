const express = require('express');
const path = require('path');
const instructorRouter = express.Router()
const { createCourse, upload, allcourses, course, subject, instructorSearchCourse, changePassword, viewInstructorRatings, editEmail, editBiography, definePromotion } = require('../controller/instructorController')
const courses = require('../controller/searchController')
const { getCourses, getPrices } = require('../controller/viewCoursesController')

instructorRouter.get('/:id', course)
instructorRouter.get('/all/:id', allcourses)
instructorRouter.get('/subject/:id', subject)
instructorRouter.get('/myCourses/:searchInput/:id', instructorSearchCourse)
instructorRouter.post('/createCourse', createCourse)
instructorRouter.post('/upload', upload)
instructorRouter.patch('/definePromotion/:id', definePromotion)
instructorRouter.patch('/editEmail/:id', editEmail)
instructorRouter.patch('/changePassword', changePassword)
instructorRouter.patch('/editBiography/:id', editBiography)
// instructorRouter.get('/:searchInput', courses)

instructorRouter.get('/getCourses', getCourses)
instructorRouter.get('/getPrices', getPrices)


module.exports = instructorRouter