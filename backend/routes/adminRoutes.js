const express = require('express')
const path = require('path');
const adminAddUser = express.Router()

const{ getCourses,getPrices} = require('../controller/viewCoursesController')

const { selectedUser } = require('../controller/adminController');


adminAddUser.post('/addUser', selectedUser)

adminAddUser.get('/getCourses',getCourses)

adminAddUser.get('/getPrices',getPrices)

module.exports = adminAddUser