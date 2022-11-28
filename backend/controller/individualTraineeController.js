const asyncHandler = require('express-async-handler')
const individualTraineeModel = require('../models/individualTraineeModel')
const nodemailer = require('nodemailer')
// const course = require('../models/courseModel')

const changePassword = asyncHandler(async (req, res) => {
    const user = await individualTraineeModel.findById(req.body.id);
    if (user.password == req.body.oldPassword) {
        const individualTrainee = await individualTraineeModel.findByIdAndUpdate(req.body.id, { password: req.body.password })
        res.status(200).json({
            message: 'Password Updated!'
        })
    }
    else
        res.status(400).json({
            message: 'Old Password is incorrect!'
        })
})

const signUp = asyncHandler(async (req, res) => {
    const individualTrainee = await individualTraineeModel.create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        gender: req.body.wallet,
        country: req.body.country,
        wallet: req.body.wallet,
        enrolledCourses: req.body.enrolledCourses
    })

    res.status(200).json(individualTrainee)
})


// const transporter = nodemailer.createTransport({
//     service: "hotmail",
//     auth: {
//         user: "knowledgeBoost@outlook.com",
//         pass: "Ta3leemMshMagani"
//     }
// })

// const forgotPassword = asyncHandler(async (req, res) => {
//     const user = await individualTraineeModel.find({ email: req.body.email })
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
//     const individualTrainee = await individualTraineeModel.findByIdAndUpdate(req.params.id, { password: req.body.password })
//     res.status(200).json({
//         message: 'Password Reset!'
//     })

// })


//not working properly yet.................
const registerForCourse = asyncHandler(async (req, res) => {
    const findUser = await individualTraineeModel.findById(req.body.id);
    const courses = findUser.enrolledCourses
    courses.push(req.body.courseId)
    const user = await individualTraineeModel.findByIdAndUpdate(req.body.id, { enrolledCourses: courses })
    const populateCourse = await individualTraineeModel.findById(req.body.id).populate("course").exec((err, result) => {
        if (err) {
            return res.json({ error: err })
        }
        res.json({ result: result })
    });
})


  

   

const getRatingCourse= async (req, res) => {
    var oneStar = +document.getElementById('one').value;
    var twoStar = +document.getElementById('two').value;
    var threeStar = +document.getElementById('three').value;
    var fourStar = +document.getElementById('four').value;
    var fiveStar = +document.getElementById('five').value;
  
    var oneTotal = oneStar * 1;
    var twoTotal = twoStar * 2;
    var threeTotal = threeStar *3
    var fourTotal = fourStar * 4;
    var fiveTotal = fiveStar * 5;
  
    var totalClicks = (oneStar + twoStar + threeStar + fourStar + fiveStar);
    var totalStars = (oneTotal + twoTotal + threeTotal + fourTotal + fiveTotal);
    var avgStars = (totalStars/totalClicks);
    
    avgStars = avgStars.toPrecision(3);
    
    if(avgStars.toString().split(".")[1]==0)
      avgStars = Number(avgStars).toPrecision(1);
  
    var stars = '&#9733;';
    // document.getElementById('resultTitle').style.display = 'block';
    // document.getElementById('roundp').style.display = 'block';
    // document.getElementById('avg').innerHTML = avgStars;
    
    // for(var i = 0 ;i<(Math.round(avgStars))-1;i++)
    // {
    //   stars=stars+' &#9733;';
    // }
    // document.getElementById('round').innerHTML = stars;
    // document.getElementById('one').value=81;
    // document.getElementById('two').value=87;
    // document.getElementById('three').value=43;
    // document.getElementById('four').value=55;
    // document.getElementById('five').value=34;
    // document.getElementById('avg').innerHTML = "";
    // document.getElementById('round').innerHTML = "";
    // document.getElementById('resultTitle').style.display = 'none';
    // document.getElementById('roundp').style.display = 'none';
  
    //const rating = req.query.rating
    const rating = await courseModel.findByIdAndUpdate(req.body.id, { rating: avgStars})

    res.status(200).json(rating)
}
const getRatingInstructor= async (req, res) => {
    var oneStar = +document.getElementById('one').value;
    var twoStar = +document.getElementById('two').value;
    var threeStar = +document.getElementById('three').value;
    var fourStar = +document.getElementById('four').value;
    var fiveStar = +document.getElementById('five').value;
  
    var oneTotal = oneStar * 1;
    var twoTotal = twoStar * 2;
    var threeTotal = threeStar *3
    var fourTotal = fourStar * 4;
    var fiveTotal = fiveStar * 5;
  
    var totalClicks = (oneStar + twoStar + threeStar + fourStar + fiveStar);
    var totalStars = (oneTotal + twoTotal + threeTotal + fourTotal + fiveTotal);
    var avgStars = (totalStars/totalClicks);
    
    avgStars = avgStars.toPrecision(3);
    
    if(avgStars.toString().split(".")[1]==0)
      avgStars = Number(avgStars).toPrecision(1);
  
    var stars = '&#9733;';
    document.getElementById('resultTitle').style.display = 'block';
    document.getElementById('roundp').style.display = 'block';
    document.getElementById('avg').innerHTML = avgStars;
    
    for(var i = 0 ;i<(Math.round(avgStars))-1;i++)
    {
      stars=stars+' &#9733;';
    }
    document.getElementById('round').innerHTML = stars;
    document.getElementById('one').value=81;
    document.getElementById('two').value=87;
    document.getElementById('three').value=43;
    document.getElementById('four').value=55;
    document.getElementById('five').value=34;
    document.getElementById('avg').innerHTML = "";
    document.getElementById('round').innerHTML = "";
    document.getElementById('resultTitle').style.display = 'none';
    document.getElementById('roundp').style.display = 'none';
  

    const rating = await courseModel.findByIdAndUpdate(req.body.id, { rating: avgStars})

    res.status(200).json(rating)
}



module.exports = { changePassword, signUp, registerForCourse ,getRatingCourse,getRatingInstructor}