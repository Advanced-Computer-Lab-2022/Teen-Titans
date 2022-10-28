const express = require('express')
const path = require('path');
const guestRouter = express.Router()
const course = require('../controller/searchController')

guestRouter.get('/:searchInput', course)

module.exports = guestRouter