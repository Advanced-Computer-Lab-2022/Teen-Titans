const asyncHandler = require('express-async-handler')
const courseModel = require('../models/courseModel')
const instructorModel = require('../models/instructorModel')

const createCourse = asyncHandler(async (req, res) => {
    if (!req.body) {
        res.status(400)
        throw new Error("Please fill in all fields!")
    }
    else {
        let totalHours = 0;
        // if (req.body.subtitles) {
        //     for (let subtitle of req.body.subtitles) {
        //         totalHours += subtitle.hours
        //     }
        // }
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
            subtitles:{ title:req.body.subtitle,
            exercise:{questionOne: {
                question: "1+1=?",
        
                options:[{id:0,Text:"2",isCorrect:true},
                {id:1,Text:"3",isCorrect:false},
                {id:2,Text:"4",isCorrect:false},
                {id:3,Text:"5",isCorrect:false},]},
                questionTwo: { 
                    question:"2+2=?",
                    options:[{id:0,Text:"3",isCorrect:false},
                    {id:1,Text:"2",isCorrect:false},
                    {id:2,Text:"4",isCorrect:true},
                    {id:3,Text:"0",isCorrect:false},]
                    },
            },
        
        },
                
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



const createExercise = asyncHandler(async (req, res) => {
    if (!req.body) {
        res.status(400)
        throw new Error("Please fill in all fields!")
    }
    else {
       
        const exercise = await exerciseModel.create({
            hours: totalHours,
            rating: 0,
            reviews: [],
            title: req.body.title,
            price: req.body.price,
            discount: 0,
            subject: req.body.subject,
            instructorId: req.body.instructorId,
            instructorName: req.body.instructorName,
            subtitles: req.body.subtitles,
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






module.exports = { createCourse, getCoursesTitles, course, allcourses, subject, instructorSearchCourse }