const asyncHandler = require('express-async-handler')
const individualTraineeModel = require('../models/individualTraineeModel')
//const nodemailer = require('nodemailer')
 const course = require('../models/courseModel')
const courseModel=require('../models/courseModel')
const instructorModel=require('../models/instructorModel')
const course = require('./searchController')
const changePassword = asyncHandler(async (req, res) => {
    const user = await individualTraineeModel.findById(req.body.id);
    if (user.password == req.body.oldPassword) {
        const individualTrainee = await individualTraineeModel.findByIdAndUpdate(req.body.id, { password: req.body.password })
        res.status(200).json({
            message: 'Password Updated!'
        })
    }
    else
        res.status(400).json({
            message: 'Old Password is incorrect!'
        })
})

const signUp = asyncHandler(async (req, res) => {
    const individualTrainee = await individualTraineeModel.create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        gender: req.body.wallet,
        country: req.body.country,
        wallet: req.body.wallet,
        enrolledCourses: req.body.enrolledCourses
    })

    res.status(200).json(individualTrainee)
})





//not working properly yet.................
const registerForCourse = asyncHandler(async (req, res) => {
    const findUser = await individualTraineeModel.findById(req.body.id);
    const courses = findUser.enrolledCourses
    courses.push(req.body.courseId)
    const user = await individualTraineeModel.findByIdAndUpdate(req.body.id, { enrolledCourses: courses })
    const populateCourse = await individualTraineeModel.findById(req.body.id).populate("course").exec((err, result) => {
        if (err) {
            return res.json({ error: err })
        }
        res.json({ result: result })
    });
})

const RatingCourses = async (req, res) => {
    const id = req.query.id
    const rating1 = req.body.rating
    const courseBeforeUpdate = await courseModel.findById(id)
    let ratings = courseBeforeUpdate.ratings
    if (rating1 == 1) {
        ratings.oneStar++
    }
    else if (rating1 == 2) {
        ratings.twoStar++
    }
    else if (rating1 == 3) {
        ratings.threeStar++
    }
    else if (rating1 == 4) {
        ratings.fourStar++
    }
    else if (rating1 == 5) {
        ratings.fiveStar++
    }
    const avgRating = (5 * ratings.fiveStar + 4 * ratings.fourStar + 3 * ratings.threeStar + 2 * ratings.twoStar + 1 * ratings.oneStar) / (ratings.fiveStar + ratings.fourStar + ratings.threeStar + ratings.twoStar + ratings.oneStar)
    const course = await courseModel.findByIdAndUpdate(id, { ratings: ratings, rating: avgRating })

    res.status(200).json(course.ratings)

}
  
const RatingInstructor = async(req,res)=>{
    const id = req.query.id
    const rating1 = req.body.rating
    const instructorBeforeUpdate = await instructorModel.findById(id)
    let ratings = instructorBeforeUpdate.ratings
    if (rating1 == 1) {
        ratings.oneStar++
    }
    else if (rating1 == 2) {
        ratings.twoStar++
    }
    else if (rating1 == 3) {
        ratings.threeStar++
    }
    else if (rating1 == 4) {
        ratings.fourStar++
    }
    else if (rating1 == 5) {
        ratings.fiveStar++
    }
    const avgRating = (5 * ratings.fiveStar + 4 * ratings.fourStar + 3 * ratings.threeStar + 2 * ratings.twoStar + 1 * ratings.oneStar) / (ratings.fiveStar + ratings.fourStar + ratings.threeStar + ratings.twoStar + ratings.oneStar)
    const instructor = await instructorModel.findByIdAndUpdate(id, { ratings: ratings, rating: avgRating })

    res.status(200).json(instructor.ratings)

}



module.exports = { changePassword, signUp, registerForCourse,RatingCourses,RatingInstructor}