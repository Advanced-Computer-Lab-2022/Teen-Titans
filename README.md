
# Online Learning System

This project is for the CSEN 704 Advanced Computer Lab course. The aim of the project was to
create an online learning system where people can sign up and start online courses. The users of the website
are individual trainees, instructors, corporate trainees, admin, and guests. Individual trainees can sign up and start learning by 
registering for courses while corporate trainees are registered by the admin and assigned courses.



## Table of contents
- [Motivation](https://github.com/Advanced-Computer-Lab-2022/Teen-Titans#Motivation)
- [Tools and Frameworks](https://github.com/Advanced-Computer-Lab-2022/Teen-Titans#Motivation)
- [Coding style](https://github.com/Advanced-Computer-Lab-2022/Teen-Titans#Motivation)
- [Screenshots](https://github.com/Advanced-Computer-Lab-2022/Teen-Titans#Screenshots)
- [Features](https://github.com/Advanced-Computer-Lab-2022/Teen-Titans#Features)
- [Installation](https://github.com/Advanced-Computer-Lab-2022/Teen-Titans#Installation)
- [API References](https://github.com/Advanced-Computer-Lab-2022/Teen-Titans#Motivation)

## Motivation
The following are the objectives of our project:
- Master working with MERN Stack.
- Work using the Agile Methodology to plan out a project and develop the software.
- Learn how to work together as a team on GitHub.
- Learn the process of following a given set of System Requirements to develop a software


## Tools and Frameworks
This project is fully implemented using the MERN Stack.MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack.

- MongoDB is an open source NoSQL database management program. NoSQL is used as an alternative to traditional relational databases. NoSQL databases are quite useful for working with large sets of distributed data. MongoDB is a tool that can manage document-oriented information, store or retrieve information.
- Express is a Node. js web application server framework, designed for building single-page, multi-page, and hybrid web applications. It is the de facto standard server framework for node.
- ReactJS is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components.
- NodeJS is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.


## Coding style
This project is divided into two main parts, frontend and backend. Our backend is divided into routes,controllers and models. While the frontend consists of several components and pages

## Screenshots


## Features
Mainly this website provides an easy way to be able to register and learn several courses that the user is interested in remotley from all around the world.
Also, allows admins to perform CRUD operations on a course in a flexible way.

## Installation

These are the Installations you need to have in order to run the project 

- Node JS
- NPM
- React JS
- vs code or any text editor 
- MongoDB either locally or on a cloud. You have to create .env with the dbconnectionString

## API References
Our backend is divided into the following routes, each route has a set of APIs with different functionalities.

__Admin__ 

1.Defining promotion 
- route : admin/definePromotion/:id
- request type : PATCH
- request body :
- response body :

2.Adding user 
- route : admin/addUser
- request type : POST
- request body :
- response body :

3.Getting courses
- route : admin/getCourses
- request type : GET
- request body :
- response body :

4.Getting prices
- route : admin/getPrices
- request type : GET
- request body :
- response body :

5.Getting requests
- route : admin/getRequests
- request type : GET
- request body :
- response body :

6.Getting a trainee
- route : admin/getTrainee
- request type : GET
- request body :
- response body :

7.Getting refunds
- route : admin/getRefunds
- request type : GET
- request body :
- response body :

8.Getting reports
- route : admin/getReports
- request type : GET
- request body :
- response body :

9.Getting individual trainees
- route : admin/getIndividualTrainee
- request type : GET
- request body :
- response body :

10.Getting instructor
- route : admin/getInstructor
- request type : GET
- request body :
- response body :

11.Changing status
- route : admin/changeStatus
- request type : POST
- request body :
- response body :

12.Update report
- route : admin/updateReport
- request type : POST
- request body :
- response body :


__Authentication__

1.logging in 
- route : auth/login
- request type : POST
- request body :
- response body :

2.logging out
- route : auth/logout
- request type : GET
- request body :
- response body :

__Common users__

1.forgetting password
- route : users/forgotPassword
- request type : POST
- request body :
- response body :

2.resetting password
- route : users/resetPassword
- request type : PATCH
- request body :
- response body :

3.getting individual trainee courses
- route : users/individualTraineeCourses
- request type : GET
- request body :
- response body :

4.getting corporate trainee courses
- route : users/corporateTraineeCourses
- request type : GET
- request body :
- response body :

5.adding a review
- route : users/review
- request type : PATCH
- request body :
- response body :

6. adding instructor review
- route : users/instructorReview
- request type : PATCH
- request body :
- response body :

7.rating a course
- route : users/rateCourse
- request type : PATCH
- request body :
- response body :

8.rating an instructor 
- route : users/rateInstructor
- request type : PATCH
- request body :
- response body :

9.recieving a certificate by email
- route : users/getCertificateByEmail
- request type : POST
- request body :
- response body :

10.getting a certificate 
- route : users/getCertificate
- request type : GET
- request body :
- response body :

11. viewing user wallet
- route : users/wallet
- request type : GET
- request body :
- response body :

12.checking access
- route : users/checkAccess
- request type : GET
- request body :
- response body :

13.requesting access to a course
- route : users/requestAccess
- request type : POST
- request body :
- response body :

14.a trainee reporting a problem
- route : users/report
- request type : POST
- request body :
- response body :

15.getting reports
- route : users/getReport
- request type : GET
- request body :
- response body :

__Corporate Trainee__

1.viewing most popular courses
- route : corporateTrainee/viewPopularCourses
- request type : GET
- request body :
- response body :

2.watching a preview video of course
- route : corporateTrainee/watchPreviewVideo
- request type : GET
- request body :
- response body :

3.getting courses
- route : corporateTrainee/getCourses
- request type : GET
- request body :
- response body :

4.getting prices
- route : corporateTrainee/getPrices
- request type : GET
- request body :
- response body :

5.changing password
- route : corporateTrainee/changePassword
- request type : PATCH
- request body :
- response body :

6.registering for a course
- route : corporateTrainee/registerForCourse
- request type : POST
- request body :
- response body :

7.searching for a course
- route : corporateTrainee/:searchInput
- request type : GET
- request body :
- response body :

__Guest__

1.getting courses
- route : guest/getCourses
- request type : GET
- request body :
- response body :

2.getting prices of courses 
- route : guest/getPrices
- request type : GET
- request body :
- response body :

3.signup
- route : guest/signUp
- request type : POST
- request body :
- response body :

4.viewing popular courses
- route : guest/viewPopularCourses
- request type : GET
- request body :
- response body :

5.watch preview video 
- route : guest/watchPreviewVideo
- request type : GET
- request body :
- response body :

__Individual Trainee__

1.viewing popular courses
- route : individualTrainee/viewPopularCourses
- request type : GET
- request body :
- response body :

2.watch preview video 
- route : individualTrainee/watchPreviewVideo
- request type : GET
- request body :
- response body :

3.getting courses
- route : individualTrainee/getCourses
- request type : GET
- request body :
- response body :

4.getting prices of courses 
- route : individualTrainee/getPrices
- request type : GET
- request body :
- response body :

5.searching for a course
- route : individualTrainee/:searchInput
- request type : GET
- request body :
- response body :

6. changing password 
- route : individualTrainee/changePassword
- request type : PATCH
- request body :
- response body :

7.registering for a course 
- route : individualTrainee/registerForCourse
- request type : POST
- request body :
- response body :

8.signup
- route : individualTrainee/signup
- request type : POST
- request body :
- response body :

9.registring for a course using a wallet 
- route : individualTrainee/registerForCourseUsingWallet
- request type : POST
- request body :
- response body :

10.requesting a refunds
- route : individual/requestRefund
- request type : GET
- request body :
- response body :

__Instructor__

1.getting a course
- route : instructor/:id
- request type : GET
- request body :
- response body :

2.getting all courses given by instructor 
- route : instructor/all/:id
- request type : GET
- request body :
- response body :

3.searching for a course by subject
- route : instructor/subject/:id
- request type : GET
- request body :
- response body :

4.searching for a courses
- route : instructor/myCourses/:searchInput/:id
- request type : GET
- request body :
- response body :

5.creating a course
- route : instructor/createCourse
- request type : POST
- request body :
- response body :

6.upload
- route : instructor/upload
- request type : POST
- request body :
- response body :

7.defining a promotion
- route : instructor/definePromotion/:id
- request type : PATCH
- request body :
- response body :

8.edit email
- route : instructor/editEmail/:id
- request type : PATCH
- request body :
- response body :

9.changing password
- route : instructor/changePassword
- request type : PATCH
- request body :
- response body :

10.edit biography 
- route : instructor/editBiography
- request type : PATCH
- request body :
- response body :

11.getting courses
- route : instructor/getCourses
- request type : GET
- request body :
- response body :

12.getting prices
- route : instructor/getPrices
- request type : GET
- request body :
- response body :

13.viewing instructor ratings
- route : instructorsss/viewInstructorRatings
- request type : GET
- request body :
- response body :

14.viewing money owed
- route : instructorsss/viewMoneyOwed
- request type : GET
- request body :
- response body :

__My Courses__

1.watch video
- route : myCourse/individualTrainee/watch
- request type : GET
- request body :
- response body :

2.watch video
- route : myCourse/corporateTrainee/watch
- request type : GET
- request body :
- response body :

3.corporate trainee opening courses
- route : myCourse/corporateTrainee/openCourse
- request type : GET
- request body :
- response body :

4.individual trainee opening courses
- route : myCourse/individualTrainee/openCourse
- request type : GET
- request body :
- response body :

5.individual trainee seeing videos
- route : myCourse/individualTrainee/seen
- request type : PATCH
- request body :
- response body :

6.corporate trainee seeing videos
- route : myCourse/corporateTrainee/seen
- request type : PATCH
- request body :
- response body :

__Search__

1.searching 
- route : search/
- request type : GET
- request body :
- response body :

__View Courses__

1.filter courses by subject
- route : viewCourses/filterSubject
- request type : GET
- request body :
- response body :

2.filter courses by price
- route : viewCourses/filterPrice
- request type : GET
- request body :
- response body :

3.filter courses by rating
- route : viewCourses/filterRating
- request type : GET
- request body :
- response body :

4.getting courses
- route : viewCourses/
- request type : GET
- request body :
- response body :

5.getting prices
- route : viewCourses/prices
- request type : GET
- request body :
- response body :

6.viewing courses on hover
- route : viewCourses/onHover
- request type : GET
- request body :
- response body :



















