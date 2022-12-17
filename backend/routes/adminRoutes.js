const express = require('express')
const path = require('path');
const adminAddUser = express.Router()

const{ getCourses,getPrices} = require('../controller/viewCoursesController')

const { selectedUser,getRequests,getTrainee } = require('../controller/adminController');


adminAddUser.post('/addUser', selectedUser)

adminAddUser.get('/getCourses',getCourses)

adminAddUser.get('/getPrices',getPrices)

adminAddUser.get('/getRequests',getRequests)

adminAddUser.get('/getTrainee',getTrainee)



module.exports = adminAddUser