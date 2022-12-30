const asyncHandler = require('express-async-handler')
const instructorModel = require('../models/instructorModel.js')
const corporateTraineeModel = require('../models/corporateTraineeModel.js')
const individualTraineeModel = require('../models/individualTraineeModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const maxAge = 3 * 24 * 60 * 60;
const createToken = (username) => {
    return jwt.sign({ username }, 'supersecret', {
        expiresIn: maxAge
    });
};

const login = async (req, res) => {
    let userType = ''
    const { username, password } = req.body;
    let user;
    try {
        user = await instructorModel.findOne({ username: username })
        if (user)
            userType = 'instructor'
        else {
            user = await corporateTraineeModel.findOne({ username: username })
            if (user)
                userType = 'corporateTrainee'
            else {
                user = await individualTraineeModel.findOne({ username: username })
                if (user)
                    userType = 'individualTrainee'
                else {
                    res.status(400).json({ message: "Incorrect username!" })
                }
            }
        }
        if (user) {
            // console.log(user);
            //await bcrypt.compare(password, user.password)
            const isCorrectPassword = (password == user.password)
            if (isCorrectPassword) {
                const token = createToken(user.username);
                res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
                res.status(200).json({
                    user: user,
                    userType: userType
                })
            } else {
                res.status(400).json({ message: "Wrong Password!" })
            }
        } else
            res.status(400).json({ message: "No such username!" })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

const logout = async (req, res) => {
    res.cookie('jwt', '', { httpOnly: true, maxAge: 1 });
    res.status(200).json({ message: 'You are logged out!' })
}

module.exports = { login, logout }