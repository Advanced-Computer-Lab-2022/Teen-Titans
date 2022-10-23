const asyncHandler = require('express-async-handler')

const selectedElement = 'Egypt'
let discount

const selectedCountry = asyncHandler(async (req,res) => {
    if(selectedElement == 'Egypt') {
        discount = 0.2
    } else if(selectedElement == 'Iraq') {
        discount = 0.25
    } else if(selectedElement == 'Germany') {
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