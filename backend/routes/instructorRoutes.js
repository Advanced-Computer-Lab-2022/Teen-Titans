const express = require('express')
const path = require('path');
const instructorRouter = express.Router()
const {createCourse,getCoursesTitles} = require('../controller/instructorController')

instructorRouter.post('/createCourse',createCourse)
instructorRouter.get('/getCoursesTitles',getCoursesTitles)

module.exports = instructorRouter