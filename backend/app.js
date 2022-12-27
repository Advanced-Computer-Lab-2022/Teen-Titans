const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')
const fileupload = require("express-fileupload");
const dotenv = require('dotenv').config('.env')
const dbConnection = require('./configuration/db')
const countryRoute = require('./routes/countryRoute')
const adminRoute = require('./routes/adminRoutes')
const instructorRoute = require('./routes/instructorRoutes')
const instructorRoute2 = require('./routes/instructorRoutes2')
const searchRoute = require('./routes/searchRoutes')
const myCoursesRoute = require('./routes/myCoursesRouter')
const individualTraineeRoute = require('./routes/individualTraineeRoutes')
const corporateTraineeRoute = require('./routes/corporateTraineeRoutes')
const commonUsersRoute = require('./routes/commonUsersRoute')
const guestRoute = require('./routes/guestRoute')
const viewCoursesRoute = require('./routes/viewCoursesRoute')
const individualTraineeRoute2 = require('./routes/individualTraineeRoutes2')
const { errorHandler } = require('./middleware/errorMiddleWare')
port = process.env.PORT || 5000
dbConnection()
const app = express()
app.use(express.json())
app.use(fileupload());

app.use(express.raw())
app.use(cors())

// app.use('/', countryRoute)

app.use('/admin', adminRoute)
app.use('/instructor', instructorRoute)
app.use('/instructorsss', instructorRoute2)
app.use('/individualTrainee', individualTraineeRoute)
app.use('/individual', individualTraineeRoute2)
app.use('/corporateTrainee', corporateTraineeRoute)
app.use('/users', commonUsersRoute)
app.use('/guest', guestRoute)
app.use('/viewCourses', viewCoursesRoute)
app.use('/myCourse', myCoursesRoute)
app.use('/search', searchRoute)
app.use(errorHandler)
app.listen(port, () => console.log(`server started on ${port}`))
