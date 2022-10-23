const asyncHandler = require('express-async-handler')
const Admin = require('../models/adminModel')
const instructorModel = require('../models/instructorModel.js')
const corporateTraineeModel = require('../models/corporateTraineeModel.js')


//This is to know which user is chosen by the admin
const selectedElement = 'Admin'
const selectedUser  =asyncHandler(async   (req,res) => {
    if(selectedElement == 'Admin') 
        addAdmin()
    else if(selectedElement == 'Instructor')
        addInstructor()
    else
        addCorporateTrainee()
})

// const addAdmin = asyncHandler(async (req,res) => {
//     if(!req.body.text) {
//         res.status(400)
//         throw new Error("Please enter username and password")
//     } 
//     else {
//         const admin = await adminModel.create({
//             username: req.body.username,
//             password: req.body.password
//         })
//         res.json(admin)
//     }
// })

const addAdmin =asyncHandler(async   (req,res) => {
        if(!req.body.text) {
            res.status(400)
            throw new Error("Please enter username and password")
        } 
        else {
            const admin = await Admin.create({
                username: req.body.username,
                password: req.body.password
            })
            res.status(200).json(admin)
        }
     res.status(200).json(admin)
         
    })




const addInstructor = asyncHandler(async (req,res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error("Please enter username and password")
    } 
    else {
        const instructor = await instructorModel.create({
            username: req.body.username,
            password: req.body.password
        })
        res.json(instructor)
    }
})

const addCorporateTrainee = asyncHandler(async (req,res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error("Please enter username and password")
    } 
    else {
        const corporateTrainee = await corporateTraineeModel.create({
            username: req.body.username,
            password: req.body.password
        })
        res.json(corporateTrainee)
    }
})

module.exports = {selectedUser,addAdmin,addCorporateTrainee,addInstructor}