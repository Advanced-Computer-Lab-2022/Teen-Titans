const express = require('express')
var cors = require('cors')
const logger = require('morgan');
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
const pay = require('./routes/paymentRoute')

// const filterCoursesRoute = require('./routes/filterCoursesRoute')
const { errorHandler } = require('./middleware/errorMiddleWare')
port = process.env.PORT || 5000
dbConnection()
const app = express()
app.use(logger("dev"));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.raw())
app.use(cors())

// app.use('/', countryRoute)

app.use('/admin', adminRoute)
app.use('/instructor', instructorRoute)
app.use('/instructorsss', instructorRoute2)
app.use('/individualTrainee', individualTraineeRoute)
app.use('/corporateTrainee', corporateTraineeRoute)
app.use('/users', commonUsersRoute)
app.use('/guest', guestRoute)
app.use('/viewCourses', viewCoursesRoute)
app.use('/myCourse', myCoursesRoute)
app.use('/search', searchRoute)

// app.post("/api/stripe-payment", (req, res) => {
//     const stripe = require("stripe")(
//       "sk_test_51MEvkYDb3AuWuf2f5Nr1hL9La7ZYUR0Q5mv8QJ5gY2gmq74AIPoX3WqkZGK4lv3x8wFec83japfjbDkCYnr1ER2A00KlKkELBv"
//     );
  
//     const { amount, email, token } = req.body;
  
//     stripe.customers
//       .create({
//         email: email,
//         source: token.id,
//         name: token.card.name,
//       })
//       .then((customer) => {
//         return stripe.charges.create({
//           amount: parseFloat(amount) * 100,
//           description: `Payment for USD ${amount}`,
//           currency: "USD",
//           customer: customer.id,
//         });
//       })
//       .then((charge) => res.status(200).send(charge))
//       .catch((err) => console.log(err));
      
//   });

app.use(errorHandler)
app.listen(port, () => console.log(`server started on ${port}`))
