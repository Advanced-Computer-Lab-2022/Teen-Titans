const express = require('express');
const path = require('path');
const viewCoursesRouter = express.Router()

const {getCourses,getPrices,filterPrice,filterRating,filterSubject} = require('../controller/viewCoursesController')

viewCoursesRouter.get('/filterSubject',filterSubject)
viewCoursesRouter.get('/filterPrice',filterPrice)
viewCoursesRouter.get('/filterRating',filterRating)
viewCoursesRouter.get('/',getCourses)
viewCoursesRouter.get('/prices',getPrices)



module.exports = viewCoursesRouter