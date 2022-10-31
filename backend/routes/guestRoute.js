const express = require('express')
const path = require('path');
const guestRouter = express.Router()
const courses = require('../controller/searchController')

guestRouter.get('/:searchInput', courses)

module.exports = guestRouter