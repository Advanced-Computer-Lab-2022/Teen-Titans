const asyncHandler = require('express-async-handler')
const individualTraineeModel = require('../models/individualTraineeModel')
const instructorModel = require('../models/instructorModel')
const corporateTraineeModel = require('../models/corporateTraineeModel')
const courseModel = require('../models/courseModel')
const nodemailer = require('nodemailer')
const Binary = require('mongodb').Binary;
// const PDFDocument = require('pdfkit');
const fs = require("fs");

const { jsPDF } = require("jspdf"); // will automatically load the node version

const options = {
    format: "A3",
    orientation: "portrait",
    border: "10mm",
    header: {
        height: "45mm",
        contents: '<div style="text-align: center;">Author: Shyam Hajare</div>'
    },
    footer: {
        height: "28mm",
        contents: {
            first: 'Cover page',
            2: 'Second page', // Any page number is working. 1-based index
            default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
            last: 'Last Page'
        }
    }
};
const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
        user: "knowledgeBoost@outlook.com",
        pass: "Ta3leemMshMagani"
    }
})

const generateCertificateByEmail = async (req, res) => {
    // const doc = new PDFDocument();
    // doc
    //     .font('fonts/PalatinoBold.ttf')
    //     .fontSize(25)
    //     .text('Some text with an embedded font!', 100, 100);

    // doc.end()
    // const stream = res.writeHead(200, {
    //     'Content-Type': 'application/pdf',
    //     'Content-Disposition': 'attachment;filename=certificate.pdf'
    // })
    let trainee;
    if (req.query.user === "corporateTrainee")
        trainee = await corporateTraineeModel.findById(req.query.id)
    else
        trainee = await individualTraineeModel.findById(req.query.id)
    const course = await courseModel.findById(req.query.courseId)
    // const doc = new jsPDF();
    // doc.text(`This certificate goes to ${trainee.firstName} for completing the ${course.title} course`, 10, 10);
    // let insert_data = {};
    // insert_data.file_data = Binary(doc);
    //doc.save("certificate.pdf")
    const options = {
        from: "knowledgeBoost@outlook.com",
        to: trainee.email,
        subject: "Certificate of Completion",
        text: `Congratulations ${trainee.firstName}!
                Here is your certificate.`,
        attachments: [{
            path: req.body.pdfToSend
        }]
    }
    if (trainee) {
        transporter.sendMail(options, function (err, info) {
            if (err) {
                // fs.unlinkSync(doc.path());
                // console.log("Delete File successfully.");
                res.status(400).json(err)
            }
            else {
                // fs.unlinkSync(doc.path());
                // console.log("Delete File successfully.");
                res.status(200).json(trainee)
            }
        })
    }
}

const generateCertificate = asyncHandler(async (req, res) => {
    let trainee;
    if (req.query.user === "corporateTrainee")
        trainee = await corporateTraineeModel.findById(req.query.id)
    else
        trainee = await individualTraineeModel.findById(req.query.id)
    const course = await courseModel.findById(req.query.courseId)
    if (course) {
        res.status(200).json({
            name: `${trainee.firstName} ${trainee.lastName}`,
            course: `Has completed the ${course.title} course.`,
            instructor: course.instructorName
        })
    }
    else {
        res.status(400).json({
            message: `Something went wrong!`
        })
    }
})

const forgotPassword = asyncHandler(async (req, res) => {
    const individualTrainee = await individualTraineeModel.exists({ email: req.body.email })
    const corporateTrainee = await corporateTraineeModel.exists({ email: req.body.email })
    const instructor = await instructorModel.exists({ email: req.body.email })
    let user;
    if (individualTrainee)
        user = await individualTraineeModel.findById(individualTrainee)
    else if (corporateTrainee)
        user = await corporateTraineeModel.findById(corporateTrainee)
    else if (instructor)
        user = await instructorModel.findById(instructor)
    else
        res.status(400).json({
            message: "No user with such email!"
        })
    const options = {
        from: "knowledgeBoost@outlook.com",
        to: req.body.email,
        subject: "Reset Password",
        text: `Please click on the link below to rest password.
                http://localhost:3000/resetpassword`
    }
    if (user) {
        transporter.sendMail(options, function (err, info) {
            if (err)
                res.status(400).json(err)
            else
                res.status(200).json(user)
        })
    }
})

const resetPassword = asyncHandler(async (req, res) => {
    if (req.body.user == "individualTrainee") {
        const individualTrainee = await individualTraineeModel.findByIdAndUpdate(req.body.id, { password: req.body.password })
        res.status(200).json({
            message: 'Password Reset!'
        })
    }
    else if (req.body.user == "corporateTrainee") {
        const corporateTrainee = await corporateTraineeModel.findByIdAndUpdate(req.body.id, { password: req.body.password })
        res.status(200).json({
            message: 'Password Reset!'
        })
    }
    else if (req.body.user == "instructor") {
        const instructor = await instructorModel.findByIdAndUpdate(req.body.id, { password: req.body.password })
        res.status(200).json({
            message: 'Password Reset!'
        })
    }
    else
        res.status(400).json({ message: "User not found!" })
    //let user;
    // console.log("are we here?");
    // user = await individualTraineeModel.exists({ id: req.body.id })
    // if (user) {
    //     const individualTrainee = await individualTraineeModel.findByIdAndUpdate(req.body.id, { password: req.body.password })
    //     res.status(200).json({
    //         message: 'Password Reset!'
    //     })
    // }
    // else {
    //     user = await corporateTraineeModel.exists({ id: req.body.id })
    //     if (user) {
    //         const corporateTrainee = await corporateTraineeModel.findByIdAndUpdate(req.body.id, { password: req.body.password })
    //         res.status(200).json({
    //             message: 'Password Reset!'
    //         })
    //     }
    //     else {
    //         user = await instructorModel.find({ id: req.body.id })
    //         const instructor = await instructorModel.findByIdAndUpdate(req.body.id, { password: req.body.password })
    //         res.status(200).json({
    //             message: 'Password Reset!'
    //         })
    //     }
    // }

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

const RatingInstructor = async (req, res) => {
    const id = req.query.id
    const rating1 = req.body.rating
    // console.log("id: " + id + " rating: " + rating1);
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

const addReview = asyncHandler(async (req, res) => {
    const id = req.query.id
    const review = req.body.review
    const courseBeforeUpdate = await courseModel.findById(id)
    let reviews = courseBeforeUpdate.reviews
    reviews.push(review)
    const course = await courseModel.findByIdAndUpdate(id, { reviews: reviews })

    res.status(200).json(course.reviews)
})

const addInstructorReview = asyncHandler(async (req, res) => {
    const id = req.query.id
    const review = req.body.review
    const instructorBeforeUpdate = await instructorModel.findById(id)
    let reviews = instructorBeforeUpdate.reviews
    reviews.push(review)
    const instructor = await instructorModel.findByIdAndUpdate(id, { reviews: reviews })

    res.status(200).json(instructor.reviews)
})
module.exports = { forgotPassword, resetPassword, RatingCourses, addReview, addInstructorReview, RatingInstructor, generateCertificateByEmail, generateCertificate }