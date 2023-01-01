const express = require('express');
const path = require('path');
const individualTraineeRouter2 = express.Router()
const { requestRefund,Refund } = require('../controller/individualTraineeController')

individualTraineeRouter2.get('/requestRefund', requestRefund)
individualTraineeRouter2.patch('/refund', Refund)




module.exports = individualTraineeRouter2