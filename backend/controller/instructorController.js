const asyncHandler = require('express-async-handler')
const courseModel = require('../models/courseModel')
const instructorModel = require('../models/instructorModel')
const subtitleModel = require('../models/subtitleModel')
const videoModel = require('../models/videoModel')
const exerciseModel = require('../models/exerciseModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const express = require("express");

const definePromotion = asyncHandler(async (req, res) => {
    const { id } = req.params
    const course = await courseModel.findById(id)
    let coursePrice = course.price
    if (course.discount.amount != 0) {
        return res.status(400).json({ error: 'There is already a discount applied' })
    }
    else {
        let courseEndDate = req.body.endDate
        courseEndDate = courseEndDate + 'T00:00:00.000+00:00'
        const course1 = await courseModel.findOneAndUpdate({ _id: id }, {
            discount: {
                amount: req.body.amount,
                //startDate: req.body.startDate,  fhfghg
                endDate: courseEndDate

            },
        }, { new: true })

        let discountAmount = req.body.amount
        const course2 = await courseModel.findOneAndUpdate({ _id: id }, {

            price: coursePrice - coursePrice * (discountAmount / 100)

            ,
        }, { new: true })


        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        // This arrangement can be altered based on how we want the date's format to appear.
        let currentDate = `${year}-${month}-${day}`;
        // "17-6-2022"
        console.log(course1.discount.endDate)
        currentDate = currentDate + 'T00:00:00.000+00:00'
        console.log(currentDate);
        if (currentDate)
            if (currentDate > req.body.endDate) {
                const course3 = await courseModel.findOneAndUpdate({ _id: id }, {

                    amount: 0,
                    endDate: "",
                    price: coursePrice
                })
                return res.status(302).json({ error: 'invalid date' })
            }


    }
    if (!course) {
        return res.status(400).json({ error: 'No such course' })
    }
    res.status(200).json(course)
})


const editEmail = async (req, res) => {
    const { id } = req.params
    const instructor = await instructorModel.findOneAndUpdate({ _id: id }, {
        email: req.body.email
    }, { new: true })
    if (!instructor) {
        return res.status(400).json({ error: 'No such instructor' })
    }
    res.status(200).json(instructor)
}
const editBiography = async (req, res) => {
    const { id } = req.params
    const instructor = await instructorModel.findOneAndUpdate({ _id: id }, {
        biography: req.body.biography
    }, { new: true })
    if (!instructor) {
        return res.status(400).json({ error: 'No such instructor' })
    }
    res.status(200).json(instructor)
}

const createCourseExam = asyncHandler(async (req, res) => {
    const { id } = req.params
    const course = await courseModel.findOneAndUpdate({ _id: id }, {
        courseExam: {
            questionOne: {
                question: req.body.question1,
                answer: req.body.answer1,
                options: [{ id: 0, Text: req.body.Text1, isCorrect: req.body.isCorrect1 },
                { id: 1, Text: req.body.Text2, isCorrect: req.body.isCorrect2 },
                { id: 2, Text: req.body.Text3, isCorrect: req.body.isCorrect3 },
                { id: 3, Text: req.body.Text4, isCorrect: req.body.isCorrect4 }]
            }
            ,
            questionTwo: {
                question: req.body.question2,
                answer: req.body.answer2,
                options: [{ id: 0, Text: req.body.Text5, isCorrect: req.body.isCorrect5 },
                { id: 1, Text: req.body.Text6, isCorrect: req.body.isCorrect6 },
                { id: 2, Text: req.body.Text7, isCorrect: req.body.isCorrect7 },
                { id: 3, Text: req.body.Text8, isCorrect: req.body.isCorrect8 }]
            }
        }
    }
        , { new: true })
    if (!course) {
        return res.status(400).json({ error: 'No such course' })
    }
    res.status(200).json(course)

})

const createExam = asyncHandler(async (req, res) => {
    const { id } = req.params
    const course = await courseModel.findOneAndUpdate({ subtitles: { $elemMatch: { _id: id } } },
        {
            'subtitles.$.exercise.questionOne.question': req.body.question1,
            'subtitles.$.exercise.questionOne.answer': req.body.answer1,
            'subtitles.$.exercise.questionOne.options': [{ id: 0, Text: req.body.Text1, isCorrect: req.body.isCorrect1 },
            { id: 1, Text: req.body.Text2, isCorrect: req.body.isCorrect2 },
            { id: 2, Text: req.body.Text3, isCorrect: req.body.isCorrect3 },
            { id: 3, Text: req.body.Text4, isCorrect: req.body.isCorrect4 }],

            'subtitles.$.exercise.questionTwo.question': req.body.question2,
            'subtitles.$.exercise.questionTwo.answer': req.body.answer2,
            'subtitles.$.exercise.questionTwo.options': [{ id: 0, Text: req.body.Text5, isCorrect: req.body.isCorrect5 },
            { id: 1, Text: req.body.Text6, isCorrect: req.body.isCorrect6 },
            { id: 2, Text: req.body.Text7, isCorrect: req.body.isCorrect7 },
            { id: 3, Text: req.body.Text8, isCorrect: req.body.isCorrect8 }],
        }
        , { new: true })
    if (!course) {
        return res.status(400).json({ error: 'No such course' })
    }
    res.status(200).json(course)

})

const createCourse = asyncHandler(async (req, res) => {
    if (!req.body) {
        res.status(400)
        throw new Error("Please fill in all fields!")
    }
    else {
        // console.log(req.body.exercise);
        let totalHours = 0;
        if (req.body.subtitles) {
            for (let subtitle of req.body.subtitles) {
                totalHours += parseInt(subtitle.hours, 10)
            }
        }
        const previewVideo = await videoModel.create({
            url: req.body.previewVideo.url,
            shortDescription: req.body.previewVideo.shortDescription
        })
        let subtitles = []
        for (let i = 0; i < req.body.subtitles.length; i++) {
            // let videos = []
            // for (let j = 0; j < req.body.subtitles[i].videos.length; j++) {
            const video = await videoModel.create({
                url: req.body.subtitles[i].video.url,
                shortDescription: req.body.subtitles[i].video.shortDescription
            })
            //     videos.push(video)
            // }
            const exercise = await exerciseModel.create({
                questionOne: {
                    question: req.body.subtitles[i].exercise.questionOne.question,
                    options: [
                        { Text: req.body.subtitles[i].exercise.questionOne.Text1, isCorrect: req.body.subtitles[i].exercise.questionOne.isCorrect1 },
                        { Text: req.body.subtitles[i].exercise.questionOne.Text2, isCorrect: req.body.subtitles[i].exercise.questionOne.isCorrect2 },
                        { Text: req.body.subtitles[i].exercise.questionOne.Text3, isCorrect: req.body.subtitles[i].exercise.questionOne.isCorrect3 },
                        { Text: req.body.subtitles[i].exercise.questionOne.Text4, isCorrect: req.body.subtitles[i].exercise.questionOne.isCorrect4 }]
                },
                questionTwo: {
                    question: req.body.subtitles[i].exercise.questionTwo.question,
                    options: [
                        { Text: req.body.subtitles[i].exercise.questionTwo.Text1, isCorrect: req.body.subtitles[i].exercise.questionTwo.isCorrect1 },
                        { Text: req.body.subtitles[i].exercise.questionTwo.Text2, isCorrect: req.body.subtitles[i].exercise.questionTwo.isCorrect2 },
                        { Text: req.body.subtitles[i].exercise.questionTwo.Text3, isCorrect: req.body.subtitles[i].exercise.questionTwo.isCorrect3 },
                        { Text: req.body.subtitles[i].exercise.questionTwo.Text4, isCorrect: req.body.subtitles[i].exercise.questionTwo.isCorrect4 }]
                },
            })
            const subtitle = await subtitleModel.create({
                title: req.body.subtitles[i].title,
                subtitleHours: req.body.subtitles[i].hours,
                video: video,
                exercise: exercise
            })
            subtitles.push(subtitle)
        }
        const exercise = await exerciseModel.create({
            questionOne: {
                question: req.body.exercise.questionOne.question,
                options: [
                    { Text: req.body.exercise.questionOne.Text1, isCorrect: req.body.exercise.questionOne.isCorrect1 },
                    { Text: req.body.exercise.questionOne.Text2, isCorrect: req.body.exercise.questionOne.isCorrect2 },
                    { Text: req.body.exercise.questionOne.Text3, isCorrect: req.body.exercise.questionOne.isCorrect3 },
                    { Text: req.body.exercise.questionOne.Text4, isCorrect: req.body.exercise.questionOne.isCorrect4 }]
            },
            questionTwo: {
                question: req.body.exercise.questionTwo.question,
                options: [
                    { Text: req.body.exercise.questionTwo.Text1, isCorrect: req.body.exercise.questionTwo.isCorrect1 },
                    { Text: req.body.exercise.questionTwo.Text2, isCorrect: req.body.exercise.questionTwo.isCorrect2 },
                    { Text: req.body.exercise.questionTwo.Text3, isCorrect: req.body.exercise.questionTwo.isCorrect3 },
                    { Text: req.body.exercise.questionTwo.Text4, isCorrect: req.body.exercise.questionTwo.isCorrect4 }]
            },
        })

        const course = await courseModel.create({
            hours: totalHours,
            ratings: {
                oneStar: 0,
                twoStar: 0,
                threeStar: 0,
                fourStar: 0,
                fiveStar: 0
            },
            rating: 0,
            reviews: [],
            title: req.body.title,
            price: req.body.price,
            discount: {
                amount: 0,
                endDate: ""
            },
            subject: req.body.subject,
            instructorId: req.body.instructorId,
            instructorName: req.body.instructorName,
            subtitles: subtitles,
            shortSummary: req.body.shortSummary,
            previewVideo: previewVideo,
            courseOutline: req.body.courseOutline,
            exercise: exercise,
            numberOfEnrolledStudents: 0
        })

        const instructor = await instructorModel.findById(req.body.instructorId)
        const instructorCourses = instructor.courses
        instructorCourses.push(course)
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

const viewInstructorRatings = asyncHandler(async (req, res) => {
    let rating = 0
    let reviews = []
    const instructor = await instructorModel.findById(req.query.instructorId)
    rating = instructor.rating
    reviews = instructor.reviews
    const instructorEvaluation = {
        rating: rating,
        reviews: reviews
    }

    res.json(instructorEvaluation)
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

const login = async (req, res) => {
    // TODO: Login the user

}

const logout = async (req, res) => {
    // TODO Logout the user
}

// create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (name) => {
    return jwt.sign({ name }, 'supersecret', {
        expiresIn: maxAge
    });
};

// const signUp = asyncHandler(async (req, res) => {
//     try {
//         const salt = await bcrypt.genSalt();
//         const hashedPassword = await bcrypt.hash(req.body.password, salt);
//         const instructor = await instructorModel.create({
//             username: req.body.username,
//             password: hashedPassword,
//             email: req.body.email,
//             firstName: req.body.firstName,
//             lastName: req.body.lastName,
//             gender: req.body.gender,
//         })
//         const token = createToken(user.name);
//         res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
//         res.status(200).json(instructor)
//     }
//     catch (error) {
//         res.status(400).json({ error: error.message })
//     }
// })

const viewMoneyOwed = asyncHandler(async (req, res) => {
    let index;
    let totalMoneyOwed = 0;
    const percentage = req.body.percentage
    const instructor = await instructorModel.findById(req.query.instructorId)
    for (index = 0; index < instructor.courses.length; index++) {
        let course = await courseModel.findById(instructor.courses[i])
        const moneyOwed = (course.numberOfEnrolledStudents * course.price) * (1 - course.discount.amount) * (1 - percentage)
        totalMoneyOwed += moneyOwed;
    }
    res.json(totalMoneyOwed)
})

module.exports = {
    createCourse, course, allcourses, subject, instructorSearchCourse, changePassword, upload, viewInstructorRatings, editEmail,
    editBiography, definePromotion, createExam, createCourseExam, login, logout, viewMoneyOwed
}