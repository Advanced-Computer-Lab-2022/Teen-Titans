const asyncHandler = require('express-async-handler')
const Admin = require('../models/adminModel')
const courseModel = require('../models/courseModel')
const instructorModel = require('../models/instructorModel.js')
const corporateTraineeModel = require('../models/corporateTraineeModel.js')
const requestModel = require('../models/requestModel.js')
const individualTraineeModel = require('../models/individualTraineeModel.js')
const reportModel = require('../models/reportModel.js')
const { request } = require('express')



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
                country: 'Egypt',
                biography: '',
                moneyOwed: 0,
                rating: 0,
                agreed: false,
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
                country: 'Egypt',
                enrolledCourses: []
            })
            res.status(200).json(corporateTrainee)
        }
    }
})

//define promotion


const definePromotion = asyncHandler(async (req, res) => {
    const { id } = req.params
    const course = await courseModel.findById(id)
    let coursePrice = course.price
    const date = new Date();
    console.log(date);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    // This arrangemenfjhjht can be altered based on how we want the date's format to appear.
    let currentDate = `${year}-${month}-${day}`;
    // "17-6-2022"

    currentDate = currentDate + 'T00:00:00.000+00:00'
    console.log("alooo" + currentDate);
    let courseEndDate = new Date(req.body.endDate)
    let discountDay = courseEndDate.getDate();
    let discountMonth = courseEndDate.getMonth() + 1;
    let discountYear = courseEndDate.getFullYear();
    let discountDate = `${discountYear}-${discountMonth}-${discountDay}`;
    discountDate = discountDate + 'T00:00:00.000+00:00'
    console.log("aloo000" + discountDate)
    if (currentDate > discountDate) {
        const course3 = await courseModel.findOneAndUpdate({ _id: id }, {

            amount: 0,
            endDate: "",
            price: coursePrice
        })
        return res.status(302).json({ error: 'invalid date' })
    }
    else {

        const course1 = await courseModel.findOneAndUpdate({ _id: id }, {
            discount: {
                amount: req.body.amount,
                //startDate: req.body.startDate,
                endDate: courseEndDate

            },
        }, { new: true })

        let discountAmount = req.body.amount
        const course2 = await courseModel.findOneAndUpdate({ _id: id }, {

            price: coursePrice - coursePrice * (discountAmount / 100)

            ,
        }, { new: true })
    }

    if (!course) {
        return res.status(400).json({ error: 'No such course' })
    }
    res.status(200).json(course)
})


const getRequests = asyncHandler(async (req, res) => {
    const requests = await requestModel.find({ type: "corporate", status: "pending" })
    res.status(200).json(requests)
})

const getRefunds = asyncHandler(async (req, res) => {
    const requests = await requestModel.find({ type: "refund", status: "pending" })

    for (i = 0; i < requests.length; i++) {
        const user = await individualTraineeModel.findById(requests[i].userId);
        const course = await courseModel.findById(requests[i].courseId);

        if (user && course) {
            requests[i].username = user.username
            requests[i].courseTitle = course.title
            requests[i].coursePrice = course.price
        }

    }
    res.status(200).json(requests)
})

const getReports = asyncHandler(async (req, res) => {
    const reports = await reportModel.find()

    for (i = 0; i < reports.length; i++) {
        const user = await corporateTraineeModel.findById(reports[i].userId);
        const course = await courseModel.findById(reports[i].courseId);

        if (user && course) {
            reports[i].username = user.username
            reports[i].courseTitle = course.title
        }
        else {
            const user = await individualTraineeModel.findById(reports[i].userId);
            if (user && course) {
                reports[i].username = user.username
                reports[i].courseTitle = course.title
            }
            else {
                const user = await instructorModel.findById(reports[i].userId);
                if (user && course) {
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

const getInstructor = asyncHandler(async (req, res) => {
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
        .findByIdAndUpdate(req.body.id, { status: "resolved" });

    if (request) {
        // console.log(request)
        res.status(200).json(request)
    }
})


const updateReport = asyncHandler(async (req, res) => {
    const report = await reportModel
        .findByIdAndUpdate(req.body.id, { status: req.body.status }, { new: false });

    if (report) {
        res.status(200).json(report)
    }
})

module.exports = { selectedUser, definePromotion, getRequests, getTrainee, getRefunds, getIndividualTrainee, getReports, getInstructor, changeStatus, updateReport }