const express = require('express')
const path = require('path');
const guestRouter = express.Router()
const courses = require('../controller/searchController')
const { signUp } = require('../controller/individualTraineeController')
const { getCourses, getPrices } = require('../controller/viewCoursesController')

guestRouter.get('/getCourses', getCourses)

guestRouter.get('/getPrices', getPrices)

guestRouter.get('/:searchInput', courses)

guestRouter.post('/signUp', signUp)

module.exports = guestRouter