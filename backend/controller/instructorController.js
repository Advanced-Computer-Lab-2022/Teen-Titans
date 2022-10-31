const asyncHandler = require('express-async-handler')
const courseModel = require('../models/courseModel')

const createCourse = asyncHandler(async (req,res) => {
    if(!req.body) {
        res.status(400)
        throw new Error("Please fill in all fields!")
    } 
    else {
        const course = await courseModel.create({
            hours: 0,
            rating: 0,
            reviews: [],
            title: req.body.title,
            price: req.body.price,
            discount: 0,
            subject: '',
            instructor: req.body.instructor,
            subtitles: req.body.subtitles,
            shortSummary: req.body.shortSummary,
            previwVideo: {
                url: '',
                shortDescription: ''
            },
            courseOutline: ''
        })
        res.status(200).json(course)
    
}
})


const getCoursesTitles= asyncHandler(async (req,res) => {
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

		const courses = await courseModel.find({instructorName:"roba"})
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
            $and: [ { price: price   },
            { instructorName:"roba" }]
        })
        res.json(filterResults)

    
})

const allcourses= asyncHandler(async (req, res) => {
    
         const filterResults = await courseModel.find(
             
             { instructorName:"roba" }
         )
         res.json(filterResults)
 
     
 })


 const subject= asyncHandler(async (req, res) => {
    const subject = req.query.subject
    const filterResults = await courseModel.find(
     
        ({
            $and: [ { subject: subject   },
            { instructorName:"roba" }]
        })
    )
    res.json(filterResults)


})







module.exports = {createCourse,getCoursesTitles,course,allcourses,subject}