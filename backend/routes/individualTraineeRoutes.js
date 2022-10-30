const express = require('express');
const path = require('path');
const individualTraineeRouter = express.Router()
const course = require('../controller/searchController')

const {getCourses,getPrices}= require('../controller/viewCoursesController')

individualTraineeRouter.get('/getCourses',getCourses)

individualTraineeRouter.get('/getPrices',getPrices)

individualTraineeRouter.get('/:searchInput', course)

module.exports = individualTraineeRouter