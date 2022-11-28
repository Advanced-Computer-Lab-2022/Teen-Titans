const express = require('express')
const path = require('path');
const { RatingCourses, RatingInstructor } = require('../controller/individualTraineeController');
const individualTraineeRouter = express.Router()
const course = require('../controller/searchController')

individualTraineeRouter.get('/:searchInput', course)
individualTraineeRouter.post('/RateCourses/:id', RatingCourses)
individualTraineeRouter.post('/RateInstructor/:id', RatingInstructor)

module.exports = individualTraineeRouter