const express = require('express')
const path = require('path');
const courses = express.Router()
const course = require('../controller/courseController')


courses.get('/:id',course)


module.exports = courses