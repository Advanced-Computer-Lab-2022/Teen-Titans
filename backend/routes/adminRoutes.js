const express = require('express')
const path = require('path');
const adminAddUser = express.Router()

const {selectedUser,addAdmin }= require('../controller/adminController')

adminAddUser.post('/',
addAdmin
)

module.exports = adminAddUser