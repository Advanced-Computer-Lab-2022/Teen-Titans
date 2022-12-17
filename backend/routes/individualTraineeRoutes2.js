const express = require('express');
const path = require('path');
const individualTraineeRouter2 = express.Router()
const { requestRefund } = require('../controller/individualTraineeController')

individualTraineeRouter2.get('/requestRefund', requestRefund)

module.exports = individualTraineeRouter2