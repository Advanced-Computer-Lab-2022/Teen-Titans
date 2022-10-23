const express = require('express')
const dotenv = require('dotenv').config({ path: 'backend/.env'})
const dbConnection = require('./configuration/db')
const countryRoute = require('./routes/countryRoute')
const adminRoute = require('./routes/adminRoutes')

port = process.env.PORT || 8000
dbConnection()
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use('/',countryRoute)
app.use('/addUser',adminRoute)
app.listen(port, () => console.log(`server started on ${port}`))