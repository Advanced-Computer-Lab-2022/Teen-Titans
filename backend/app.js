const express = require('express')
var cors = require('cors')
const dotenv = require('dotenv').config({ path: '.env' })
const dbConnection = require('./configuration/db')
const countryRoute = require('./routes/countryRoute')
const adminRoute = require('./routes/adminRoutes')
const instructorRoute = require('./routes/instructorRoutes')
const searchRoute = require('./routes/searchRoutes')
const myCoursesRoute = require('./routes/myCoursesRouter')
const individualTraineeRoute = require('./routes/individualTraineeRoutes')
const corporateTraineeRoute = require('./routes/corporateTraineeRoutes')
const commonUsersRoute = require('./routes/commonUsersRoute')
const guestRoute = require('./routes/guestRoute')
const viewCoursesRoute = require('./routes/viewCoursesRoute')
// const filterCoursesRoute = require('./routes/filterCoursesRoute')
const { errorHandler } = require('./middleware/errorMiddleWare')
port = process.env.PORT || 5000
dbConnection()
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.raw())
app.use(cors())

// app.use('/', countryRoute)

app.use('/admin', adminRoute)
app.use('/instructor', instructorRoute)
app.use('/individualTrainee', individualTraineeRoute)
app.use('/corporateTrainee', corporateTraineeRoute)
app.use('/users', commonUsersRoute)
app.use('/guest', guestRoute)
app.use('/viewCourses', viewCoursesRoute)
app.use('/myCourse', myCoursesRoute)
app.use(errorHandler)
app.listen(port, () => console.log(`server started on ${port}`))
