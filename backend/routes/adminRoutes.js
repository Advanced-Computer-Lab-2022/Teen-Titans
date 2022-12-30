const express = require('express')
const path = require('path');
const adminAddUser = express.Router()

const{ getCourses,getPrices} = require('../controller/viewCoursesController')

const { selectedUser,getRequests,getTrainee,getRefunds, getIndividualTrainee,getReports, getInstructor,changeStatus, updateReport} = require('../controller/adminController');


adminAddUser.post('/addUser', selectedUser)

adminAddUser.get('/getCourses',getCourses)

adminAddUser.get('/getPrices',getPrices)

adminAddUser.get('/getRequests',getRequests)

adminAddUser.get('/getTrainee',getTrainee)

adminAddUser.get('/getRefunds',getRefunds)

adminAddUser.get('/getReports',getReports)


adminAddUser.get('/getindividualTrainee',getIndividualTrainee)

adminAddUser.get('/getInstructor',getInstructor)

adminAddUser.post('/changeStatus',changeStatus)

adminAddUser.post('/updateReport',updateReport)








module.exports = adminAddUser