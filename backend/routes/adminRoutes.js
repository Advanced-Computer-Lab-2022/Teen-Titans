const express = require('express')
const path = require('path');
const adminAddUser = express.Router()

const {selectedUser}= require('../controller/adminController')




adminAddUser.post('/',selectedUser)

module.exports = adminAddUser