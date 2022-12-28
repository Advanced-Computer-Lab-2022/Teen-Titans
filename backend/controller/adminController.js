const asyncHandler = require('express-async-handler')
const Admin = require('../models/adminModel')
const courseModel = require('../models/courseModel')
const instructorModel = require('../models/instructorModel.js')
const corporateTraineeModel = require('../models/corporateTraineeModel.js')


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

//define promotion

const definePromotion = asyncHandler(async (req, res) => {
    const { id } = req.params
    const course = await courseModel.findById( id )
    let coursePrice = course.price
    if(course.discount.amount!=0){
        return res.status(400).json({ error: 'There is already a discount applied' })
    }
   else{
       let courseEndDate = req.body.endDate
       courseEndDate = courseEndDate+'T00:00:00.000+00:00'
        const course1 = await courseModel.findOneAndUpdate({ _id: id }, {
            discount: {
                amount: req.body.amount,
                //startDate: req.body.startDate,
                endDate: courseEndDate
               
            },
        }, { new: true })

        let discountAmount = req.body.amount
        const course2 = await courseModel.findOneAndUpdate({ _id: id }, {
           
               price : coursePrice - coursePrice*(discountAmount/100)
               
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
         currentDate= currentDate+'T00:00:00.000+00:00'
         console.log(currentDate); 
        if(currentDate>course1.discount.endDate){
            const course3 = await courseModel.findOneAndUpdate({_id:id},{

                amount:0,
                endDate: "",
                price: coursePrice
               })
        }
    
        
  }
    if (!course) {
        return res.status(400).json({ error: 'No such course' })
    }
    res.status(200).json(course)
})

module.exports = { selectedUser,definePromotion }