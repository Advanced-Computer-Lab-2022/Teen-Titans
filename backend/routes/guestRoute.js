const express = require('express')
const path = require('path');
const guestRouter = express.Router()
const course = require('../controller/searchController')

const {getCourses,getPrices}= require('../controller/viewCoursesController')

guestRouter.get('/getCourses',getCourses)

guestRouter.get('/getPrices',getPrices)

guestRouter.get('/:searchInput', course)

module.exports = guestRouter