const express = require('express')
const path = require('path');
const commonUsersRouter = express.Router()
const { forgotPassword, resetPassword, RatingCourses, addReview, RatingInstructor, addInstructorReview, generateCertificateByEmail, generateCertificate ,report,getReport} = require('../controller/commonUsersController')
const { viewMyCourses,viewWallet } = require('../controller/individualTraineeController')
const { myCourses,checkAccess,requestAccess } = require('../controller/corporateTraineeController')
 commonUsersRouter.get('/wallet', viewWallet)
commonUsersRouter.post('/forgotPassword', forgotPassword)
commonUsersRouter.patch('/resetPassword', resetPassword)
commonUsersRouter.get('/individualTraineeCourses', viewMyCourses)
commonUsersRouter.get('/corporateTraineeCourses', myCourses)
commonUsersRouter.patch('/review', addReview)
commonUsersRouter.patch('/instructorReview', addInstructorReview)
commonUsersRouter.patch('/rateCourse', RatingCourses)
commonUsersRouter.patch('/rateInstructor', RatingInstructor)
commonUsersRouter.post('/getCertificateByEmail', generateCertificateByEmail)
commonUsersRouter.get('/getCertificate', generateCertificate)
commonUsersRouter.get('/checkAccess', checkAccess)
commonUsersRouter.post('/requestAccess', requestAccess)
commonUsersRouter.post('/report', report)
commonUsersRouter.get('/getReport',getReport)




module.exports = commonUsersRouter