const asyncHandler = require('express-async-handler')
const courseModel = require('../models/courseModel')
const instructorModel = require('../models/instructorModel')
const nodemailer = require('nodemailer')

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
            subtitles:[{title: req.body.subtitle1,},{title: req.body.subtitle2,}],
                
            shortSummary: req.body.shortSummary,
            previewVideo: {
                url: '',
                shortDescription: ''
            },
            courseOutline: '',
          

           





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


// const getCoursesTitles = asyncHandler(async (req, res) => {
//     try {

//         let sort = req.query.sort || "price";
//         let subject = req.query.subject || "All";

//         const subjectOptions = [
//             "chem",
//             "bio",
//             "calculus",
//             "datastruc",
//             "geometry"
//         ];

//         subject === "All"
//             ? (subject = [...subjectOptions])
//             : (subject = req.query.subject.split(","));
//         req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

//         let sortBy = {};
//         if (sort[1]) {
//             sortBy[sort[0]] = sort[1];
//         } else {
//             sortBy[sort[0]] = "asc";
//         }

//         const courses = await courseModel.find({ instructorName: "roba" })
//             .where("subject")
//             .in([...subject])
//             .sort(sortBy)

//         const response = {
//             subjects: subjectOptions,
//             courses,
//         };

//         res.status(200).json(response);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: true, message: "Error" });
//     }
// });


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



const upload = asyncHandler(async (req, res) => {
    console.log(req.body)
    console.log("inside upload")
    if (!req.body) {
        res.status(400)
        throw new Error("Please fill in all fields!")
    }
    else {

       
        const course = await courseModel.findByIdAndUpdate(req.body.courseId, { previewVideo: { url: req.body.url, shortDescription: req.body.shortDescription } })
        res.status(200).json(course)

    }
})


module.exports = { createCourse, course, allcourses, subject, instructorSearchCourse, changePassword,upload }