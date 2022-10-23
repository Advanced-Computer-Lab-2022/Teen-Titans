const express = require('express')
const path = require('path');
const adminAddUser = express.Router()
const addAdmin = require('../controller/adminController.js')

adminAddUser.post('/', function(req,res){addAdmin})

module.exports = adminAddUser