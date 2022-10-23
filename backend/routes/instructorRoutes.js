const express = require('express')
const path = require('path');
const instructorRouter = express.Router()
const {createCourse} = require('../controller/instructorController')

instructorRouter.post('/createCourse',createCourse)

module.exports = instructorRouter