const express = require('express');
const path = require('path');
const viewCoursesRouter = express.Router()

const {getCourses,getPrices} = require('../controller/viewCoursesController')



viewCoursesRouter.get('/',getCourses)
viewCoursesRouter.get('/prices',getPrices)



module.exports = viewCoursesRouter