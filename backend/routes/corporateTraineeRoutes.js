const express = require('express')
const path = require('path');
const corporateTraineeRouter = express.Router()
const course = require('../controller/searchController')
const { RatingCourses, RatingInstructor } = require('../controller/corporateTraineeController');
corporateTraineeRouter.get('/:searchInput', course)
corporateTraineeRouter.post('/RateCourses/:id', RatingCourses)
corporateTraineeRouter.post('/RateInstructor/:id', RatingInstructor)
module.exports = corporateTraineeRouter