const asyncHandler = require('express-async-handler')
const corporateTraineeModel = require('../models/corporateTraineeModel')


const changePassword = asyncHandler(async (req, res) => {
    const corporateTrainee = await corporateTraineeModel.findByIdAndUpdate(req.params.id, { password: req.body.password })
    res.status(200).json({
        message: 'Password Updated!'
    })
})

module.exports = { changePassword }