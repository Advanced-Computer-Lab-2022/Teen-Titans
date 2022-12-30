const express = require('express')
const path = require('path');
const authenticationRouter = express.Router();
const { login, logout } = require('../controller/authentication')

authenticationRouter.post('/login', login)
authenticationRouter.get('/logout', logout)

module.exports = authenticationRouter