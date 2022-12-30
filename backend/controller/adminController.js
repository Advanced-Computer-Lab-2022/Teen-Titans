const asyncHandler = require('express-async-handler')
const Admin = require('../models/adminModel')
const instructorModel = require('../models/instructorModel.js')
const corporateTraineeModel = require('../models/corporateTraineeModel.js')
const requestModel = require('../models/requestModel.js')
const individualTraineeModel = require('../models/individualTraineeModel.js')
const reportModel = require('../models/reportModel.js')
const { request } = require('express')
const courseModel = require('../models/courseModel.js')


//This is to know which user is chosen by the admin

const selectedUser = asyncHandler(async (req, res) => {
    const selectedElement = req.body.selectedElement
    const admins = await Admin.find({ username: req.body.username })
    const instructors = await instructorModel.find({ username: req.body.username })
    const trainees = await corporateTraineeModel.find({ username: req.body.username })

    if (!req.body) {
        res.status(400)
        throw new Error("Please enter username and password")
    }
    else if (admins.length != 0 || instructors.length != 0 || trainees.length != 0) {
        res.status(400)
        throw new Error('username exists')
    }
    else {
        if (selectedElement == 'Admin') {
            const admin = await Admin.create({
                username: req.body.username,
                password: req.body.password
            })
            res.status(200).json(admin)
        }
        else if (selectedElement == 'Instructor') {
            const instructor = await instructorModel.create({
                username: req.body.username,
                password: req.body.password,
                email: '',
                firstName: '',
                lastName: '',
                gender: '',
                country: '',
                biography: '',
                moneyOwed: 0,
                rating: 0,
                ratings: {
                    oneStar: 0,
                    twoStar: 0,
                    threeStar: 0,
                    fourStar: 0,
                    fiveStar: 0,
                },
                reviews: [],
                courses: []
            })
            res.status(200).json(instructor)
        }
        else {
            const corporateTrainee = await corporateTraineeModel.create({
                username: req.body.username,
                password: req.body.password,
                email: '',
                firstName: '',
                lastName: '',
                gender: '',
                country: '',
                enrolledCourses: []
            })
            res.status(200).json(corporateTrainee)
        }
    }
})

const getRequests = asyncHandler(async (req, res) => {
    const requests = await requestModel.find({type: "corporate",status: "pending"})
    res.status(200).json(requests)
})

const getRefunds = asyncHandler(async (req, res) => {
    const requests = await requestModel.find({type: "refund",status: "pending"})

    for( i =0;i<requests.length;i++){
        const user = await individualTraineeModel.findById(requests[i].userId);
        const course= await courseModel.findById(requests[i].courseId);
    
        if(user){
            requests[i].username = user.username
            requests[i].courseTile = course.title
            requests[i].coursePrice = course.price
        }
       
    }
    res.status(200).json(requests)
})

const getReports = asyncHandler(async (req, res) => {
    const reports = await reportModel.find()
   
    for( i =0;i<reports.length;i++){
        const user = await corporateTraineeModel.findById(reports[i].userId);
        const course= await courseModel.findById(reports[i].courseId);
    
        if(user){
        reports[i].username = user.username
        reports[i].courseTile = course.title
        }
        else{
            const user = await individualTraineeModel.findById(reports[i].userId);
            if(user){
            reports[i].username = user.username
            reports[i].courseTitle = course.title
            }
            else{
                const user = await instructorModel.findById(reports[i].userId);
                if(user){
                reports[i].username = user.username
                reports[i].courseTitle = course.title
                }
            }
        }
     


    }

    res.status(200).json(reports)
})


const getTrainee = asyncHandler(async (req, res) => {
    const user = await corporateTraineeModel.findById(req.query.traineeid);
    if (user)
    res.status(200).json(user)
else
    res.status(400).json({
        message: 'user not found!'
    })

  
   
})




const getIndividualTrainee = asyncHandler(async (req, res) => {
    const user = await individualTraineeModel.findById(req.query.traineeid);
    if (user)
    res.status(200).json(user)
else
    res.status(400).json({
        message: 'user not found!'
    })
})

const getInstructor= asyncHandler(async (req, res) => {
    const user = await instructorModel.findById(req.query.traineeid);
    if (user)
    res.status(200).json(user)
else
    res.status(400).json({
        message: 'user not found!'
    })
})

const changeStatus = asyncHandler(async (req, res) => {
    // console.log("inside changestatus",req.body.id)
    const request = await requestModel
        .findByIdAndUpdate(req.body.id,{status: "resolved"});
        
    if (request) {
// console.log(request)
        res.status(200).json(request)
    }
})


const updateReport = asyncHandler(async (req, res) => {
    const report = await reportModel
        .findByIdAndUpdate(req.body.id,{status: req.body.status}, {new: false});
        
    if (report) {
        res.status(200).json(report)
    }
})

module.exports = { selectedUser,getRequests ,getTrainee,getRefunds,getIndividualTrainee,getReports,getInstructor,changeStatus,updateReport}