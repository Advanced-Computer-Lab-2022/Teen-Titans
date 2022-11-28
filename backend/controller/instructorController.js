const asyncHandler = require('express-async-handler')
const courseModel = require('../models/courseModel')
const instructorModel = require('../models/instructorModel')
const nodemailer = require('nodemailer')
const videoModel = require('../models/videoModel')
const exerciseModel = require('../models/exerciseModel')
const subtitleModel = require('../models/subtitleModel')

const createCourse = asyncHandler(async (req, res) => {
    if (!req.body) {
        res.status(400)
        throw new Error("Please fill in all fields!")
    }
    else {
        let totalHours = 0;
        if (req.body.subtitles) {
            for (let subtitle of req.body.subtitles) {
                totalHours += subtitle.hours
            }
        }
        let subtitles = []
        for (let i = 0; i < req.body.subtitles.length; i++) {
            let videos = []
            for (let j = 0; j < req.body.subtitles[i].videos.length; j++) {
                const video = await videoModel.create({
                    url: req.body.subtitles[i].videos[j].url,
                    shortDescription: req.body.subtitles[i].videos[j].shortDescription
                })
                videos.push(video)
            }
            const exercise = await exerciseModel.create({
                questionOne: {
                    question: req.body.subtitles[i].exercise.questionOne.question,
                    options: [
                        { id: 0, Text: req.body.subtitles[i].exercise.questionOne.question.Text1, isCorrect: req.body.subtitles[i].exercise.questionOne.question.isCorrect1 },
                        { id: 1, Text: req.body.subtitles[i].exercise.questionOne.question.Text2, isCorrect: req.body.subtitles[i].exercise.questionOne.question.isCorrect2 },
                        { id: 2, Text: req.body.subtitles[i].exercise.questionOne.question.Text3, isCorrect: req.body.subtitles[i].exercise.questionOne.question.isCorrect3 },
                        { id: 3, Text: req.body.subtitles[i].exercise.questionOne.question.Text4, isCorrect: req.body.subtitles[i].exercise.questionOne.question.isCorrect4 }]
                },
                questionTwo: {
                    question: req.body.subtitles[i].exercise.questionTwo.question,
                    options: [
                        { id: 0, Text: req.body.subtitles[i].exercise.questionTwo.question.Text1, isCorrect: req.body.subtitles[i].exercise.questionTwo.question.isCorrect1 },
                        { id: 1, Text: req.body.subtitles[i].exercise.questionTwo.question.Text2, isCorrect: req.body.subtitles[i].exercise.questionTwo.question.isCorrect2 },
                        { id: 2, Text: req.body.subtitles[i].exercise.questionTwo.question.Text3, isCorrect: req.body.subtitles[i].exercise.questionTwo.question.isCorrect3 },
                        { id: 3, Text: req.body.subtitles[i].exercise.questionTwo.question.Text4, isCorrect: req.body.subtitles[i].exercise.questionTwo.question.isCorrect4 }]
                },
            })
            const subtitle = await subtitleModel.create({
                title: req.body.subtitles[i].title,
                videos: videos,
                exercise: exercise
            })
            subtitles.push(subtitle)
        }
        const course = await courseModel.create({
            hours: totalHours,
            rating: 0,
            reviews: [],
            title: req.body.title,
            price: req.body.price,
            discount: 0,
            subject: req.body.subject,
            instructorId: req.body.instructorId,
            instructorName: req.body.instructorName,
            subtitles: subtitles,
            shortSummary: req.body.shortSummary,
            previewVideo: {
                url: '',
                shortDescription: ''
            },
            courseOutline: ''
        })

        const instructor = await instructorModel.findById(req.body.instructorId)
        const instructorCourses = instructor.courses
        instructorCourses.push({
            id: course._id,
            title: req.body.title,
            subject: req.body.subject
        })
        const updatedInstructor = await instructorModel.findByIdAndUpdate(req.body.instructorId, { courses: instructorCourses })
        res.status(200).json(course)

    }
})


const getCoursesTitles = asyncHandler(async (req, res) => {
    try {

        let sort = req.query.sort || "price";
        let subject = req.query.subject || "All";

        const subjectOptions = [
            "chem",
            "bio",
            "calculus",
            "datastruc",
            "geometry"
        ];

        subject === "All"
            ? (subject = [...subjectOptions])
            : (subject = req.query.subject.split(","));
        req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

        let sortBy = {};
        if (sort[1]) {
            sortBy[sort[0]] = sort[1];
        } else {
            sortBy[sort[0]] = "asc";
        }

        const courses = await courseModel.find({ instructorName: "roba" })
            .where("subject")
            .in([...subject])
            .sort(sortBy)

        const response = {
            subjects: subjectOptions,
            courses,
        };

        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: true, message: "Error" });
    }
});


const course = asyncHandler(async (req, res) => {
    const price = req.query.price

    const filterResults = await courseModel.find({
        $and: [{ price: price },
        { instructorName: req.params.id }]
    })
    res.json(filterResults)


})

const allcourses = asyncHandler(async (req, res) => {

    const filterResults = await courseModel.find(

        { instructorName: req.params.id }
    )
    res.json(filterResults)


})


const subject = asyncHandler(async (req, res) => {
    const subject = req.query.subject
    const filterResults = await courseModel.find(

        ({
            $and: [{ subject: subject },
            { instructorName: req.params.id }]
        })
    )
    res.json(filterResults)


})

const instructorSearchCourse = asyncHandler(async (req, res) => {
    let searchResults
    if (!req.body) {
        res.send(400)
        throw new Error('Please enter a search keyword')
    }
    else {
        searchResults = await courseModel.find({
            $and: [{ instructorId: req.params['id'] }, {
                $or: [{ title: { $regex: req.params['searchInput'] } },
                { instructorName: { $regex: req.params['searchInput'] } }, { subject: { $regex: req.params['searchInput'] } }]
            }]
        })
        res.json(searchResults)
    }
})

const changePassword = asyncHandler(async (req, res) => {
    const user = await instructorModel.findById(req.body.id);
    if (user.password == req.body.oldPassword) {
        const instructor = await instructorModel.findByIdAndUpdate(req.body.id, { password: req.body.password })
        res.status(200).json({
            message: 'Password Updated!'
        })
    }
    else
        res.status(400).json({
            message: 'Old Password is incorrect!'
        })
})

// const transporter = nodemailer.createTransport({
//     service: "hotmail",
//     auth: {
//         user: "knowledgeBoost@outlook.com",
//         pass: "Ta3leemMshMagani"
//     }
// })

// const forgotPassword = asyncHandler(async (req, res) => {
//     const user = await instructorModel.find({ email: req.body.email })
//     const options = {
//         from: "knowledgeBoost@outlook.com",
//         to: req.body.email,
//         subject: "Reset Password",
//         text: "Please click on the link below to rest password."
//     }
//     if (user) {
//         transporter.sendMail(options, function (err, info) {
//             if (err)
//                 res.status(400).json(err)
//             else
//                 res.status(200).json(info)
//         })
//     }
//     else
//         res.status(400).json({
//             message: "No user with such email!"
//         })
// })

// const resetPassword = asyncHandler(async (req, res) => {
//     const individualTrainee = await instructorModel.findByIdAndUpdate(req.params.id, { password: req.body.password })
//     res.status(200).json({
//         message: 'Password Reset!'
//     })

// })

module.exports = { createCourse, getCoursesTitles, course, allcourses, subject, instructorSearchCourse, changePassword }