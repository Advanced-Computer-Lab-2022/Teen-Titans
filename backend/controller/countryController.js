const asyncHandler = require('express-async-handler')

const selectedElement = 'Egypt'
let discount

const selectedCountry = asyncHandler(async (req,res) => {
    if(req.params['country'] == 'Egypt') {
        discount = 0.2
    } else if(req.params['country'] == 'Iraq') {
        discount = 0.25
    } else if(req.params['country'] == 'Germany') {
        discount = 0.1
    } else {
        discount = 0
    }
    res.status(200)
    res.json({
        message: `Discount: ${discount}`
    })
})

module.exports = {selectedCountry}