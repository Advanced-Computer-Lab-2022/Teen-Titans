const asyncHandler = require('express-async-handler')
const courseModel = require('../models/courseModel')

const getCourses = async(req,res) => {
    const courses = await courseModel.find({},{_id: 1,rating: 1,hours: 1, title : 1})

    res.status(200).json(courses)
}

const getPrices = async(req,res)=>{
    const prices= await courseModel.find({},{_id:0,title:1, price:1})

    res.status(200).json(prices)
}

module.exports = {getCourses,getPrices}