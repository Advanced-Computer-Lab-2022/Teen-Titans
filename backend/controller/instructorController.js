const asyncHandler = require('express-async-handler')
const courseModel = require('../models/courseModel')
const instructorModel = require('../models/instructorModel')
// const { all } = require('../routes/instructorRoutes')

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
		// const page = parseInt(req.query.page) - 1 || 0;
		// const limit = parseInt(req.query.limit) || 5;
		// const search = req.query.search || "";
		let sort = req.query.sort || "price";
		let subject = req.query.subject || "All";

		const subjectOptions = [
			"algebra",
			"chem",
            "bio",
            "calculus",
            "datastruc",
            "electricity",
            "fluid",
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
			// .skip(page * limit)
			// .limit(limit);

		// const total = await courseModel.countDocuments({
		// 	genre: { $in: [...genre] },
		// 	name: { $regex: search, $options: "i" },
		// });

		const response = {
			// error: false,
			// page: page + 1,
			// limit,
			subjects: subjectOptions,
			courses,
		};

		res.status(200).json(response);
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: true, message: "Internal Server Error" });
	}
});
 
    
    // const courses = await courseModel.find({instructorName:"roba"})

// res.status(200).json(courses)


module.exports = {createCourse,getCoursesTitles}