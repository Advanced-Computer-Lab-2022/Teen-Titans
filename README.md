
# Online Learning System

This project is for the CSEN 704 Advanced Computer Lab course. The aim of the project was to
create an online learning system where people can sign up and start online courses. The users of the website
are individual trainees, instructors, corporate trainees, admin, and guests. Individual trainees can sign up and start learning by 
registering for courses while corporate trainees are registered by the admin and assigned courses.



## Table of contents
- [Motivation](https://github.com/Advanced-Computer-Lab-2022/Teen-Titans/blob/Doha/README.md#motivation)
- [Build Status](https://github.com/Advanced-Computer-Lab-2022/Teen-Titans#build-status)
- [Tools and Frameworks](https://github.com/Advanced-Computer-Lab-2022/Teen-Titans/blob/Doha/README.md#tools-and-frameworks)
- [Coding style](https://github.com/Advanced-Computer-Lab-2022/Teen-Titans/blob/Doha/README.md#coding-style)
- [Screenshots](https://github.com/Advanced-Computer-Lab-2022/Teen-Titans/blob/Doha/README.md#screenshots)
- [Features](https://github.com/Advanced-Computer-Lab-2022/Teen-Titans/blob/Doha/README.md#features)
- [Installation](https://github.com/Advanced-Computer-Lab-2022/Teen-Titans/blob/Doha/README.md#installation)
- [API References](https://github.com/Advanced-Computer-Lab-2022/Teen-Titans/blob/Doha/README.md#api-references)
  - [Admin]()
  - [Authentication]()
  - [Common Users]()
  - [Corporate Trainee]()
  - [Guest]()
  - [Individual Trainee]()
  - [Instructor]()
  - [Search]()
  - [View Courses]()
## Motivation
The following are the objectives of our project:
- Master working with MERN Stack.
- Work using the Agile Methodology to plan out a project and develop the software.
- Learn how to work together as a team on GitHub.
- Learn the process of following a given set of System Requirements to develop a software


## Build Status


## Tools and Frameworks
This project is fully implemented using the MERN Stack.MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack.

- MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas NoSQL is used as an alternative to traditional relational databases. NoSQL databases are quite useful for working with large sets of distributed data. MongoDB is a tool that can manage document-oriented information, store or retrieve information.
- Express is a Node. js web application server framework, designed for building single-page, multi-page, and hybrid web applications. 
- React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components.
- NodeJS is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.


## Coding style
This project is divided into two main parts, frontend and backend. Our backend is divided into routes,controllers and models. While the frontend consists of several components and pages

## Screenshots


## Features
Mainly this website provides an easy way to be able to register and learn several courses that the user is interested in remotley from all around the world.
Also, allows admins to perform CRUD operations on a course in a flexible way.

## Installation

These are the Installations you need to have in order to run the project 

- [Node JS](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [React JS](https://react-cn.github.io/react/downloads.html)
- vs code or any text editor 
- [MongoDB](https://www.mongodb.com/docs/manual/installation/) either locally or on a cloud. You have to create .env with the dbconnectionString

## API References
Our backend is divided into the following routes, each route has a set of APIs with different functionalities.

## Admin 

1._Defining promotion_ 
- route : `admin/definePromotion/:id`
- request type : `PATCH`
- Parameters: `id`, the id of the course 
- request body : `{"amount": "60", "endDate":"2022-12-20"  } `                   
- response body :
```
{
    "discount": {
        "amount": 70,
        "endDate": "2022-12-18T00:00:00.000Z"
    },
    "_id": "639daec6e727a37ea9493ed5",
    "hours": 3,
    "rating": 0,
    "ratings": {
        "oneStar": 0,
        "twoStar": 0,
        "threeStar": 0,
        "fourStar": 0,
        "fiveStar": 0,
        "_id": "639daec6e727a37ea9493ed6"
    },
    "reviews": [],
    "title": "Physics 9",
    "price": 175,
    "subject": "Science",
    "instructorName": "7amada-3ezzo",
    "instructorId": "638c7d9fa26e15c3c3e8fa61",
    "subtitles": [
        {
            "title": "Current",
            "subtitleHours": "1",
            "video": {
                "url": "https://www.youtube.com/watch?v=r-SCyD7f_zI",
                "shortDescription": "Ohm's Law",
                "_id": "639daec5e727a37ea9493e9b",
                "__v": 0
            },
            "exercise": {
                "questionOne": {
                    "question": "What is enegry?",
                    "options": [
                        {
                            "Text": "power per unit  time",
                            "isCorrect": false,
                            "_id": "639daec5e727a37ea9493e9e"
                        },
                        {
                            "Text": "the ability to do work",
                            "isCorrect": true,
                            "_id": "639daec5e727a37ea9493e9f"
                        },
                        {
                            "Text": "both",
                            "isCorrect": false,
                            "_id": "639daec5e727a37ea9493ea0"
                        },
                        {
                            "Text": "neither",
                            "isCorrect": false,
                            "_id": "639daec5e727a37ea9493ea1"
                        }
                    ]
                },
                "questionTwo": {
                    "question": "What is power",
                    "options": [
                        {
                            "Text": "energy per unit time",
                            "isCorrect": true,
                            "_id": "639daec5e727a37ea9493ea2"
                        },
                        {
                            "Text": "the ability to do work",
                            "isCorrect": false,
                            "_id": "639daec5e727a37ea9493ea3"
                        },
                        {
                            "Text": "both",
                            "isCorrect": false,
                            "_id": "639daec5e727a37ea9493ea4"
                        },
                        {
                            "Text": "neither",
                            "isCorrect": false,
                            "_id": "639daec5e727a37ea9493ea5"
                        }
                    ]
                },
                "_id": "639daec5e727a37ea9493e9d",
                "__v": 0
            },
            "_id": "639daec5e727a37ea9493ea7",
            "__v": 0
        },
        {
            "title": "Circuits",
            "subtitleHours": "2",
            "video": {
                "url": "https://www.youtube.com/watch?v=CDGSYJhNylg",
                "shortDescription": "Series and Parallel Circuits",
                "_id": "639daec5e727a37ea9493eb3",
                "__v": 0
            },
            "exercise": {
                "questionOne": {
                    "question": "How is heat transfered in space?",
                    "options": [
                        {
                            "Text": "by radiation",
                            "isCorrect": true,
                            "_id": "639daec5e727a37ea9493eb6"
                        },
                        {
                            "Text": "by conduction",
                            "isCorrect": false,
                            "_id": "639daec5e727a37ea9493eb7"
                        },
                        {
                            "Text": "by convection",
                            "isCorrect": false,
                            "_id": "639daec5e727a37ea9493eb8"
                        },
                        {
                            "Text": "none of the answers are correct",
                            "isCorrect": false,
                            "_id": "639daec5e727a37ea9493eb9"
                        }
                    ]
                },
                "questionTwo": {
                    "question": "What is Stefan Boltzmann Law?",
                    "options": [
                        {
                            "Text": "total radiant heat power emitted from a surface is proportional to the fourth power of its absolute temperature.",
                            "isCorrect": true,
                            "_id": "639daec5e727a37ea9493eba"
                        },
                        {
                            "Text": "Energy per unit  time",
                            "isCorrect": false,
                            "_id": "639daec5e727a37ea9493ebb"
                        },
                        {
                            "Text": "Energy cannot be created nor destroyed",
                            "isCorrect": false,
                            "_id": "639daec5e727a37ea9493ebc"
                        },
                        {
                            "Text": "none of the answers are correct",
                            "isCorrect": false,
                            "_id": "639daec5e727a37ea9493ebd"
                        }
                    ]
                },
                "_id": "639daec5e727a37ea9493eb5",
                "__v": 0
            },
            "_id": "639daec5e727a37ea9493ebf",
            "__v": 0
        }
    ],
    "shortSummary": "Students will learn the basics of Electricity",
    "previewVideo": {
        "url": "https://www.youtube.com/watch?v=CIv6vu9d73c",
        "shortDescription": "Learn the basics of Electricity",
        "_id": "639daec5e727a37ea9493e99",
        "__v": 0
    },
    "courseOutline": "Heat Transfer, Energy",
    "exercise": {
        "questionOne": {
            "question": "How is heat transfered in space?",
            "options": [
                {
                    "Text": "by radiation",
                    "isCorrect": true,
                    "_id": "639daec6e727a37ea9493ecc"
                },
                {
                    "Text": "by conduction",
                    "isCorrect": false,
                    "_id": "639daec6e727a37ea9493ecd"
                },
                {
                    "Text": "by convection",
                    "isCorrect": false,
                    "_id": "639daec6e727a37ea9493ece"
                },
                {
                    "Text": "none of the answers are correct",
                    "isCorrect": false,
                    "_id": "639daec6e727a37ea9493ecf"
                }
            ]
        },
        "questionTwo": {
            "question": "What is Stefan Boltzmann Law?",
            "options": [
                {
                    "Text": "total radiant heat power emitted from a surface is proportional to the fourth power of its absolute temperature.",
                    "isCorrect": true,
                    "_id": "639daec6e727a37ea9493ed0"
                },
                {
                    "Text": "Energy per unit  time",
                    "isCorrect": false,
                    "_id": "639daec6e727a37ea9493ed1"
                },
                {
                    "Text": "Energy cannot be created nor destroyed",
                    "isCorrect": false,
                    "_id": "639daec6e727a37ea9493ed2"
                },
                {
                    "Text": "none of the answers are correct",
                    "isCorrect": false,
                    "_id": "639daec6e727a37ea9493ed3"
                }
            ]
        },
        "_id": "639daec6e727a37ea9493ecb",
        "__v": 0
    },
    "numberOfEnrolledStudents": 11,
    "createdAt": "2022-12-17T11:57:58.129Z",
    "updatedAt": "2022-12-27T12:09:20.222Z",
    "__v": 0
}
```

2.Adding user 
- route : `admin/addUser`
- request type : `POST`
- request body : 
```
{
    "selectedElement" : "Instructor",
    "username": "Doha123",
    "password":"123"
}
```
- response body :
```
{
    "username": "Doha123",
    "password": "123",
    "email": "",
    "firstName": "",
    "lastName": "",
    "gender": "",
    "country": "",
    "biography": "",
    "moneyOwed": 0,
    "rating": 0,
    "ratings": {
        "oneStar": 0,
        "twoStar": 0,
        "threeStar": 0,
        "fourStar": 0,
        "fiveStar": 0,
        "_id": "63b004a15fb95d83c0ff2951"
    },
    "reviews": [],
    "courses": [],
    "_id": "63b004a15fb95d83c0ff2950",
    "__v": 0
}
```


3.Getting courses
- route : `admin/getCourses`
- request type : `GET`
- response body :
```
[
     {
        "_id": "6383981ec15e86c073a95355",
        "hours": 4,
        "rating": 0,
        "title": "Computer Architecture",
        "price": 700,
        "courseOutline": ""
    },
    //All other courses 
]
```

4.Getting prices
- route : `admin/getPrices`
- request type : `GET`
- response body :
```
[
    {
        "_id": "6383981ec15e86c073a95355",
        "hours": 4,
        "rating": 0,
        "title": "Computer Architecture",
        "price": 700,
        "previewVideo": {
            "url": "",
            "shortDescription": "",
            "_id": "63b005385fb95d83c0ff2955"
        },
        "courseOutline": ""
    },
    //All other courses 
]
```

5.Getting requests
- route : `admin/getRequests`
- request type : `GET`
- response body :

6.Getting a trainee
- route : `admin/getTrainee`
- request type : `GET`
- response body :

7.Getting refunds
- route : `admin/getRefunds`
- request type : `GET`
- response body :

8.Getting reports
- route : `admin/getReports`
- request type : `GET`
- response body :

9.Getting individual trainees
- route : `admin/getIndividualTrainee`
- request type : `GET`
- response body :

10.Getting instructor
- route : `admin/getInstructor`
- request type : `GET`
- response body :

11.Changing status
- route : `admin/changeStatus`
- request type : `POST`
- request body :
- response body :

12.Update report
- route : `admin/updateReport`
- request type : `POST`
- request body :
- response body :


__Authentication__

1.logging in 
- route : `auth/login`
- request type : `POST`
- request body :
- response body :

2.logging out
- route : `auth/logout`
- request type : `GET`
- response body :

__Common users__

1.forgetting password
- route : `users/forgotPassword`
- request type : `POST`
- request body :
```
{
    "email":"haneenmahmoud37@gmail.com"
}
```
- response body :
```
{
    "_id": "637b561c5454ac7c96365a0b",
    "username": "haneen.hassan",
    "password": "rec2",
    "email": "haneenmahmoud37@gmail.com",
    "firstName": "Haneen",
    "lastName": "Hassan",
    "gender": "0",
    "country": "Egypt",
    "wallet": 0,
    "enrolledCourses": [
        {
            "reviews": [],
            "subtitles": [],
            "_id": "6389e80859632a9400491244",
            "createdAt": "2022-12-27T12:09:20.333Z",
            "updatedAt": "2022-12-27T12:09:20.333Z"
        },
        {
            "reviews": [],
            "subtitles": [],
            "_id": "638c90909b8516a8fdfe0154",
            "createdAt": "2022-12-27T12:09:20.333Z",
            "updatedAt": "2022-12-27T12:09:20.333Z"
        },
        {
            "reviews": [],
            "subtitles": [],
            "_id": "638c9fc9c5568c7dfe4e5306",
            "createdAt": "2022-12-27T12:09:20.333Z",
            "updatedAt": "2022-12-27T12:09:20.333Z"
        },
        {
            "reviews": [],
            "subtitles": [],
            "_id": "6399b0dd3fc4e6d64b9c6995",
            "createdAt": "2022-12-27T12:09:20.333Z",
            "updatedAt": "2022-12-27T12:09:20.333Z"
        },
        {
            "reviews": [],
            "subtitles": [],
            "_id": "639cccf60489f863d9256398",
            "createdAt": "2022-12-27T12:09:20.333Z",
            "updatedAt": "2022-12-27T12:09:20.333Z"
        },
        {
            "reviews": [],
            "subtitles": [],
            "_id": "639cdcbc8935737cd43a64fe",
            "createdAt": "2022-12-27T12:09:20.333Z",
            "updatedAt": "2022-12-27T12:09:20.333Z"
        },
        {
            "reviews": [],
            "subtitles": [],
            "_id": "639ce0f4670d9c46b2cc330a",
            "createdAt": "2022-12-27T12:09:20.333Z",
            "updatedAt": "2022-12-27T12:09:20.333Z"
        },
        {
            "reviews": [],
            "subtitles": [],
            "_id": "639ce136f131589efc4a8409",
            "createdAt": "2022-12-27T12:09:20.333Z",
            "updatedAt": "2022-12-27T12:09:20.333Z"
        },
        {
            "reviews": [],
            "subtitles": [],
            "_id": "639ce19156e1d2892d28ae7a",
            "createdAt": "2022-12-27T12:09:20.333Z",
            "updatedAt": "2022-12-27T12:09:20.333Z"
        },
        {
            "reviews": [],
            "subtitles": [],
            "_id": "63a8a286483969109d6a3f1c",
            "createdAt": "2022-12-27T12:09:20.333Z",
            "updatedAt": "2022-12-27T12:09:20.333Z"
        },
        {
            "reviews": [],
            "subtitles": [],
            "_id": "63a8ad29483969109d6a406d",
            "createdAt": "2022-12-27T12:09:20.333Z",
            "updatedAt": "2022-12-27T12:09:20.333Z"
        },
        {
            "reviews": [],
            "subtitles": [],
            "_id": "63a8adb8483969109d6a40c6",
            "createdAt": "2022-12-27T12:09:20.333Z",
            "updatedAt": "2022-12-27T12:09:20.333Z"
        },
        {
            "reviews": [],
            "subtitles": [],
            "_id": "63a8aec6483969109d6a4194",
            "createdAt": "2022-12-27T12:09:20.333Z",
            "updatedAt": "2022-12-27T12:09:20.333Z"
        },
        {
            "reviews": [],
            "subtitles": [],
            "_id": "63aae070f8b6b79f772490a9",
            "createdAt": "2022-12-27T12:09:20.333Z",
            "updatedAt": "2022-12-27T12:09:20.333Z"
        }
    ],
    "__v": 0
   or 
   {
    message: "No user with such email!"
   } 
}
```

2.resetting password
- route : `users/resetPassword`
- request type : `PATCH`
- request body :
```
{
    "id":"637bdc339eb04b114b4a52be",
    "password": "pass123"
}
```
- response body :
```
{     message: 'Password Reset!'
    or
    "message": "User not found!"
}
```

3.getting individual trainee courses
- route : `users/individualTraineeCourses`
- request type : `GET`
- response body :

4.getting corporate trainee courses
- route : `users/corporateTraineeCourses`
- request type : `GET`
- response body :

5.adding a review
- route : `users/review`
- request type : `PATCH`
- request body :
- response body :

6. adding instructor review
- route : `users/instructorReview`
- request type : `PATCH`
- request body :
- response body :

7.rating a course
- route : `users/rateCourse`
- request type : `PATCH`
- request body :
- response body :

8.rating an instructor 
- route : `users/rateInstructor`
- request type : `PATCH`
- request body :
- response body :

9.recieving a certificate by email
- route : `users/getCertificateByEmail`
- request type : `POST`
- request body :
- response body :

10.getting a certificate 
- route : `users/getCertificate`
- request type : `GET`
- request body :
- response body :

11. viewing user wallet
- route : `users/wallet`
- request type : `GET`
- request body :
- response body :

12.checking access
- route : `users/checkAccess`
- request type : `GET`
- request body :
- response body :

13.requesting access to a course
- route : `users/requestAccess`
- request type : `POST`
- request body :
- response body :

14.a trainee reporting a problem
- route : `users/report`
- request type : `POST`
- request body :
- response body :

15.getting reports
- route : `users/getReport`
- request type : `GET`
- request body :
- response body :

__Corporate Trainee__

1.viewing most popular courses
- route : `corporateTrainee/viewPopularCourses`
- request type :`GET`
- response body :
```
[
    {
        "_id": "638f2400eb204e400fddd124",
        "hours": 2,
        "rating": 0,
        "title": "physics 7",
        "price": 800,
        "numberOfEnrolledStudents": 1
    },
    // All other enrolled courses
]
```

2.watching a preview video of course
- route : `corporateTrainee/watchPreviewVideo`
- request type : `GET`
- Query params : `courseId`, the id of the course
- response body :
```
{
    "url": "https://www.youtube.com/watch?v=CIv6vu9d73c",
    "shortDescription": "Learn the basics of Electricity",
    "_id": "639daec5e727a37ea9493e99",
    "__v": 0
}
```

3.getting courses
- route : `corporateTrainee/getCourses`
- request type : `GET`
- response body :
```
[
    {
        "_id": "6383981ec15e86c073a95355",
        "hours": 4,
        "rating": 0,
        "title": "Computer Architecture",
        "price": 700,
        "courseOutline": ""
    },
    //All other courses
  ```  

4.getting prices
- route : `corporateTrainee/getPrices`
- request type : `GET`
- response body :
```
[
    {
        "_id": "6383981ec15e86c073a95355",
        "hours": 4,
        "rating": 0,
        "title": "Computer Architecture",
        "price": 700,
        "previewVideo": {
            "url": "",
            "shortDescription": "",
            "_id": "63b009da5fb95d83c0ff29a6"
        },
        "courseOutline": ""
    },
    //All other courses
```
5.changing password
- route : `corporateTrainee/changePassword`
- request type : `PATCH`
- request body :
- response body :

6.registering for a course
- route : `corporateTrainee/registerForCourse`
- request type : `POST`
- request body :
- response body :

7.searching for a course
- route : `corporateTrainee/:searchInput`
- request type : `GET`
- request body :
- response body :

__Guest__

1.getting courses
- route : `guest/getCourses`
- request type : `GET`
- response body :
```
[
    {
        "_id": "6383981ec15e86c073a95355",
        "hours": 4,
        "rating": 0,
        "title": "Computer Architecture",
        "price": 700,
        "courseOutline": ""
    },
    //All other courses
  ```  

2.getting prices of courses 
- route : `guest/getPrices`
- request type : `GET`
- response body :
```
[
    {
        "_id": "6383981ec15e86c073a95355",
        "hours": 4,
        "rating": 0,
        "title": "Computer Architecture",
        "price": 700,
        "previewVideo": {
            "url": "",
            "shortDescription": "",
            "_id": "63b009da5fb95d83c0ff29a6"
        },
        "courseOutline": ""
    },
    //All other courses
```

3.signup
- route : `guest/signUp`
- request type : `POST`
- request body :
- response body :

4.viewing popular courses
- route : `guest/viewPopularCourses`
- request type : `GET`
- response body :
```
[
    {
        "_id": "638f2400eb204e400fddd124",
        "hours": 2,
        "rating": 0,
        "title": "physics 7",
        "price": 800,
        "numberOfEnrolledStudents": 1
    },
    // All other enrolled courses
]
```

5.watch preview video 
- route : `guest/watchPreviewVideo`
- request type : `GET`
- Query params : `courseId`, the id of the course
- response body :
```
{
    "url": "https://www.youtube.com/watch?v=CIv6vu9d73c",
    "shortDescription": "Learn the basics of Electricity",
    "_id": "639daec5e727a37ea9493e99",
    "__v": 0
}
```

__Individual Trainee__

1.viewing popular courses
- route : `individualTrainee/viewPopularCourses`
- request type : `GET`
- response body :
```
[
    {
        "_id": "638f2400eb204e400fddd124",
        "hours": 2,
        "rating": 0,
        "title": "physics 7",
        "price": 800,
        "numberOfEnrolledStudents": 1
    },
    // All other enrolled courses
]
```

2.watch preview video 
- route : `individualTrainee/watchPreviewVideo`
- request type : `GET`
- Query params : `courseId`, the id of the course
- response body :
```
{
    "url": "https://www.youtube.com/watch?v=CIv6vu9d73c",
    "shortDescription": "Learn the basics of Electricity",
    "_id": "639daec5e727a37ea9493e99",
    "__v": 0
}
```

3.getting courses
- route : `individualTrainee/getCourses`
- request type : `GET`
- response body :
```
[
    {
        "_id": "6383981ec15e86c073a95355",
        "hours": 4,
        "rating": 0,
        "title": "Computer Architecture",
        "price": 700,
        "courseOutline": ""
    },
    //All other courses
  ```  


4.getting prices of courses 
- route : `individualTrainee/getPrices`
- request type : `GET`
- response body :
```
[
    {
        "_id": "6383981ec15e86c073a95355",
        "hours": 4,
        "rating": 0,
        "title": "Computer Architecture",
        "price": 700,
        "previewVideo": {
            "url": "",
            "shortDescription": "",
            "_id": "63b009da5fb95d83c0ff29a6"
        },
        "courseOutline": ""
    },
    //All other courses
```

5.searching for a course
- route : `individualTrainee/:searchInput`
- request type :`GET`
- request body :
- response body :

6. changing password 
- route : `individualTrainee/changePassword`
- request type : `PATCH`
- request body :
- response body :

7.registering for a course 
- route : `individualTrainee/registerForCourse`
- request type : `POST`
- request body : `{ "id":"637fb2419b166ed7d5ac77d0", "courseId":"639daec6e727a37ea9493ed5"}`
- response body :`{ "message": "Registration Successful!"} or { "message": "Registration Unsuccessful!"} `

8.signup
- route : `individualTrainee/signup`
- request type : `POST`
- request body :
- response body :

9.registring for a course using a wallet 
- route : `individualTrainee/registerForCourseUsingWallet`
- request type : `POST`
- request body :  `{ "id":"637fb2419b166ed7d5ac77d0", "courseId":"639daec6e727a37ea9493ed5"}`
- response body : `{ "message": "Registration Successful!"} or { "message": "Registration Unsuccessful!"} `

10.requesting a refunds
- route : `individual/requestRefund`
- request type : `GET`
- response body :

__Instructor__

1.getting a course
- route : `instructor/:id`
- request type : `GET`
- request body :
- response body :

2.getting all courses given by instructor 
- route : `instructor/all/:id`
- request type : `GET`
- request body :
- response body :

3.searching for a course by subject
- route : `instructor/subject/:id`
- request type : `GET`
- request body :
- response body :

4.searching for a courses
- route : `instructor/myCourses/:searchInput/:id`
- request type : `GET`
- request body :
- response body :

5.creating a course
- route : `instructor/createCourse`
- request type : `POST`
- request body : 
```
{
    "title":"Math 6",
    "price":700,
    "subject":"Science",
    "instructorId":"638c7d9fa26e15c3c3e8fa61",
    "instructorName":"7amada-3ezzo",
    "shortSummary":"Students will learn the basics of Electricity",
    "subtitles": [
        {
            "title":"Current",
            "hours":1,
            "video": 
                {
                    "url":"https://www.youtube.com/watch?v=r-SCyD7f_zI",
                    "shortDescription":"Ohm's Law"
                },
            "exercise": {
                "questionOne":{
                    "question": "What is enegry?",
                    "Text1":"power per unit  time",
                    "Text2":"the ability to do work",
                    "Text3":"both",
                    "Text4":"neither",
                    "isCorrect1":"false",
                    "isCorrect2":"true",
                    "isCorrect3":"false",
                    "isCorrect4":"false"
                },
                "questionTwo":{
                    "question": "What is power",
                    "Text1":"energy per unit time",
                    "Text2":"the ability to do work",
                    "Text3":"both",
                    "Text4":"neither",
                    "isCorrect1":"true",
                    "isCorrect2":"false",
                    "isCorrect3":"false",
                    "isCorrect4":"false"
                }
            }

        },
        {
            "title":"Circuits",
            "hours":2,
            "video": 
                {
                    "url":"https://www.youtube.com/watch?v=7mdc-lRrW1c&list=RDCMUCEWpbFLzoYGPfuWUMFPSaoA&index=2",
                    "shortDescription":"Series and Parallel Circuits"
                },
            "exercise": {
                "questionOne":{
                    "question": "How is heat transfered in space?",
                    "Text1":"by radiation",
                    "Text2":"by conduction",
                    "Text3":"by convection",
                    "Text4":"none of the answers are correct",
                    "isCorrect1":"true",
                    "isCorrect2":"false",
                    "isCorrect3":"false",
                    "isCorrect4":"false"
                },
                "questionTwo":{
                    "question": "What is Stefan Boltzmann Law?",
                    "Text1":"total radiant heat power emitted from a surface is proportional to the fourth power of its absolute temperature.",
                    "Text2":"Energy per unit  time",
                    "Text3":"Energy cannot be created nor destroyed",
                    "Text4":"none of the answers are correct",
                    "isCorrect1":"true",
                    "isCorrect2":"false",
                    "isCorrect3":"false",
                    "isCorrect4":"false"
                }
            }

        }
    ],
    "previewVideo": {
        "url":"https://www.youtube.com/watch?v=CIv6vu9d73c",
        "shortDescription":"Learn the basics of Electricity"
    },
    "courseOutline": "Heat Transfer, Energy",
    "exercise": {
                "questionOne":{
                    "question": "How is heat transfered in space?",
                    "Text1":"by radiation",
                    "Text2":"by conduction",
                    "Text3":"by convection",
                    "Text4":"none of the answers are correct",
                    "isCorrect1":"true",
                    "isCorrect2":"false",
                    "isCorrect3":"false",
                    "isCorrect4":"false"
                },
                "questionTwo":{
                    "question": "What is Stefan Boltzmann Law?",
                    "Text1":"total radiant heat power emitted from a surface is proportional to the fourth power of its absolute temperature.",
                    "Text2":"Energy per unit  time",
                    "Text3":"Energy cannot be created nor destroyed",
                    "Text4":"none of the answers are correct",
                    "isCorrect1":"true",
                    "isCorrect2":"false",
                    "isCorrect3":"false",
                    "isCorrect4":"false"
                }
            }

}
```
- response body :
```
{
    "hours": 3,
    "rating": 0,
    "ratings": {
        "oneStar": 0,
        "twoStar": 0,
        "threeStar": 0,
        "fourStar": 0,
        "fiveStar": 0,
        "_id": "63b00c075fb95d83c0ff29e4"
    },
    "reviews": [],
    "title": "Math 6",
    "price": 700,
    "discount": {
        "amount": 0,
        "endDate": null
    },
    "subject": "Science",
    "instructorName": "7amada-3ezzo",
    "instructorId": "638c7d9fa26e15c3c3e8fa61",
    "subtitles": [
        {
            "title": "Current",
            "subtitleHours": "1",
            "video": {
                "url": "https://www.youtube.com/watch?v=r-SCyD7f_zI",
                "shortDescription": "Ohm's Law",
                "_id": "63b00c065fb95d83c0ff29a9",
                "__v": 0
            },
            "exercise": {
                "questionOne": {
                    "question": "What is enegry?",
                    "options": [
                        {
                            "Text": "power per unit  time",
                            "isCorrect": false,
                            "_id": "63b00c065fb95d83c0ff29ac"
                        },
                        {
                            "Text": "the ability to do work",
                            "isCorrect": true,
                            "_id": "63b00c065fb95d83c0ff29ad"
                        },
                        {
                            "Text": "both",
                            "isCorrect": false,
                            "_id": "63b00c065fb95d83c0ff29ae"
                        },
                        {
                            "Text": "neither",
                            "isCorrect": false,
                            "_id": "63b00c065fb95d83c0ff29af"
                        }
                    ]
                },
                "questionTwo": {
                    "question": "What is power",
                    "options": [
                        {
                            "Text": "energy per unit time",
                            "isCorrect": true,
                            "_id": "63b00c065fb95d83c0ff29b0"
                        },
                        {
                            "Text": "the ability to do work",
                            "isCorrect": false,
                            "_id": "63b00c065fb95d83c0ff29b1"
                        },
                        {
                            "Text": "both",
                            "isCorrect": false,
                            "_id": "63b00c065fb95d83c0ff29b2"
                        },
                        {
                            "Text": "neither",
                            "isCorrect": false,
                            "_id": "63b00c065fb95d83c0ff29b3"
                        }
                    ]
                },
                "_id": "63b00c065fb95d83c0ff29ab",
                "__v": 0
            },
            "_id": "63b00c065fb95d83c0ff29b5",
            "__v": 0
        },
        {
            "title": "Circuits",
            "subtitleHours": "2",
            "video": {
                "url": "https://www.youtube.com/watch?v=7mdc-lRrW1c&list=RDCMUCEWpbFLzoYGPfuWUMFPSaoA&index=2",
                "shortDescription": "Series and Parallel Circuits",
                "_id": "63b00c065fb95d83c0ff29c1",
                "__v": 0
            },
            "exercise": {
                "questionOne": {
                    "question": "How is heat transfered in space?",
                    "options": [
                        {
                            "Text": "by radiation",
                            "isCorrect": true,
                            "_id": "63b00c065fb95d83c0ff29c4"
                        },
                        {
                            "Text": "by conduction",
                            "isCorrect": false,
                            "_id": "63b00c065fb95d83c0ff29c5"
                        },
                        {
                            "Text": "by convection",
                            "isCorrect": false,
                            "_id": "63b00c065fb95d83c0ff29c6"
                        },
                        {
                            "Text": "none of the answers are correct",
                            "isCorrect": false,
                            "_id": "63b00c065fb95d83c0ff29c7"
                        }
                    ]
                },
                "questionTwo": {
                    "question": "What is Stefan Boltzmann Law?",
                    "options": [
                        {
                            "Text": "total radiant heat power emitted from a surface is proportional to the fourth power of its absolute temperature.",
                            "isCorrect": true,
                            "_id": "63b00c065fb95d83c0ff29c8"
                        },
                        {
                            "Text": "Energy per unit  time",
                            "isCorrect": false,
                            "_id": "63b00c065fb95d83c0ff29c9"
                        },
                        {
                            "Text": "Energy cannot be created nor destroyed",
                            "isCorrect": false,
                            "_id": "63b00c065fb95d83c0ff29ca"
                        },
                        {
                            "Text": "none of the answers are correct",
                            "isCorrect": false,
                            "_id": "63b00c065fb95d83c0ff29cb"
                        }
                    ]
                },
                "_id": "63b00c065fb95d83c0ff29c3",
                "__v": 0
            },
            "_id": "63b00c075fb95d83c0ff29cd",
            "__v": 0
        }
    ],
    "shortSummary": "Students will learn the basics of Electricity",
    "previewVideo": {
        "url": "https://www.youtube.com/watch?v=CIv6vu9d73c",
        "shortDescription": "Learn the basics of Electricity",
        "_id": "63b00c065fb95d83c0ff29a7",
        "__v": 0
    },
    "courseOutline": "Heat Transfer, Energy",
    "exercise": {
        "questionOne": {
            "question": "How is heat transfered in space?",
            "options": [
                {
                    "Text": "by radiation",
                    "isCorrect": true,
                    "_id": "63b00c075fb95d83c0ff29da"
                },
                {
                    "Text": "by conduction",
                    "isCorrect": false,
                    "_id": "63b00c075fb95d83c0ff29db"
                },
                {
                    "Text": "by convection",
                    "isCorrect": false,
                    "_id": "63b00c075fb95d83c0ff29dc"
                },
                {
                    "Text": "none of the answers are correct",
                    "isCorrect": false,
                    "_id": "63b00c075fb95d83c0ff29dd"
                }
            ]
        },
        "questionTwo": {
            "question": "What is Stefan Boltzmann Law?",
            "options": [
                {
                    "Text": "total radiant heat power emitted from a surface is proportional to the fourth power of its absolute temperature.",
                    "isCorrect": true,
                    "_id": "63b00c075fb95d83c0ff29de"
                },
                {
                    "Text": "Energy per unit  time",
                    "isCorrect": false,
                    "_id": "63b00c075fb95d83c0ff29df"
                },
                {
                    "Text": "Energy cannot be created nor destroyed",
                    "isCorrect": false,
                    "_id": "63b00c075fb95d83c0ff29e0"
                },
                {
                    "Text": "none of the answers are correct",
                    "isCorrect": false,
                    "_id": "63b00c075fb95d83c0ff29e1"
                }
            ]
        },
        "_id": "63b00c075fb95d83c0ff29d9",
        "__v": 0
    },
    "numberOfEnrolledStudents": 0,
    "_id": "63b00c075fb95d83c0ff29e3",
    "createdAt": "2022-12-31T10:16:39.452Z",
    "updatedAt": "2022-12-31T10:16:39.452Z",
    "__v": 0
}
```

6.upload
- route : `instructor/upload`
- request type : `POST`
- request body :
- response body :

7.defining a promotion
- route : `instructor/definePromotion/:id`
- request type : `PATCH`
- Parameters : `id`, the id of the course 
- request body :  
```
{
   "amount": "60",
    "endDate":"2022-12-20"   
}
```
- response body :
```
{
    "discount": {
        "amount": 60,
        "endDate": "2022-12-20T00:00:00.000Z"
    },
    "_id": "639daec6e727a37ea9493ed5",
    "hours": 3,
    "rating": 0,
    "ratings": {
        "oneStar": 0,
        "twoStar": 0,
        "threeStar": 0,
        "fourStar": 0,
        "fiveStar": 0,
        "_id": "639daec6e727a37ea9493ed6"
    },
    "reviews": [],
    "title": "Physics 9",
    "price": 70,
    "subject": "Science",
    "instructorName": "7amada-3ezzo",
    "instructorId": "638c7d9fa26e15c3c3e8fa61",
    "subtitles": [
        {
            "title": "Current",
            "subtitleHours": "1",
            "video": {
                "url": "https://www.youtube.com/watch?v=r-SCyD7f_zI",
                "shortDescription": "Ohm's Law",
                "_id": "639daec5e727a37ea9493e9b",
                "__v": 0
            },
            "exercise": {
                "questionOne": {
                    "question": "What is enegry?",
                    "options": [
                        {
                            "Text": "power per unit  time",
                            "isCorrect": false,
                            "_id": "639daec5e727a37ea9493e9e"
                        },
                        {
                            "Text": "the ability to do work",
                            "isCorrect": true,
                            "_id": "639daec5e727a37ea9493e9f"
                        },
                        {
                            "Text": "both",
                            "isCorrect": false,
                            "_id": "639daec5e727a37ea9493ea0"
                        },
                        {
                            "Text": "neither",
                            "isCorrect": false,
                            "_id": "639daec5e727a37ea9493ea1"
                        }
                    ]
                },
                "questionTwo": {
                    "question": "What is power",
                    "options": [
                        {
                            "Text": "energy per unit time",
                            "isCorrect": true,
                            "_id": "639daec5e727a37ea9493ea2"
                        },
                        {
                            "Text": "the ability to do work",
                            "isCorrect": false,
                            "_id": "639daec5e727a37ea9493ea3"
                        },
                        {
                            "Text": "both",
                            "isCorrect": false,
                            "_id": "639daec5e727a37ea9493ea4"
                        },
                        {
                            "Text": "neither",
                            "isCorrect": false,
                            "_id": "639daec5e727a37ea9493ea5"
                        }
                    ]
                },
                "_id": "639daec5e727a37ea9493e9d",
                "__v": 0
            },
            "_id": "639daec5e727a37ea9493ea7",
            "__v": 0
        },
        {
            "title": "Circuits",
            "subtitleHours": "2",
            "video": {
                "url": "https://www.youtube.com/watch?v=CDGSYJhNylg",
                "shortDescription": "Series and Parallel Circuits",
                "_id": "639daec5e727a37ea9493eb3",
                "__v": 0
            },
            "exercise": {
                "questionOne": {
                    "question": "How is heat transfered in space?",
                    "options": [
                        {
                            "Text": "by radiation",
                            "isCorrect": true,
                            "_id": "639daec5e727a37ea9493eb6"
                        },
                        {
                            "Text": "by conduction",
                            "isCorrect": false,
                            "_id": "639daec5e727a37ea9493eb7"
                        },
                        {
                            "Text": "by convection",
                            "isCorrect": false,
                            "_id": "639daec5e727a37ea9493eb8"
                        },
                        {
                            "Text": "none of the answers are correct",
                            "isCorrect": false,
                            "_id": "639daec5e727a37ea9493eb9"
                        }
                    ]
                },
                "questionTwo": {
                    "question": "What is Stefan Boltzmann Law?",
                    "options": [
                        {
                            "Text": "total radiant heat power emitted from a surface is proportional to the fourth power of its absolute temperature.",
                            "isCorrect": true,
                            "_id": "639daec5e727a37ea9493eba"
                        },
                        {
                            "Text": "Energy per unit  time",
                            "isCorrect": false,
                            "_id": "639daec5e727a37ea9493ebb"
                        },
                        {
                            "Text": "Energy cannot be created nor destroyed",
                            "isCorrect": false,
                            "_id": "639daec5e727a37ea9493ebc"
                        },
                        {
                            "Text": "none of the answers are correct",
                            "isCorrect": false,
                            "_id": "639daec5e727a37ea9493ebd"
                        }
                    ]
                },
                "_id": "639daec5e727a37ea9493eb5",
                "__v": 0
            },
            "_id": "639daec5e727a37ea9493ebf",
            "__v": 0
        }
    ],
    "shortSummary": "Students will learn the basics of Electricity",
    "previewVideo": {
        "url": "https://www.youtube.com/watch?v=CIv6vu9d73c",
        "shortDescription": "Learn the basics of Electricity",
        "_id": "639daec5e727a37ea9493e99",
        "__v": 0
    },
    "courseOutline": "Heat Transfer, Energy",
    "exercise": {
        "questionOne": {
            "question": "How is heat transfered in space?",
            "options": [
                {
                    "Text": "by radiation",
                    "isCorrect": true,
                    "_id": "639daec6e727a37ea9493ecc"
                },
                {
                    "Text": "by conduction",
                    "isCorrect": false,
                    "_id": "639daec6e727a37ea9493ecd"
                },
                {
                    "Text": "by convection",
                    "isCorrect": false,
                    "_id": "639daec6e727a37ea9493ece"
                },
                {
                    "Text": "none of the answers are correct",
                    "isCorrect": false,
                    "_id": "639daec6e727a37ea9493ecf"
                }
            ]
        },
        "questionTwo": {
            "question": "What is Stefan Boltzmann Law?",
            "options": [
                {
                    "Text": "total radiant heat power emitted from a surface is proportional to the fourth power of its absolute temperature.",
                    "isCorrect": true,
                    "_id": "639daec6e727a37ea9493ed0"
                },
                {
                    "Text": "Energy per unit  time",
                    "isCorrect": false,
                    "_id": "639daec6e727a37ea9493ed1"
                },
                {
                    "Text": "Energy cannot be created nor destroyed",
                    "isCorrect": false,
                    "_id": "639daec6e727a37ea9493ed2"
                },
                {
                    "Text": "none of the answers are correct",
                    "isCorrect": false,
                    "_id": "639daec6e727a37ea9493ed3"
                }
            ]
        },
        "_id": "639daec6e727a37ea9493ecb",
        "__v": 0
    },
    "numberOfEnrolledStudents": 13,
    "createdAt": "2022-12-17T11:57:58.129Z",
    "updatedAt": "2022-12-30T21:27:10.938Z",
    "__v": 0
}
or {
    message: "invalid date"
}
or {message: there is already a discount applied}

or {message: no such course}
```
8.edit email
- route : `instructor/editEmail/:id`
- request type : `PATCH`
- Parameters : `id`, the id of the instructor 
- request body :
```
{
    "email": "7amada3ezzo123@gmail.com"
}
```
- response body :
```
{
    "_id": "638c7d9fa26e15c3c3e8fa61",
    "username": "7amada-3ezzo",
    "password": "mamaNona",
    "email": "7amada3ezzo123@gmail.com",
    "firstName": "",
    "lastName": "",
    "gender": "",
    "country": "Egypt",
    "biography": "hfgjfgkfj",
    "moneyOwed": 0,
    "rating": 3.3,
    "ratings": {
        "oneStar": 0,
        "twoStar": 1,
        "threeStar": 5,
        "fourStar": 4,
        "fiveStar": 0,
        "_id": "638c7d9fa26e15c3c3e8fa62"
    },
    "reviews": [],
    "courses": [
        {
            "hours": 2,
            "rating": 0,
            "ratings": {
                "oneStar": 0,
                "twoStar": 0,
                "threeStar": 0,
                "fourStar": 0,
                "fiveStar": 0,
                "_id": "638f2400eb204e400fddd125"
            },
            "reviews": [],
            "title": "physics 7",
            "price": 800,
            "subject": "Science",
            "instructorName": "7amada-3ezzo",
            "instructorId": "638c7d9fa26e15c3c3e8fa61",
            "subtitles": [
                {
                    "title": "thermodynamics",
                    "subtitleHours": "2",
                    "video": {
                        "url": "https://www.youtube.com/watch?v=dHjWVlfNraM",
                        "shortDescription": "thermodynamics part1",
                        "_id": "638f23feeb204e400fddd102",
                        "__v": 0
                    },
                    "exercise": {
                        "questionOne": {
                            "question": "What is Newton's first law?",
                            "options": [
                                {
                                    "_id": "638f23ffeb204e400fddd105"
                                },
                                {
                                    "_id": "638f23ffeb204e400fddd106"
                                },
                                {
                                    "_id": "638f23ffeb204e400fddd107"
                                },
                                {
                                    "_id": "638f23ffeb204e400fddd108"
                                }
                            ]
                        },
                        "questionTwo": {
                            "question": "What is Newton's second law?",
                            "options": [
                                {
                                    "_id": "638f23ffeb204e400fddd109"
                                },
                                {
                                    "_id": "638f23ffeb204e400fddd10a"
                                },
                                {
                                    "_id": "638f23ffeb204e400fddd10b"
                                },
                                {
                                    "_id": "638f23ffeb204e400fddd10c"
                                }
                            ]
                        },
                        "_id": "638f23ffeb204e400fddd104",
                        "__v": 0
                    },
                    "_id": "638f23ffeb204e400fddd10e",
                    "__v": 0
                }
            ],
            "shortSummary": "learn physics",
            "previewVideo": {
                "url": "https://www.youtube.com/watch?v=dHjWVlfNraM",
                "shortDescription": "physics is fun......",
                "_id": "638f23feeb204e400fddd100",
                "__v": 0
            },
            "courseOutline": "thermodynamics, kinematics",
            "exercise": {
                "questionOne": {
                    "question": "What is Newton's first law?",
                    "options": [
                        {
                            "_id": "638f2400eb204e400fddd11b"
                        },
                        {
                            "_id": "638f2400eb204e400fddd11c"
                        },
                        {
                            "_id": "638f2400eb204e400fddd11d"
                        },
                        {
                            "_id": "638f2400eb204e400fddd11e"
                        }
                    ]
                },
                "questionTwo": {
                    "question": "What is Newton's second law?",
                    "options": [
                        {
                            "_id": "638f2400eb204e400fddd11f"
                        },
                        {
                            "_id": "638f2400eb204e400fddd120"
                        },
                        {
                            "_id": "638f2400eb204e400fddd121"
                        },
                        {
                            "_id": "638f2400eb204e400fddd122"
                        }
                    ]
                },
                "_id": "638f2400eb204e400fddd11a",
                "__v": 0
            },
            "numberOfEnrolledStudents": 1,
            "_id": "638f2400eb204e400fddd124",
            "createdAt": "2022-12-31T10:16:39.869Z",
            "updatedAt": "2022-12-31T10:16:39.869Z",
            "__v": 0
        },
        {
            "hours": 3,
            "rating": 0,
            "ratings": {
                "oneStar": 0,
                "twoStar": 0,
                "threeStar": 0,
                "fourStar": 0,
                "fiveStar": 0,
                "_id": "639ce5e8e1707d3cae8074a4"
            },
            "reviews": [],
            "title": "Physics 8",
            "price": 700,
            "subject": "Science",
            "instructorName": "7amada-3ezzo",
            "instructorId": "638c7d9fa26e15c3c3e8fa61",
            "subtitles": [
                {
                    "title": "Current",
                    "subtitleHours": "1",
                    "video": {
                        "url": "https://www.youtube.com/watch?v=r-SCyD7f_zI",
                        "shortDescription": "Ohm's Law",
                        "_id": "639ce5e8e1707d3cae807469",
                        "__v": 0
                    },
                    "exercise": {
                        "questionOne": {
                            "question": "What is enegry?",
                            "options": [
                                {
                                    "Text": "power per unit  time",
                                    "isCorrect": false,
                                    "_id": "639ce5e8e1707d3cae80746c"
                                },
                                {
                                    "Text": "the ability to do work",
                                    "isCorrect": true,
                                    "_id": "639ce5e8e1707d3cae80746d"
                                },
                                {
                                    "Text": "both",
                                    "isCorrect": false,
                                    "_id": "639ce5e8e1707d3cae80746e"
                                },
                                {
                                    "Text": "neither",
                                    "isCorrect": false,
                                    "_id": "639ce5e8e1707d3cae80746f"
                                }
                            ]
                        },
                        "questionTwo": {
                            "question": "What is power",
                            "options": [
                                {
                                    "Text": "energy per unit time",
                                    "isCorrect": true,
                                    "_id": "639ce5e8e1707d3cae807470"
                                },
                                {
                                    "Text": "the ability to do work",
                                    "isCorrect": false,
                                    "_id": "639ce5e8e1707d3cae807471"
                                },
                                {
                                    "Text": "both",
                                    "isCorrect": false,
                                    "_id": "639ce5e8e1707d3cae807472"
                                },
                                {
                                    "Text": "neither",
                                    "isCorrect": false,
                                    "_id": "639ce5e8e1707d3cae807473"
                                }
                            ]
                        },
                        "_id": "639ce5e8e1707d3cae80746b",
                        "__v": 0
                    },
                    "_id": "639ce5e8e1707d3cae807475",
                    "__v": 0
                },
                {
                    "title": "Circuits",
                    "subtitleHours": "2",
                    "video": {
                        "url": "https://www.youtube.com/watch?v=7mdc-lRrW1c&list=RDCMUCEWpbFLzoYGPfuWUMFPSaoA&index=2",
                        "shortDescription": "Series and Parallel Circuits",
                        "_id": "639ce5e8e1707d3cae807481",
                        "__v": 0
                    },
                    "exercise": {
                        "questionOne": {
                            "question": "How is heat transfered in space?",
                            "options": [
                                {
                                    "Text": "by radiation",
                                    "isCorrect": true,
                                    "_id": "639ce5e8e1707d3cae807484"
                                },
                                {
                                    "Text": "by conduction",
                                    "isCorrect": false,
                                    "_id": "639ce5e8e1707d3cae807485"
                                },
                                {
                                    "Text": "by convection",
                                    "isCorrect": false,
                                    "_id": "639ce5e8e1707d3cae807486"
                                },
                                {
                                    "Text": "none of the answers are correct",
                                    "isCorrect": false,
                                    "_id": "639ce5e8e1707d3cae807487"
                                }
                            ]
                        },
                        "questionTwo": {
                            "question": "What is Stefan Boltzmann Law?",
                            "options": [
                                {
                                    "Text": "total radiant heat power emitted from a surface is proportional to the fourth power of its absolute temperature.",
                                    "isCorrect": true,
                                    "_id": "639ce5e8e1707d3cae807488"
                                },
                                {
                                    "Text": "Energy per unit  time",
                                    "isCorrect": false,
                                    "_id": "639ce5e8e1707d3cae807489"
                                },
                                {
                                    "Text": "Energy cannot be created nor destroyed",
                                    "isCorrect": false,
                                    "_id": "639ce5e8e1707d3cae80748a"
                                },
                                {
                                    "Text": "none of the answers are correct",
                                    "isCorrect": false,
                                    "_id": "639ce5e8e1707d3cae80748b"
                                }
                            ]
                        },
                        "_id": "639ce5e8e1707d3cae807483",
                        "__v": 0
                    },
                    "_id": "639ce5e8e1707d3cae80748d",
                    "__v": 0
                }
            ],
            "shortSummary": "Students will learn the basics of Electricity",
            "previewVideo": {
                "url": "https://www.youtube.com/watch?v=CIv6vu9d73c",
                "shortDescription": "Learn the basics of Electricity",
                "_id": "639ce5e8e1707d3cae807467",
                "__v": 0
            },
            "courseOutline": "Heat Transfer, Energy",
            "exercise": {
                "questionOne": {
                    "question": "How is heat transfered in space?",
                    "options": [
                        {
                            "Text": "by radiation",
                            "isCorrect": true,
                            "_id": "639ce5e8e1707d3cae80749a"
                        },
                        {
                            "Text": "by conduction",
                            "isCorrect": false,
                            "_id": "639ce5e8e1707d3cae80749b"
                        },
                        {
                            "Text": "by convection",
                            "isCorrect": false,
                            "_id": "639ce5e8e1707d3cae80749c"
                        },
                        {
                            "Text": "none of the answers are correct",
                            "isCorrect": false,
                            "_id": "639ce5e8e1707d3cae80749d"
                        }
                    ]
                },
                "questionTwo": {
                    "question": "What is Stefan Boltzmann Law?",
                    "options": [
                        {
                            "Text": "total radiant heat power emitted from a surface is proportional to the fourth power of its absolute temperature.",
                            "isCorrect": true,
                            "_id": "639ce5e8e1707d3cae80749e"
                        },
                        {
                            "Text": "Energy per unit  time",
                            "isCorrect": false,
                            "_id": "639ce5e8e1707d3cae80749f"
                        },
                        {
                            "Text": "Energy cannot be created nor destroyed",
                            "isCorrect": false,
                            "_id": "639ce5e8e1707d3cae8074a0"
                        },
                        {
                            "Text": "none of the answers are correct",
                            "isCorrect": false,
                            "_id": "639ce5e8e1707d3cae8074a1"
                        }
                    ]
                },
                "_id": "639ce5e8e1707d3cae807499",
                "__v": 0
            },
            "numberOfEnrolledStudents": 0,
            "_id": "639ce5e8e1707d3cae8074a3",
            "createdAt": "2022-12-31T10:16:39.869Z",
            "updatedAt": "2022-12-31T10:16:39.869Z",
            "__v": 0
        },
        {
            "discount": {
                "amount": 0,
                "endDate": null
            },
            "hours": 3,
            "rating": 0,
            "ratings": {
                "oneStar": 0,
                "twoStar": 0,
                "threeStar": 0,
                "fourStar": 0,
                "fiveStar": 0,
                "_id": "63b00c075fb95d83c0ff29e4"
            },
            "reviews": [],
            "title": "Math 6",
            "price": 700,
            "subject": "Science",
            "instructorName": "7amada-3ezzo",
            "instructorId": "638c7d9fa26e15c3c3e8fa61",
            "subtitles": [
                {
                    "title": "Current",
                    "subtitleHours": "1",
                    "video": {
                        "url": "https://www.youtube.com/watch?v=r-SCyD7f_zI",
                        "shortDescription": "Ohm's Law",
                        "_id": "63b00c065fb95d83c0ff29a9",
                        "__v": 0
                    },
                    "exercise": {
                        "questionOne": {
                            "question": "What is enegry?",
                            "options": [
                                {
                                    "Text": "power per unit  time",
                                    "isCorrect": false,
                                    "_id": "63b00c065fb95d83c0ff29ac"
                                },
                                {
                                    "Text": "the ability to do work",
                                    "isCorrect": true,
                                    "_id": "63b00c065fb95d83c0ff29ad"
                                },
                                {
                                    "Text": "both",
                                    "isCorrect": false,
                                    "_id": "63b00c065fb95d83c0ff29ae"
                                },
                                {
                                    "Text": "neither",
                                    "isCorrect": false,
                                    "_id": "63b00c065fb95d83c0ff29af"
                                }
                            ]
                        },
                        "questionTwo": {
                            "question": "What is power",
                            "options": [
                                {
                                    "Text": "energy per unit time",
                                    "isCorrect": true,
                                    "_id": "63b00c065fb95d83c0ff29b0"
                                },
                                {
                                    "Text": "the ability to do work",
                                    "isCorrect": false,
                                    "_id": "63b00c065fb95d83c0ff29b1"
                                },
                                {
                                    "Text": "both",
                                    "isCorrect": false,
                                    "_id": "63b00c065fb95d83c0ff29b2"
                                },
                                {
                                    "Text": "neither",
                                    "isCorrect": false,
                                    "_id": "63b00c065fb95d83c0ff29b3"
                                }
                            ]
                        },
                        "_id": "63b00c065fb95d83c0ff29ab",
                        "__v": 0
                    },
                    "_id": "63b00c065fb95d83c0ff29b5",
                    "__v": 0
                },
                {
                    "title": "Circuits",
                    "subtitleHours": "2",
                    "video": {
                        "url": "https://www.youtube.com/watch?v=7mdc-lRrW1c&list=RDCMUCEWpbFLzoYGPfuWUMFPSaoA&index=2",
                        "shortDescription": "Series and Parallel Circuits",
                        "_id": "63b00c065fb95d83c0ff29c1",
                        "__v": 0
                    },
                    "exercise": {
                        "questionOne": {
                            "question": "How is heat transfered in space?",
                            "options": [
                                {
                                    "Text": "by radiation",
                                    "isCorrect": true,
                                    "_id": "63b00c065fb95d83c0ff29c4"
                                },
                                {
                                    "Text": "by conduction",
                                    "isCorrect": false,
                                    "_id": "63b00c065fb95d83c0ff29c5"
                                },
                                {
                                    "Text": "by convection",
                                    "isCorrect": false,
                                    "_id": "63b00c065fb95d83c0ff29c6"
                                },
                                {
                                    "Text": "none of the answers are correct",
                                    "isCorrect": false,
                                    "_id": "63b00c065fb95d83c0ff29c7"
                                }
                            ]
                        },
                        "questionTwo": {
                            "question": "What is Stefan Boltzmann Law?",
                            "options": [
                                {
                                    "Text": "total radiant heat power emitted from a surface is proportional to the fourth power of its absolute temperature.",
                                    "isCorrect": true,
                                    "_id": "63b00c065fb95d83c0ff29c8"
                                },
                                {
                                    "Text": "Energy per unit  time",
                                    "isCorrect": false,
                                    "_id": "63b00c065fb95d83c0ff29c9"
                                },
                                {
                                    "Text": "Energy cannot be created nor destroyed",
                                    "isCorrect": false,
                                    "_id": "63b00c065fb95d83c0ff29ca"
                                },
                                {
                                    "Text": "none of the answers are correct",
                                    "isCorrect": false,
                                    "_id": "63b00c065fb95d83c0ff29cb"
                                }
                            ]
                        },
                        "_id": "63b00c065fb95d83c0ff29c3",
                        "__v": 0
                    },
                    "_id": "63b00c075fb95d83c0ff29cd",
                    "__v": 0
                }
            ],
            "shortSummary": "Students will learn the basics of Electricity",
            "previewVideo": {
                "url": "https://www.youtube.com/watch?v=CIv6vu9d73c",
                "shortDescription": "Learn the basics of Electricity",
                "_id": "63b00c065fb95d83c0ff29a7",
                "__v": 0
            },
            "courseOutline": "Heat Transfer, Energy",
            "exercise": {
                "questionOne": {
                    "question": "How is heat transfered in space?",
                    "options": [
                        {
                            "Text": "by radiation",
                            "isCorrect": true,
                            "_id": "63b00c075fb95d83c0ff29da"
                        },
                        {
                            "Text": "by conduction",
                            "isCorrect": false,
                            "_id": "63b00c075fb95d83c0ff29db"
                        },
                        {
                            "Text": "by convection",
                            "isCorrect": false,
                            "_id": "63b00c075fb95d83c0ff29dc"
                        },
                        {
                            "Text": "none of the answers are correct",
                            "isCorrect": false,
                            "_id": "63b00c075fb95d83c0ff29dd"
                        }
                    ]
                },
                "questionTwo": {
                    "question": "What is Stefan Boltzmann Law?",
                    "options": [
                        {
                            "Text": "total radiant heat power emitted from a surface is proportional to the fourth power of its absolute temperature.",
                            "isCorrect": true,
                            "_id": "63b00c075fb95d83c0ff29de"
                        },
                        {
                            "Text": "Energy per unit  time",
                            "isCorrect": false,
                            "_id": "63b00c075fb95d83c0ff29df"
                        },
                        {
                            "Text": "Energy cannot be created nor destroyed",
                            "isCorrect": false,
                            "_id": "63b00c075fb95d83c0ff29e0"
                        },
                        {
                            "Text": "none of the answers are correct",
                            "isCorrect": false,
                            "_id": "63b00c075fb95d83c0ff29e1"
                        }
                    ]
                },
                "_id": "63b00c075fb95d83c0ff29d9",
                "__v": 0
            },
            "numberOfEnrolledStudents": 0,
            "_id": "63b00c075fb95d83c0ff29e3",
            "createdAt": "2022-12-31T10:16:39.869Z",
            "updatedAt": "2022-12-31T10:16:39.869Z",
            "__v": 0
        }
    ],
    "__v": 0
}
or {message: "no such instructor}
```

9.changing password
- route : `instructor/changePassword`
- request type : `PATCH`
- request body :
- response body :

10.edit biography 
- route : `instructor/editBiography/:id`
- request type : `PATCH`
- Parameters : `id` , the id of the instructor
- request body :
```
{
    "biography": "instructor"
}
```
- response body :
```
{
    "_id": "638c7d9fa26e15c3c3e8fa61",
    "username": "7amada-3ezzo",
    "password": "mamaNona",
    "email": "7amada3ezzo123@gmail.com",
    "firstName": "",
    "lastName": "",
    "gender": "",
    "country": "Egypt",
    "biography": "instructor",
    "moneyOwed": 0,
    "rating": 3.3,
    "ratings": {
        "oneStar": 0,
        "twoStar": 1,
        "threeStar": 5,
        "fourStar": 4,
        "fiveStar": 0,
        "_id": "638c7d9fa26e15c3c3e8fa62"
    },
    "reviews": [],
    "courses": [
        {
            "hours": 2,
            "rating": 0,
            "ratings": {
                "oneStar": 0,
                "twoStar": 0,
                "threeStar": 0,
                "fourStar": 0,
                "fiveStar": 0,
                "_id": "638f2400eb204e400fddd125"
            },
            "reviews": [],
            "title": "physics 7",
            "price": 800,
            "subject": "Science",
            "instructorName": "7amada-3ezzo",
            "instructorId": "638c7d9fa26e15c3c3e8fa61",
            "subtitles": [
                {
                    "title": "thermodynamics",
                    "subtitleHours": "2",
                    "video": {
                        "url": "https://www.youtube.com/watch?v=dHjWVlfNraM",
                        "shortDescription": "thermodynamics part1",
                        "_id": "638f23feeb204e400fddd102",
                        "__v": 0
                    },
                    "exercise": {
                        "questionOne": {
                            "question": "What is Newton's first law?",
                            "options": [
                                {
                                    "_id": "638f23ffeb204e400fddd105"
                                },
                                {
                                    "_id": "638f23ffeb204e400fddd106"
                                },
                                {
                                    "_id": "638f23ffeb204e400fddd107"
                                },
                                {
                                    "_id": "638f23ffeb204e400fddd108"
                                }
                            ]
                        },
                        "questionTwo": {
                            "question": "What is Newton's second law?",
                            "options": [
                                {
                                    "_id": "638f23ffeb204e400fddd109"
                                },
                                {
                                    "_id": "638f23ffeb204e400fddd10a"
                                },
                                {
                                    "_id": "638f23ffeb204e400fddd10b"
                                },
                                {
                                    "_id": "638f23ffeb204e400fddd10c"
                                }
                            ]
                        },
                        "_id": "638f23ffeb204e400fddd104",
                        "__v": 0
                    },
                    "_id": "638f23ffeb204e400fddd10e",
                    "__v": 0
                }
            ],
            "shortSummary": "learn physics",
            "previewVideo": {
                "url": "https://www.youtube.com/watch?v=dHjWVlfNraM",
                "shortDescription": "physics is fun......",
                "_id": "638f23feeb204e400fddd100",
                "__v": 0
            },
            "courseOutline": "thermodynamics, kinematics",
            "exercise": {
                "questionOne": {
                    "question": "What is Newton's first law?",
                    "options": [
                        {
                            "_id": "638f2400eb204e400fddd11b"
                        },
                        {
                            "_id": "638f2400eb204e400fddd11c"
                        },
                        {
                            "_id": "638f2400eb204e400fddd11d"
                        },
                        {
                            "_id": "638f2400eb204e400fddd11e"
                        }
                    ]
                },
                "questionTwo": {
                    "question": "What is Newton's second law?",
                    "options": [
                        {
                            "_id": "638f2400eb204e400fddd11f"
                        },
                        {
                            "_id": "638f2400eb204e400fddd120"
                        },
                        {
                            "_id": "638f2400eb204e400fddd121"
                        },
                        {
                            "_id": "638f2400eb204e400fddd122"
                        }
                    ]
                },
                "_id": "638f2400eb204e400fddd11a",
                "__v": 0
            },
            "numberOfEnrolledStudents": 1,
            "_id": "638f2400eb204e400fddd124",
            "createdAt": "2022-12-31T10:16:39.869Z",
            "updatedAt": "2022-12-31T10:16:39.869Z",
            "__v": 0
        },
        {
            "hours": 3,
            "rating": 0,
            "ratings": {
                "oneStar": 0,
                "twoStar": 0,
                "threeStar": 0,
                "fourStar": 0,
                "fiveStar": 0,
                "_id": "639ce5e8e1707d3cae8074a4"
            },
            "reviews": [],
            "title": "Physics 8",
            "price": 700,
            "subject": "Science",
            "instructorName": "7amada-3ezzo",
            "instructorId": "638c7d9fa26e15c3c3e8fa61",
            "subtitles": [
                {
                    "title": "Current",
                    "subtitleHours": "1",
                    "video": {
                        "url": "https://www.youtube.com/watch?v=r-SCyD7f_zI",
                        "shortDescription": "Ohm's Law",
                        "_id": "639ce5e8e1707d3cae807469",
                        "__v": 0
                    },
                    "exercise": {
                        "questionOne": {
                            "question": "What is enegry?",
                            "options": [
                                {
                                    "Text": "power per unit  time",
                                    "isCorrect": false,
                                    "_id": "639ce5e8e1707d3cae80746c"
                                },
                                {
                                    "Text": "the ability to do work",
                                    "isCorrect": true,
                                    "_id": "639ce5e8e1707d3cae80746d"
                                },
                                {
                                    "Text": "both",
                                    "isCorrect": false,
                                    "_id": "639ce5e8e1707d3cae80746e"
                                },
                                {
                                    "Text": "neither",
                                    "isCorrect": false,
                                    "_id": "639ce5e8e1707d3cae80746f"
                                }
                            ]
                        },
                        "questionTwo": {
                            "question": "What is power",
                            "options": [
                                {
                                    "Text": "energy per unit time",
                                    "isCorrect": true,
                                    "_id": "639ce5e8e1707d3cae807470"
                                },
                                {
                                    "Text": "the ability to do work",
                                    "isCorrect": false,
                                    "_id": "639ce5e8e1707d3cae807471"
                                },
                                {
                                    "Text": "both",
                                    "isCorrect": false,
                                    "_id": "639ce5e8e1707d3cae807472"
                                },
                                {
                                    "Text": "neither",
                                    "isCorrect": false,
                                    "_id": "639ce5e8e1707d3cae807473"
                                }
                            ]
                        },
                        "_id": "639ce5e8e1707d3cae80746b",
                        "__v": 0
                    },
                    "_id": "639ce5e8e1707d3cae807475",
                    "__v": 0
                },
                {
                    "title": "Circuits",
                    "subtitleHours": "2",
                    "video": {
                        "url": "https://www.youtube.com/watch?v=7mdc-lRrW1c&list=RDCMUCEWpbFLzoYGPfuWUMFPSaoA&index=2",
                        "shortDescription": "Series and Parallel Circuits",
                        "_id": "639ce5e8e1707d3cae807481",
                        "__v": 0
                    },
                    "exercise": {
                        "questionOne": {
                            "question": "How is heat transfered in space?",
                            "options": [
                                {
                                    "Text": "by radiation",
                                    "isCorrect": true,
                                    "_id": "639ce5e8e1707d3cae807484"
                                },
                                {
                                    "Text": "by conduction",
                                    "isCorrect": false,
                                    "_id": "639ce5e8e1707d3cae807485"
                                },
                                {
                                    "Text": "by convection",
                                    "isCorrect": false,
                                    "_id": "639ce5e8e1707d3cae807486"
                                },
                                {
                                    "Text": "none of the answers are correct",
                                    "isCorrect": false,
                                    "_id": "639ce5e8e1707d3cae807487"
                                }
                            ]
                        },
                        "questionTwo": {
                            "question": "What is Stefan Boltzmann Law?",
                            "options": [
                                {
                                    "Text": "total radiant heat power emitted from a surface is proportional to the fourth power of its absolute temperature.",
                                    "isCorrect": true,
                                    "_id": "639ce5e8e1707d3cae807488"
                                },
                                {
                                    "Text": "Energy per unit  time",
                                    "isCorrect": false,
                                    "_id": "639ce5e8e1707d3cae807489"
                                },
                                {
                                    "Text": "Energy cannot be created nor destroyed",
                                    "isCorrect": false,
                                    "_id": "639ce5e8e1707d3cae80748a"
                                },
                                {
                                    "Text": "none of the answers are correct",
                                    "isCorrect": false,
                                    "_id": "639ce5e8e1707d3cae80748b"
                                }
                            ]
                        },
                        "_id": "639ce5e8e1707d3cae807483",
                        "__v": 0
                    },
                    "_id": "639ce5e8e1707d3cae80748d",
                    "__v": 0
                }
            ],
            "shortSummary": "Students will learn the basics of Electricity",
            "previewVideo": {
                "url": "https://www.youtube.com/watch?v=CIv6vu9d73c",
                "shortDescription": "Learn the basics of Electricity",
                "_id": "639ce5e8e1707d3cae807467",
                "__v": 0
            },
            "courseOutline": "Heat Transfer, Energy",
            "exercise": {
                "questionOne": {
                    "question": "How is heat transfered in space?",
                    "options": [
                        {
                            "Text": "by radiation",
                            "isCorrect": true,
                            "_id": "639ce5e8e1707d3cae80749a"
                        },
                        {
                            "Text": "by conduction",
                            "isCorrect": false,
                            "_id": "639ce5e8e1707d3cae80749b"
                        },
                        {
                            "Text": "by convection",
                            "isCorrect": false,
                            "_id": "639ce5e8e1707d3cae80749c"
                        },
                        {
                            "Text": "none of the answers are correct",
                            "isCorrect": false,
                            "_id": "639ce5e8e1707d3cae80749d"
                        }
                    ]
                },
                "questionTwo": {
                    "question": "What is Stefan Boltzmann Law?",
                    "options": [
                        {
                            "Text": "total radiant heat power emitted from a surface is proportional to the fourth power of its absolute temperature.",
                            "isCorrect": true,
                            "_id": "639ce5e8e1707d3cae80749e"
                        },
                        {
                            "Text": "Energy per unit  time",
                            "isCorrect": false,
                            "_id": "639ce5e8e1707d3cae80749f"
                        },
                        {
                            "Text": "Energy cannot be created nor destroyed",
                            "isCorrect": false,
                            "_id": "639ce5e8e1707d3cae8074a0"
                        },
                        {
                            "Text": "none of the answers are correct",
                            "isCorrect": false,
                            "_id": "639ce5e8e1707d3cae8074a1"
                        }
                    ]
                },
                "_id": "639ce5e8e1707d3cae807499",
                "__v": 0
            },
            "numberOfEnrolledStudents": 0,
            "_id": "639ce5e8e1707d3cae8074a3",
            "createdAt": "2022-12-31T10:16:39.869Z",
            "updatedAt": "2022-12-31T10:16:39.869Z",
            "__v": 0
        },
        {
            "discount": {
                "amount": 0,
                "endDate": null
            },
            "hours": 3,
            "rating": 0,
            "ratings": {
                "oneStar": 0,
                "twoStar": 0,
                "threeStar": 0,
                "fourStar": 0,
                "fiveStar": 0,
                "_id": "63b00c075fb95d83c0ff29e4"
            },
            "reviews": [],
            "title": "Math 6",
            "price": 700,
            "subject": "Science",
            "instructorName": "7amada-3ezzo",
            "instructorId": "638c7d9fa26e15c3c3e8fa61",
            "subtitles": [
                {
                    "title": "Current",
                    "subtitleHours": "1",
                    "video": {
                        "url": "https://www.youtube.com/watch?v=r-SCyD7f_zI",
                        "shortDescription": "Ohm's Law",
                        "_id": "63b00c065fb95d83c0ff29a9",
                        "__v": 0
                    },
                    "exercise": {
                        "questionOne": {
                            "question": "What is enegry?",
                            "options": [
                                {
                                    "Text": "power per unit  time",
                                    "isCorrect": false,
                                    "_id": "63b00c065fb95d83c0ff29ac"
                                },
                                {
                                    "Text": "the ability to do work",
                                    "isCorrect": true,
                                    "_id": "63b00c065fb95d83c0ff29ad"
                                },
                                {
                                    "Text": "both",
                                    "isCorrect": false,
                                    "_id": "63b00c065fb95d83c0ff29ae"
                                },
                                {
                                    "Text": "neither",
                                    "isCorrect": false,
                                    "_id": "63b00c065fb95d83c0ff29af"
                                }
                            ]
                        },
                        "questionTwo": {
                            "question": "What is power",
                            "options": [
                                {
                                    "Text": "energy per unit time",
                                    "isCorrect": true,
                                    "_id": "63b00c065fb95d83c0ff29b0"
                                },
                                {
                                    "Text": "the ability to do work",
                                    "isCorrect": false,
                                    "_id": "63b00c065fb95d83c0ff29b1"
                                },
                                {
                                    "Text": "both",
                                    "isCorrect": false,
                                    "_id": "63b00c065fb95d83c0ff29b2"
                                },
                                {
                                    "Text": "neither",
                                    "isCorrect": false,
                                    "_id": "63b00c065fb95d83c0ff29b3"
                                }
                            ]
                        },
                        "_id": "63b00c065fb95d83c0ff29ab",
                        "__v": 0
                    },
                    "_id": "63b00c065fb95d83c0ff29b5",
                    "__v": 0
                },
                {
                    "title": "Circuits",
                    "subtitleHours": "2",
                    "video": {
                        "url": "https://www.youtube.com/watch?v=7mdc-lRrW1c&list=RDCMUCEWpbFLzoYGPfuWUMFPSaoA&index=2",
                        "shortDescription": "Series and Parallel Circuits",
                        "_id": "63b00c065fb95d83c0ff29c1",
                        "__v": 0
                    },
                    "exercise": {
                        "questionOne": {
                            "question": "How is heat transfered in space?",
                            "options": [
                                {
                                    "Text": "by radiation",
                                    "isCorrect": true,
                                    "_id": "63b00c065fb95d83c0ff29c4"
                                },
                                {
                                    "Text": "by conduction",
                                    "isCorrect": false,
                                    "_id": "63b00c065fb95d83c0ff29c5"
                                },
                                {
                                    "Text": "by convection",
                                    "isCorrect": false,
                                    "_id": "63b00c065fb95d83c0ff29c6"
                                },
                                {
                                    "Text": "none of the answers are correct",
                                    "isCorrect": false,
                                    "_id": "63b00c065fb95d83c0ff29c7"
                                }
                            ]
                        },
                        "questionTwo": {
                            "question": "What is Stefan Boltzmann Law?",
                            "options": [
                                {
                                    "Text": "total radiant heat power emitted from a surface is proportional to the fourth power of its absolute temperature.",
                                    "isCorrect": true,
                                    "_id": "63b00c065fb95d83c0ff29c8"
                                },
                                {
                                    "Text": "Energy per unit  time",
                                    "isCorrect": false,
                                    "_id": "63b00c065fb95d83c0ff29c9"
                                },
                                {
                                    "Text": "Energy cannot be created nor destroyed",
                                    "isCorrect": false,
                                    "_id": "63b00c065fb95d83c0ff29ca"
                                },
                                {
                                    "Text": "none of the answers are correct",
                                    "isCorrect": false,
                                    "_id": "63b00c065fb95d83c0ff29cb"
                                }
                            ]
                        },
                        "_id": "63b00c065fb95d83c0ff29c3",
                        "__v": 0
                    },
                    "_id": "63b00c075fb95d83c0ff29cd",
                    "__v": 0
                }
            ],
            "shortSummary": "Students will learn the basics of Electricity",
            "previewVideo": {
                "url": "https://www.youtube.com/watch?v=CIv6vu9d73c",
                "shortDescription": "Learn the basics of Electricity",
                "_id": "63b00c065fb95d83c0ff29a7",
                "__v": 0
            },
            "courseOutline": "Heat Transfer, Energy",
            "exercise": {
                "questionOne": {
                    "question": "How is heat transfered in space?",
                    "options": [
                        {
                            "Text": "by radiation",
                            "isCorrect": true,
                            "_id": "63b00c075fb95d83c0ff29da"
                        },
                        {
                            "Text": "by conduction",
                            "isCorrect": false,
                            "_id": "63b00c075fb95d83c0ff29db"
                        },
                        {
                            "Text": "by convection",
                            "isCorrect": false,
                            "_id": "63b00c075fb95d83c0ff29dc"
                        },
                        {
                            "Text": "none of the answers are correct",
                            "isCorrect": false,
                            "_id": "63b00c075fb95d83c0ff29dd"
                        }
                    ]
                },
                "questionTwo": {
                    "question": "What is Stefan Boltzmann Law?",
                    "options": [
                        {
                            "Text": "total radiant heat power emitted from a surface is proportional to the fourth power of its absolute temperature.",
                            "isCorrect": true,
                            "_id": "63b00c075fb95d83c0ff29de"
                        },
                        {
                            "Text": "Energy per unit  time",
                            "isCorrect": false,
                            "_id": "63b00c075fb95d83c0ff29df"
                        },
                        {
                            "Text": "Energy cannot be created nor destroyed",
                            "isCorrect": false,
                            "_id": "63b00c075fb95d83c0ff29e0"
                        },
                        {
                            "Text": "none of the answers are correct",
                            "isCorrect": false,
                            "_id": "63b00c075fb95d83c0ff29e1"
                        }
                    ]
                },
                "_id": "63b00c075fb95d83c0ff29d9",
                "__v": 0
            },
            "numberOfEnrolledStudents": 0,
            "_id": "63b00c075fb95d83c0ff29e3",
            "createdAt": "2022-12-31T10:16:39.869Z",
            "updatedAt": "2022-12-31T10:16:39.869Z",
            "__v": 0
        }
    ],
    "__v": 0
}
or {message: 'No such instructor' }
```

11.getting courses
- route : `instructor/getCourses`
- request type : `GET`
- response body :
```
[
    {
        "_id": "6383981ec15e86c073a95355",
        "hours": 4,
        "rating": 0,
        "title": "Computer Architecture",
        "price": 700,
        "courseOutline": ""
    },
    //All other courses
  ```  

12.getting prices
- route : `instructor/getPrices`
- request type : `GET`
- response body :
```
[
    {
        "_id": "6383981ec15e86c073a95355",
        "hours": 4,
        "rating": 0,
        "title": "Computer Architecture",
        "price": 700,
        "previewVideo": {
            "url": "",
            "shortDescription": "",
            "_id": "63b009da5fb95d83c0ff29a6"
        },
        "courseOutline": ""
    },
    //All other courses
```

13.viewing instructor ratings
- route : `instructorsss/viewInstructorRatings`
- request type : `GET`
- request body :
- response body :

14.viewing money owed
- route : `instructorsss/viewMoneyOwed`
- request type : `GET`
- request body :
- response body :

__My Courses__

1.watch video
- route : `myCourse/individualTrainee/watch`
- request type : `GET`
- request body :
- response body :

2.watch video
- route : `myCourse/corporateTrainee/watch`
- request type : `GET`
- request body :
- response body :

3.corporate trainee opening courses
- route : `myCourse/corporateTrainee/openCourse`
- request type : `GET`
- request body :
- response body :

4.individual trainee opening courses
- route : `myCourse/individualTrainee/openCourse`
- request type : `GET`
- request body :
- response body :

5.individual trainee seeing videos
- route : `myCourse/individualTrainee/seen`
- request type : `PATCH`
- request body :
- response body :

6.corporate trainee seeing videos
- route : `myCourse/corporateTrainee/seen`
- request type : `PATCH`
- request body :
- response body :

__Search__

1.searching 
- route : `search/`
- request type : `GET`
- request body :
- response body :

__View Courses__

1.filter courses by subject
- route : `viewCourses/filterSubject`
- request type : `GET`
- request body :
- response body :

2.filter courses by price
- route : `viewCourses/filterPrice`
- request type : `GET`
- request body :
- response body :

3.filter courses by rating
- route : `viewCourses/filterRating`
- request type : `GET`
- request body :
- response body :

4.getting courses
- route : `viewCourses/`
- request type : `GET`
- request body :
- response body :

5.getting prices
- route : `viewCourses/prices`
- request type : `GET`
- request body :
- response body :

6.viewing courses on hover
- route : `viewCourses/onHover`
- request type : `GET`
- request body :
- response body :



















