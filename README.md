
# Online Learning System

This project is for the CSEN 704 Advanced Computer Lab course. The aim of the project was to
create an online learning system where people can sign up and start online courses. The users of the website
are individual trainees, instructors, corporate trainees, admin, and guests. Individual trainees can sign up and start learning by 
registering for courses while corporate trainees are registered by the admin and assigned courses.



## Table of contents
- [Motivation](https://github.com/Advanced-Computer-Lab-2022/Teen-Titans/blob/main/README.md#motivation)
- [Build Status](https://github.com/Advanced-Computer-Lab-2022/Teen-Titans/blob/main/README.md#build-status)
- [Tools and Frameworks](https://github.com/Advanced-Computer-Lab-2022/Teen-Titans/blob/main/README.md#tools-and-frameworks)
- [Coding style](https://github.com/Advanced-Computer-Lab-2022/Teen-Titans/blob/main/README.md#coding-style)
- [Screenshots](https://github.com/Advanced-Computer-Lab-2022/Teen-Titans/blob/main/README.md#screenshots)
- [Features](https://github.com/Advanced-Computer-Lab-2022/Teen-Titans/blob/main/README.md#features)
- [Installation](https://github.com/Advanced-Computer-Lab-2022/Teen-Titans/blob/main/README.md#installation)
- [API References](https://github.com/Advanced-Computer-Lab-2022/Teen-Titans/blob/main/README.md#api-references)
  - [Admin](https://github.com/Advanced-Computer-Lab-2022/Teen-Titans/blob/main/README.md#admin)
  - [Authentication](https://github.com/Advanced-Computer-Lab-2022/Teen-Titans/blob/main/README.md#authentication)
  - [Common Users](https://github.com/Advanced-Computer-Lab-2022/Teen-Titans/blob/main/README.md#common-users)
  - [Corporate Trainee](https://github.com/Advanced-Computer-Lab-2022/Teen-Titans/blob/main/README.md#corporate-trainee)
  - [Guest](https://github.com/Advanced-Computer-Lab-2022/Teen-Titans/blob/main/README.md#guest)
  - [Individual Trainee](https://github.com/Advanced-Computer-Lab-2022/Teen-Titans/blob/main/README.md#individual-trainee)
  - [Instructor](https://github.com/Advanced-Computer-Lab-2022/Teen-Titans/blob/main/README.md#instructor)
  - [My Courses](https://github.com/Advanced-Computer-Lab-2022/Teen-Titans/blob/main/README.md#my-courses)
  - [Search](https://github.com/Advanced-Computer-Lab-2022/Teen-Titans/blob/main/README.md#search)
  - [View Courses](https://github.com/Advanced-Computer-Lab-2022/Teen-Titans/blob/main/README.md#view-courses)
- [How to use](https://github.com/Advanced-Computer-Lab-2022/Teen-Titans/blob/main/README.md#how-to-use)
- [Credits](https://github.com/Advanced-Computer-Lab-2022/Teen-Titans/blob/main/README.md#credits)
## Motivation
The following are the objectives of our project:
- Help people register for online courses and get the opportunity to learn anywhere and anytime
- Getting familiar with MERN stack.
- Working using the Agile methodology to plan our sprints and develop the software.
- Learn how to use Github and git with its different commands and how to integrate the project as a team.
- Learn how to follow functional and non-functional Requirements given by a client to develop a software


## Build Status
Sometimes the login button lags due to a delay from an API which is responsible for choosing the country. Also, for the getCerrificateByEmail API
it sometimes has a delay beacuse the certificate pdf has a size of 11 megabytes so it takes some time to get sent from the frontend to the backend.


## Tools and Frameworks
We used MERN stack to implement this project. MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack.

- MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas NoSQL is used as an alternative to traditional relational databases. NoSQL databases are quite useful for working with large sets of distributed data. MongoDB is a tool that can manage document-oriented information, store or retrieve information.
- Express is a Node. js web application server framework, designed for building single-page, multi-page, and hybrid web applications. 
- React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components.
- NodeJS is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.


## Coding style
This project is divided into two main parts, frontend and backend. Our backend is divided into routes,controllers and models. While the frontend is a react app which consists of several components and pages

## Screenshots
- Login page 
![image](https://user-images.githubusercontent.com/54781930/210188223-0f9f1124-cb7d-4f20-9071-ae6dcff88ce1.png)

- Individual Trainee homepage
![image](https://user-images.githubusercontent.com/54781930/210188285-b13855d4-f13b-47cd-b54c-2b2ec9c83a28.png)

- Instructor adding a new course 
![image](https://user-images.githubusercontent.com/54781930/210188321-0517c639-c708-4196-8fa1-1351bab1b148.png)
![image](https://user-images.githubusercontent.com/54781930/210188325-0f6961df-ab8a-48d9-9b45-ad8ca6accc2f.png)

- Instructor change password and edit biography
![image](https://user-images.githubusercontent.com/54781930/210188330-277bdb28-a8ab-4379-97f1-469d7da6abee.png)

- Admin viewing requests 
![image](https://user-images.githubusercontent.com/54781930/210188339-dfd2daa6-2876-46c5-8879-ae6319a6d429.png)

- Admin checking reports
![image](https://user-images.githubusercontent.com/54781930/210188345-3aed8ab5-1722-4eab-bd50-fc392806e78f.png)

## Features
This website provides an easy way to be able to register and learn several courses that the user is interested in remotley from all around the world. The user can find  different types of courses with suitable prices.
Also, allows the instructor to perform CRUD operations on a course and on his/her data in a flexible way.

## Installation

These are the Installations you need to have in order to run the project 

- [Node JS](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [React JS](https://react-cn.github.io/react/downloads.html)
- vs code or any text editor 
- [MongoDB](https://www.mongodb.com/docs/manual/installation/) either locally or on a cloud.
- create .env file which contains the port number(5000) and the dbconnectionString.

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

2._Adding user_ 
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


3._Getting courses_
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

4._Getting prices_
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
```
[
    {
        "_id": "63aed1196435bd273b7558be",
        "userId": "635ea3bc0fe0c0e99a739b45",
        "courseId": "638c90909b8516a8fdfe0154",
        "status": "pending",
        "type": "corporate",
        "username": "Malak",
        "courseTitle": "Chemistry",
        "__v": 0
    },
    //All other requests
]
```

6.Getting a trainee
- route : `admin/getTrainee`
- request type : `GET`
- Query params : `traineeid` , id of corporate trainee
- response body :
```
{
    "_id": "635e98e1488d06b842f53f20",
    "username": "Haneen",
    "password": "kobayetBiskeweet",
    "enrolledCourses": [
        {
            "reviews": [],
            "course": {
                "hours": 3,
                "rating": 3.5,
                "ratings": {
                    "oneStar": 1,
                    "twoStar": 1,
                    "threeStar": 1,
                    "fourStar": 3,
                    "fiveStar": 2,
                    "_id": "6384e20fd26b508425abba1d"
                },
                "reviews": [
                    "Great course!",
                    "Awesome course!",
                    "Nice course!"
                ],
                "title": "Physics 2",
                "price": 700,
                "subject": "Science",
                "instructorName": "taymoor.beblawi",
                "instructorId": "635ea4bb0fe0c0e99a739b4f",
                "subtitles": [
                    {
                        "title": "Current",
                        "subtitleHours": "1",
                        "exercise": {
                            "questionOne": {
                                "question": "What is enegry?",
                                "options": [
                                    {
                                        "id": 0,
                                        "_id": "6384e20ed26b508425abb9eb"
                                    },
                                    {
                                        "id": 1,
                                        "_id": "6384e20ed26b508425abb9ec"
                                    },
                                    {
                                        "id": 2,
                                        "_id": "6384e20ed26b508425abb9ed"
                                    },
                                    {
                                        "id": 3,
                                        "_id": "6384e20ed26b508425abb9ee"
                                    }
                                ]
                            },
                            "questionTwo": {
                                "question": "What is power",
                                "options": [
                                    {
                                        "id": 0,
                                        "_id": "6384e20ed26b508425abb9ef"
                                    },
                                    {
                                        "id": 1,
                                        "_id": "6384e20ed26b508425abb9f0"
                                    },
                                    {
                                        "id": 2,
                                        "_id": "6384e20ed26b508425abb9f1"
                                    },
                                    {
                                        "id": 3,
                                        "_id": "6384e20ed26b508425abb9f2"
                                    }
                                ]
                            },
                            "_id": "6384e20ed26b508425abb9ea",
                            "__v": 0
                        },
                        "_id": "6384e20ed26b508425abb9f4",
                        "__v": 0
                    },
                    {
                        "title": "Circuits",
                        "subtitleHours": "2",
                        "exercise": {
                            "questionOne": {
                                "question": "How is heat transfered in space?",
                                "options": [
                                    {
                                        "id": 0,
                                        "_id": "6384e20fd26b508425abba06"
                                    },
                                    {
                                        "id": 1,
                                        "_id": "6384e20fd26b508425abba07"
                                    },
                                    {
                                        "id": 2,
                                        "_id": "6384e20fd26b508425abba08"
                                    },
                                    {
                                        "id": 3,
                                        "_id": "6384e20fd26b508425abba09"
                                    }
                                ]
                            },
                            "questionTwo": {
                                "question": "What is Stefan Boltzmann Law?",
                                "options": [
                                    {
                                        "id": 0,
                                        "_id": "6384e20fd26b508425abba0a"
                                    },
                                    {
                                        "id": 1,
                                        "_id": "6384e20fd26b508425abba0b"
                                    },
                                    {
                                        "id": 2,
                                        "_id": "6384e20fd26b508425abba0c"
                                    },
                                    {
                                        "id": 3,
                                        "_id": "6384e20fd26b508425abba0d"
                                    }
                                ]
                            },
                            "_id": "6384e20fd26b508425abba05",
                            "__v": 0
                        },
                        "_id": "6384e20fd26b508425abba0f",
                        "__v": 0
                    }
                ],
                "shortSummary": "Students will learn the basics of Electricity",
                "previewVideo": {
                    "url": "https://www.youtube.com/watch?v=CIv6vu9d73c",
                    "shortDescription": "Learn the basics of Electricity",
                    "_id": "6384e20fd26b508425abba36"
                },
                "courseOutline": "",
                "_id": "6384e20fd26b508425abba1c",
                "createdAt": "2022-11-28T16:30:07.863Z",
                "updatedAt": "2022-11-29T12:19:32.675Z",
                "__v": 0
            },
            "videosSeen": [],
            "numberComplete": 0,
            "percentageComplete": 0,
            "_id": "63ad2bd0fc359e18bb66dfdc",
            "subtitles": []
        }
    ],
    "__v": 0
}
or 
message:{"user not found!"}
```

7.Getting refunds
- route : `admin/getRefunds`
- request type : `GET`
- response body :
```
[
    {
        "_id": "639dcdc419972ba72dec9d5d",
        "userId": "639dbc17670262e8e16f1755",
        "courseId": "639daec6e727a37ea9493ed5",
        "status": "pending",
        "type": "refund",
        "__v": 0,
        "username": "samah.ahmad",
        "coursePrice": 28
    }
]
```
8.Getting reports
- route : `admin/getReports`
- request type : `GET`
- response body :
```
[
    {
        "_id": "63ac11ebf2f751e26f709dc5",
        "userId": "639dbc17670262e8e16f1755",
        "user": "individualTrainee",
        "courseId": "639daec6e727a37ea9493ed5",
        "type": "technical",
        "problem": "b",
        "status": "pending",
        "username": "samah.ahmad",
        "__v": 0,
        "courseTitle": "Physics 9"
    },
    //All other reports
```

9.Getting individual trainees
- route : `admin/getIndividualTrainee`
- request type : `GET`
- Query params : `traineeid`, id of individual trainee
- response body :
```
{
    "_id": "63af4dab01df8419cffe974e",
    "username": "richard.geryson",
    "password": "IamRobin",
    "email": "ric.greyson@gmail.com",
    "firstName": "Richard",
    "lastName": "Greyson",
    "gender": "Male",
    "country": "Egypt",
    "wallet": 0,
    "enrolledCourses": [
        {
            "reviews": [],
            "course": {
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
                "discount": {
                    "amount": 60,
                    "endDate": "2022-12-20T00:00:00.000Z"
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
                "numberOfEnrolledStudents": 12,
                "_id": "639daec6e727a37ea9493ed5",
                "createdAt": "2022-12-17T11:57:58.129Z",
                "updatedAt": "2022-12-30T21:12:54.589Z",
                "__v": 0
            },
            "videosSeen": [
                "639daec5e727a37ea9493e9b"
            ],
            "numberComplete": 1,
            "percentageComplete": 50,
            "_id": "63af545601df8419cffe98b7",
            "subtitles": []
        }
    ],
    "__v": 0
}
or 
{
    "message": "user not found!"
}
```

10.Getting instructor
- route : `admin/getInstructor`
- request type : `GET`
- Query params : `traineeid` , id of instructor
- response body :
```
{
    "_id": "63557c71702f8f2b2cd1b8e1",
    "username": "habiba",
    "password": "pass12",
    "reviews": [],
    "courses": [
        {
            "reviews": [],
            "title": "Networks",
            "subtitles": [],
            "_id": "635ee4cf84b1889973a924b4",
            "createdAt": "2022-12-02T07:48:20.782Z",
            "updatedAt": "2022-12-02T07:48:20.782Z"
        },
      //All other courses the instructor teaches 
    ],
    "__v": 0,
    "email": "habiba@hotmail",
    "biography": "hellooooo",
    "rating": 4
}
```

11.Changing status to resolved
- route : `admin/changeStatus`
- request type : `POST`
- request body :
```
{
  "id": "639dc2cc7e5aed21ae1118b2"  
}
```
- response body :
```
{
    "_id": "639dc2cc7e5aed21ae1118b2",
    "userId": "639dbc17670262e8e16f1755",
    "courseId": "639daec6e727a37ea9493ed5",
    "status": "resolved",
    "type": "refund",
    "__v": 0
}
```

12.Update report
- route : `admin/updateReport`
- request type : `POST`
- request body :
```
{
  "id": "63ac11ebf2f751e26f709dc5",
  "status": "pending"  
}
```
- response body :
```
{
    "_id": "63ac11ebf2f751e26f709dc5",
    "userId": "639dbc17670262e8e16f1755",
    "user": "individualTrainee",
    "courseId": "639daec6e727a37ea9493ed5",
    "type": "technical",
    "problem": "b",
    "status": "pending",
    "username": "",
    "__v": 0
}
```


## Authentication

1.logging in 
- route : `auth/login`
- request type : `POST`
- request body :
```
{
    "username":"Doha",
    "password":"pass12"
}
```
- response body :
```
{
    "user": {
        "_id": "63557c5b4e231354f488416c",
        "username": "Doha",
        "password": "pass12",
        "enrolledCourses": [
            {
                "reviews": [],
                "course": {
                    "hours": 0,
                    "rating": 0,
                    "reviews": [],
                    "title": "Networks",
                    "price": 500,
                    "subject": "",
                    "instructorName": "habiba",
                    "instructorId": "63557c71702f8f2b2cd1b8e1",
                    "subtitles": [
                        {
                            "_id": "635e6eed4526c341180ace81"
                        },
                        {
                            "_id": "635e6eed4526c341180ace83"
                        }
                    ],
                    "shortSummary": "Short Summary",
                    "courseOutline": "",
                    "_id": "635e6eed4526c341180ace80",
                    "createdAt": "2022-10-30T12:32:45.567Z",
                    "updatedAt": "2022-10-30T12:32:45.567Z",
                    "__v": 0
                },
                "videosSeen": [],
                "numberComplete": 0,
                "percentageComplete": 0,
                "_id": "63a59fffeca8bf1ea34d539e",
                "subtitles": []
            },
            {
                "reviews": [],
                "course": {
                    "hours": 0,
                    "rating": 0,
                    "reviews": [],
                    "title": "Networks",
                    "price": 500,
                    "subject": "",
                    "instructorName": "habiba",
                    "instructorId": "63557c71702f8f2b2cd1b8e1",
                    "subtitles": [
                        {
                            "_id": "635e6eed4526c341180ace81"
                        },
                        {
                            "_id": "635e6eed4526c341180ace83"
                        }
                    ],
                    "shortSummary": "Short Summary",
                    "courseOutline": "",
                    "_id": "635e6eed4526c341180ace80",
                    "createdAt": "2022-10-30T12:32:45.567Z",
                    "updatedAt": "2022-12-23T12:33:03.530Z",
                    "__v": 0
                },
                "videosSeen": [],
                "numberComplete": 0,
                "percentageComplete": 0,
                "_id": "63a5a55e3c8143f0e4f45434",
                "subtitles": []
            },
            {
                "reviews": [],
                "course": {
                    "hours": 0,
                    "rating": 0,
                    "reviews": [],
                    "title": "Communications",
                    "price": 200,
                    "subject": "",
                    "instructorName": "habiba",
                    "instructorId": "63557c71702f8f2b2cd1b8e1",
                    "subtitles": [
                        {
                            "exercise": {
                                "questionOne": {
                                    "question": "2+5=",
                                    "options": [
                                        {
                                            "id": 0,
                                            "Text": "4",
                                            "isCorrect": false,
                                            "_id": "6384d7117250ba6afe4e0395"
                                        },
                                        {
                                            "id": 1,
                                            "Text": "4",
                                            "isCorrect": false,
                                            "_id": "6384d7117250ba6afe4e0396"
                                        },
                                        {
                                            "id": 2,
                                            "Text": "5",
                                            "isCorrect": false,
                                            "_id": "6384d7117250ba6afe4e0397"
                                        },
                                        {
                                            "id": 3,
                                            "Text": "6",
                                            "isCorrect": true,
                                            "_id": "6384d7117250ba6afe4e0398"
                                        }
                                    ]
                                },
                                "questionTwo": {
                                    "question": "6+3=",
                                    "options": [
                                        {
                                            "id": 0,
                                            "Text": "4",
                                            "_id": "6384d7117250ba6afe4e0399"
                                        },
                                        {
                                            "id": 1,
                                            "Text": "11",
                                            "_id": "6384d7117250ba6afe4e039a"
                                        },
                                        {
                                            "id": 2,
                                            "Text": "5",
                                            "_id": "6384d7117250ba6afe4e039b"
                                        },
                                        {
                                            "id": 3,
                                            "Text": "6",
                                            "_id": "6384d7117250ba6afe4e039c"
                                        }
                                    ]
                                },
                                "_id": "6384d7117250ba6afe4e0394"
                            },
                            "_id": "6384d7117250ba6afe4e0393"
                        }
                    ],
                    "shortSummary": "Short Summary",
                    "previewVideo": {
                        "url": "x",
                        "shortDescription": "cd",
                        "_id": "638335ab0195ebb849d9ec79"
                    },
                    "courseOutline": "",
                    "_id": "635e661d9d1f98e2e3c98f89",
                    "createdAt": "2022-10-30T11:55:09.360Z",
                    "updatedAt": "2022-11-28T15:43:13.904Z",
                    "__v": 0
                },
                "videosSeen": [],
                "numberComplete": 0,
                "percentageComplete": 0,
                "_id": "63a5a627a47a23485babf836",
                "subtitles": []
            },
        ]
 or
{
    "message": "No such username!"
}
or
{
    "message": "Wrong Password!"
}
```

2.logging out
- route : `auth/logout`
- request type : `GET`
- response body :
```
{
    "message" : "You are logged out!
}
```

## Common users 

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

3.Individual trainee getting his/her courses
- route : `users/individualTraineeCourses`
- request type : `GET`
- Query params : `id` , individual trainee _id
- response body :
```
[
    {
        "_id": "638c9fc9c5568c7dfe4e5306",
        "hours": 3,
        "rating": 5,
        "ratings": {
            "oneStar": 0,
            "twoStar": 0,
            "threeStar": 0,
            "fourStar": 0,
            "fiveStar": 4,
            "_id": "638c9fc9c5568c7dfe4e5307"
        },
        "reviews": [],
        "title": "Physics 6",
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
                    "_id": "638c9fc6c5568c7dfe4e52cc",
                    "__v": 0
                },
                "exercise": {
                    "questionOne": {
                        "question": "What is enegry?",
                        "options": [
                            {
                                "Text": "power per unit  time",
                                "isCorrect": false,
                                "_id": "638c9fc7c5568c7dfe4e52cf"
                            },
                            {
                                "Text": "the ability to do work",
                                "isCorrect": true,
                                "_id": "638c9fc7c5568c7dfe4e52d0"
                            },
                            {
                                "Text": "both",
                                "isCorrect": false,
                                "_id": "638c9fc7c5568c7dfe4e52d1"
                            },
                            {
                                "Text": "neither",
                                "isCorrect": false,
                                "_id": "638c9fc7c5568c7dfe4e52d2"
                            }
                        ]
                    },
                    "questionTwo": {
                        "question": "What is power",
                        "options": [
                            {
                                "Text": "energy per unit time",
                                "isCorrect": true,
                                "_id": "638c9fc7c5568c7dfe4e52d3"
                            },
                            {
                                "Text": "the ability to do work",
                                "isCorrect": false,
                                "_id": "638c9fc7c5568c7dfe4e52d4"
                            },
                            {
                                "Text": "both",
                                "isCorrect": false,
                                "_id": "638c9fc7c5568c7dfe4e52d5"
                            },
                            {
                                "Text": "neither",
                                "isCorrect": false,
                                "_id": "638c9fc7c5568c7dfe4e52d6"
                            }
                        ]
                    },
                    "_id": "638c9fc7c5568c7dfe4e52ce",
                    "__v": 0
                },
                "_id": "638c9fc7c5568c7dfe4e52d8",
                "__v": 0
            },
            {
                "title": "Circuits",
                "subtitleHours": "2",
                "video": {
                    "url": "https://www.youtube.com/watch?v=7mdc-lRrW1c&list=RDCMUCEWpbFLzoYGPfuWUMFPSaoA&index=2",
                    "shortDescription": "Series and Parallel Circuits",
                    "_id": "638c9fc7c5568c7dfe4e52e4",
                    "__v": 0
                },
                "exercise": {
                    "questionOne": {
                        "question": "How is heat transfered in space?",
                        "options": [
                            {
                                "Text": "by radiation",
                                "isCorrect": true,
                                "_id": "638c9fc8c5568c7dfe4e52e7"
                            },
                            {
                                "Text": "by conduction",
                                "isCorrect": false,
                                "_id": "638c9fc8c5568c7dfe4e52e8"
                            },
                            {
                                "Text": "by convection",
                                "isCorrect": false,
                                "_id": "638c9fc8c5568c7dfe4e52e9"
                            },
                            {
                                "Text": "none of the answers are correct",
                                "isCorrect": false,
                                "_id": "638c9fc8c5568c7dfe4e52ea"
                            }
                        ]
                    },
                    "questionTwo": {
                        "question": "What is Stefan Boltzmann Law?",
                        "options": [
                            {
                                "Text": "total radiant heat power emitted from a surface is proportional to the fourth power of its absolute temperature.",
                                "isCorrect": true,
                                "_id": "638c9fc8c5568c7dfe4e52eb"
                            },
                            {
                                "Text": "Energy per unit  time",
                                "isCorrect": false,
                                "_id": "638c9fc8c5568c7dfe4e52ec"
                            },
                            {
                                "Text": "Energy cannot be created nor destroyed",
                                "isCorrect": false,
                                "_id": "638c9fc8c5568c7dfe4e52ed"
                            },
                            {
                                "Text": "none of the answers are correct",
                                "isCorrect": false,
                                "_id": "638c9fc8c5568c7dfe4e52ee"
                            }
                        ]
                    },
                    "_id": "638c9fc8c5568c7dfe4e52e6",
                    "__v": 0
                },
                "_id": "638c9fc8c5568c7dfe4e52f0",
                "__v": 0
            }
        ],
        "shortSummary": "Students will learn the basics of Electricity",
        "previewVideo": {
            "url": "https://www.youtube.com/watch?v=CIv6vu9d73c",
            "shortDescription": "Learn the basics of Electricity",
            "_id": "638c9fc5c5568c7dfe4e52ca",
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
                        "_id": "638c9fc8c5568c7dfe4e52fd"
                    },
                    {
                        "Text": "by conduction",
                        "isCorrect": false,
                        "_id": "638c9fc8c5568c7dfe4e52fe"
                    },
                    {
                        "Text": "by convection",
                        "isCorrect": false,
                        "_id": "638c9fc8c5568c7dfe4e52ff"
                    },
                    {
                        "Text": "none of the answers are correct",
                        "isCorrect": false,
                        "_id": "638c9fc8c5568c7dfe4e5300"
                    }
                ]
            },
            "questionTwo": {
                "question": "What is Stefan Boltzmann Law?",
                "options": [
                    {
                        "Text": "total radiant heat power emitted from a surface is proportional to the fourth power of its absolute temperature.",
                        "isCorrect": true,
                        "_id": "638c9fc8c5568c7dfe4e5301"
                    },
                    {
                        "Text": "Energy per unit  time",
                        "isCorrect": false,
                        "_id": "638c9fc8c5568c7dfe4e5302"
                    },
                    {
                        "Text": "Energy cannot be created nor destroyed",
                        "isCorrect": false,
                        "_id": "638c9fc8c5568c7dfe4e5303"
                    },
                    {
                        "Text": "none of the answers are correct",
                        "isCorrect": false,
                        "_id": "638c9fc8c5568c7dfe4e5304"
                    }
                ]
            },
            "_id": "638c9fc8c5568c7dfe4e52fc",
            "__v": 0
        },
        "createdAt": "2022-12-04T13:25:29.016Z",
        "updatedAt": "2022-12-06T11:21:19.607Z",
        "__v": 0
    },
//All other courses
]
or 
{
    message: 'user not found'
}
```


4.getting corporate trainee courses
- route : `users/corporateTraineeCourses`
- request type : `GET`
- response body :
```
{
    [ 
        //All the trainee courses
    ]
    
}
or 
{
    message:'User not found'
}
```

5.adding a review
- route : `users/review`
- request type : `PATCH`
- Query params : `id`, course id
- request body :
```
{
 "review": "good course"
}
```
- response body :
```
//All the course reviews
```

6. adding instructor review
- route : `users/instructorReview`
- request type : `PATCH`
- Query params : `id`, instructor id
- request body :
```
{
 "review": "good instructor"
}
```
- response body :
```
//All the instructor reviews
```
7.rating a course
- route : `users/rateCourse`
- request type : `PATCH`
- Query params : `id`, course id
- request body :
```
{
    "rating": "1"
}
```
- response body :
```
{
    "oneStar": 0,
    "twoStar": 0,
    "threeStar": 0,
    "fourStar": 0,
    "fiveStar": 0,
    "_id": "63b00c075fb95d83c0ff29e4"
}
```

8.rating an instructor 
- route : `users/rateInstructor`
- request type : `PATCH`
- Query params : `id`, instructor id
- request body :
```
{
    "rating": "1"
}
```
- response body :
```
{
    "oneStar": 0,
    "twoStar": 1,
    "threeStar": 5,
    "fourStar": 4,
    "fiveStar": 0,
    "_id": "638c7d9fa26e15c3c3e8fa62"
}
```
9.recieving a certificate by email
- route : `users/getCertificateByEmail`
- request type : `POST`
- Query params : `user` , `id`, `courseId`, `file`
- response body :
```
{
    "message": "Email Sent!"
}
```

10.getting a certificate 
- route : `users/getCertificate`
- request type : `GET`
- Query params : `user` , `id`, `courseId`
- response body :
```
{
    "name": "Haneen Hassan",
    "course": "Has completed the Computer Architecture course.",
    "instructor": "batata"
}
or 
{
    "message":"Something went wrong!"
}
```

11.viewing user wallet
- route : `users/wallet`
- request type : `GET`
- Query params : `id` individual trainee id 
- response body :
```
32430.781249999996
or 
{
    "message": "User not found"
}
```


12.checking access
- route : `users/checkAccess`
- request type : `GET`
- Query params : `traineeId` , corporate trainee id, `courseId` course id
- response body :
```
{
    "message": "Unauthorized Access!"
}
or 
//returns the user

```

13.requesting access to a course
- route : `users/requestAccess`
- request type : `POST`
- Query params : `traineeId` , corporate trainee id, `courseId` course id
- response body :
```
{
    "message": "Request sent!"
    
}
{
    "message": "Request Failed!"
    
}
or
```
14.a trainee reporting a problem
- route : `users/report`
- request type : `POST`
- Query params : `traineeId` , corporate trainee id, `courseId` course id, `type` , `problem`, `user`
- response body :
```
{
    "userId": "63557c5b4e231354f488416c",
    "user": "individualTrainee",
    "courseId": "635e6eed4526c341180ace80",
    "type": "technical",
    "problem": "access",
    "status": "pending",
    "username": "",
    "courseTitle": "",
    "new": true,
    "_id": "63b03516482126d099761096",
    "__v": 0
}
```
15.getting reports
- route : `users/getReport`
- request type : `GET`
- Query params : `userId`, id of the user
- response body :
```
[
    {
        "_id": "63b03516482126d099761096",
        "userId": "63557c5b4e231354f488416c",
        "user": "individualTrainee",
        "courseId": "635e6eed4526c341180ace80",
        "type": "technical",
        "problem": "access",
        "status": "pending",
        "username": "",
        "courseTitle": "",
        "new": true,
        "__v": 0
    }
]
```

## Corporate Trainee

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
```
{
    
    "id":"635ea3bc0fe0c0e99a739b45",
    "oldPassword":"ay7aga",
    "password":"ay7aga123"
}
```
- response body :
```
{
    "message": "Password Updated!"
}
or 
{
    "message": "Old Password is incorrect!"
}
```

6.registering for a course
- route : `corporateTrainee/registerForCourse`
- request type : `POST`
- request body :
```
{
    
    "id":"635ea3bc0fe0c0e99a739b45",
    "courseId":"6383981ec15e86c073a95355"
}
```
- response body :
```
{
    "message": "Registration Successful!"
}
or 
{
    "message": "Registration Unsuccessful!"
}
```

7.searching for a course
- route : `corporateTrainee/`
- request type : `GET`
- Query params : `searchInput`
- response body :
```
//courses matching the search crieteria
```


## Guest

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
```
{
   "username":"rory",
   "password":"123",
   "email":"rory@gmail.com",
   "firstName":"Rory",
   "lastName":"Gilmore",
   "gender":"female",
   "country":"USA",
   "wallet":"0",
   "enrolledCourses":[]

}
```
- response body :
```
{
    "username": "rory",
    "password": "123",
    "email": "rory@gmail.com",
    "firstName": "Rory",
    "lastName": "Gilmore",
    "gender": "female",
    "country": "USA",
    "wallet": 0,
    "enrolledCourses": [],
    "_id": "63b161e166456eed72f995db",
    "__v": 0
}
```

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

## Individual Trainee

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
- route : `individualTrainee/`
- request type :`GET`
- Query params : `searchInput`
- response body :
```
[
    {
        "_id": "6389adc4439a9c88fe47919d",
        "hours": 2,
        "rating": 0,
        "ratings": {
            "oneStar": 0,
            "twoStar": 0,
            "threeStar": 0,
            "fourStar": 0,
            "fiveStar": 0,
            "_id": "6389adc4439a9c88fe47919e"
        },
    //all other courses that match the search input
```

6. changing password 
- route : `individualTrainee/changePassword`
- request type : `PATCH`
- request body :
```
{
    "id":"637b561c5454ac7c96365a0b",
    "oldPassword":"rec2",
    "password":"rec3"
}
```
- response body :
```
{
    "message": "Password Updated!"
}
or 
{
    "message": "Old Password is incorrect!"
}
```

7.registering for a course 
- route : `individualTrainee/registerForCourse`
- request type : `POST`
- request body : `{ "id":"637fb2419b166ed7d5ac77d0", "courseId":"639daec6e727a37ea9493ed5"}`
- response body :`{ "message": "Registration Successful!"} or { "message": "Registration Unsuccessful!"} `

8.signup
- route : `individualTrainee/signup`
- request type : `POST`
- request body :
```
{
    "username": "batates",
    "password": "batata123",
    "email":"batates@gmail.com",
    "wallet": "0",
    "firstName":"batates",
    "lastName":"m7amara",
    "country":"egypt",
    "gender": "female",
    "enrolledCourses":[]
}
```
- response body :
```
{
    "username": "batates",
    "password": "batata123",
    "email": "batates@gmail.com",
    "firstName": "batates",
    "lastName": "m7amara",
    "gender": "female",
    "country": "egypt",
    "wallet": 0,
    "enrolledCourses": [],
    "_id": "63b0927f50418272a2563335",
    "__v": 0
}
```

9.registring for a course using a wallet 
- route : `individualTrainee/registerForCourseUsingWallet`
- request type : `POST`
- request body :  `{ "id":"637fb2419b166ed7d5ac77d0", "courseId":"639daec6e727a37ea9493ed5"}`
- response body : `{ "message": "Registration Successful!"} or { "message": "Registration Unsuccessful!"} `

10.requesting a refunds
- route : `individual/requestRefund`
- request type : `GET`
- Query params : `id` user id , `courseId` course id
- response body :
```
{
    "message": "You have completed more than 50% of the course. Therefore, a refund is not possible."

}
or
{
    "message": "Your request has been received. The course refund will be added to your wallet shortly."

}
or
{
    "message": "Request was already made and it is now pending."

}
or
{
    "message": "Something went wrong!"

}

```

## Instructor

1.getting a course the instructor teaches with a specific price 
- route : `instructor/:id`
- request type : `GET`
- Parameters : `id` instructor name 
- Query params : `price` course price 
- response body :
```
[
    {
        "_id": "638a50c0bbf6a7900cb2091a",
        "hours": 5,
        "rating": 3.5,
        "ratings": {
            "oneStar": 0,
            "twoStar": 0,
            "threeStar": 1,
            "fourStar": 1,
            "fiveStar": 0,
            "_id": "638a50c0bbf6a7900cb2091b"
        },
        "reviews": [],
        "title": "German",
        "price": 700,
        "subject": "Fremd Sprache",
        "instructorName": "zeina",
        "instructorId": "63557f56e3eb43d2942ad620",

        //All other courses given by that instructor
]
```

2.getting all courses given by instructor 
- route : `instructor/all/:id`
- request type : `GET`
- Parameters : `id` instructor name
- response body :
```
[
    {
        "_id": "638a50c0bbf6a7900cb2091a",
        "hours": 5,
        "rating": 3.5,
        "ratings": {
            "oneStar": 0,
            "twoStar": 0,
            "threeStar": 1,
            "fourStar": 1,
            "fiveStar": 0,
            "_id": "638a50c0bbf6a7900cb2091b"
        },
        "reviews": [],
        "title": "German",
        "price": 700,
        "subject": "Fremd Sprache",
        "instructorName": "zeina",
        "instructorId": "63557f56e3eb43d2942ad620",

        //All other courses given by that instructor
]
```

3.searching for a course given by the instructor by subject
- route : `instructor/subject/:id`
- request type : `GET`
- Parameters : `id` instructor name
- Query params : `subject` course subject
- response body :
```
[
    {
        "discount": 0,
        "_id": "6384e20fd26b508425abba1c",
        "hours": 3,
        "rating": 3.5,
        "ratings": {
            "oneStar": 1,
            "twoStar": 1,
            "threeStar": 1,
            "fourStar": 3,
            "fiveStar": 2,
            "_id": "6384e20fd26b508425abba1d"
        },
        "reviews": [
            "Great course!",
            "Awesome course!",
            "Nice course!"
        ],
        "title": "Physics 2",
        "price": 700,
        "subject": "Science",
        "instructorName": "taymoor.beblawi",
        "instructorId": "635ea4bb0fe0c0e99a739b4f",
    //All other courses given by the instructor with that subject    
```


4.searching for a courses
- route : `instructor/myCourses/:searchInput/:id`
- request type : `GET`
- Parameters : `id` instructor id , `searchInput`  
- response body :
```
[
    {
        "discount": 0,
        "_id": "6384e20fd26b508425abba1c",
        "hours": 3,
        "rating": 3.5,
        "ratings": {
            "oneStar": 1,
            "twoStar": 1,
            "threeStar": 1,
            "fourStar": 3,
            "fiveStar": 2,
            "_id": "6384e20fd26b508425abba1d"
        },
        "reviews": [
            "Great course!",
            "Awesome course!",
            "Nice course!"
        ],
        "title": "Physics 2",
        "price": 700,
        "subject": "Science",
        "instructorName": "taymoor.beblawi",
        "instructorId": "635ea4bb0fe0c0e99a739b4f",
    //All other courses given by the instructor with that search input    
```

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

6.upload a preview video 
- route : `instructor/upload`
- request type : `POST`
- Parameters : `courseId` , `url` video url, `shortDescription` video short description
- response body :
```
// returns the updated course 
```

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
- Parameters : `id` instructor id , `oldPassword` , `password`
- request body :
```
{
    "id": "635ea4bb0fe0c0e99a739b4f",
    "oldPassword":"7agga-Noosa",
    "password": "aloo"
}
```
- response body : 
```
{
    "message": "Password Updated!"
}
or 
{
    "message": "Old Password is incorrect!"
}
```
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
- Query params : `instructorId`
- response body :
```
{
    "rating": 5,
    "reviews": []
}
```

14.viewing money owed
- route : `instructorsss/viewMoneyOwed`
- request type : `GET`
- Query params : `instructorId`
- request body : 
```
{
   "percentage":"0.5"
}
```
- response body :
```
{
    "totalMoneyOwed": 3010
}
```

## My Courses

1.individual trainee watch video
- route : `myCourse/individualTrainee/watch`
- request type : `GET`
- Query params : `id`, individual trainee id, `courseId` course id, `videoId` video id
- response body :
```
{
    "message": "Unauthorized Access!"
}
or 
//returns the video url and short description
```
2.corporate trainee watch video
- route : `myCourse/corporateTrainee/watch`
- request type : `GET`
- Query params : `id`, individual trainee id, `courseId` course id, `videoId` video id
- response body :
```
{
    "message": "Unauthorized Access!"
}
or 
//returns the video url and short description
```
3.corporate trainee opening courses
- route : `myCourse/corporateTrainee/openCourse`
- request type : `GET`
- Query params : `id`, corporate trainee id, `courseId` course id
- response body :
```
{
    "message": "Course not found!"
}
or 
//returns the required course 
```

4.individual trainee opening courses
- route : `myCourse/individualTrainee/openCourse`
- request type : `GET`
- Query params : `id`, individual trainee id, `courseId` course id
- response body :
```
{
    "message": "Course not found!"
}
or 
//returns the required course 
```

5.individual trainee seeing videos
- route : `myCourse/individualTrainee/seen`
- request type : `PATCH`
- Query params : `id` individual trainee id
- request body :
```
{
    "courseId":"6383981ec15e86c073a95355",
    "videoId":"63839815c15e86c073a9531e"
}
```
- response body :
```
{
    "message": "Video already seen!"
}
or
//returns updated trainee data
```

6.corporate trainee seeing videos
- route : `myCourse/corporateTrainee/seen`
- request type : `PATCH`
- Query params : `id` corporate trainee id
- request body :
```
{
    "courseId":"6383981ec15e86c073a95355",
    "videoId":"63839815c15e86c073a9531e"
}
```
- response body :
```
{
    "message": "Video already seen!"
}
or
//returns updated trainee data
```

## Search

1.searching 
- route : `search/`
- request type : `GET`
- Query params : `searchInput` search crieteria
- response body :
```
[
    {
        "_id": "6389adc4439a9c88fe47919d",
        "hours": 2,
        "rating": 0,
        "ratings": {
            "oneStar": 0,
            "twoStar": 0,
            "threeStar": 0,
            "fourStar": 0,
            "fiveStar": 0,
            "_id": "6389adc4439a9c88fe47919e"
        },
        "reviews": [],
        "title": "physics 1",
        "price": 900,
        "subject": "science",
        "instructorName": "habiba",
        "instructorId": "63557c71702f8f2b2cd1b8e1",
        "subtitles": [
            {
                "title": "forces",
                "subtitleHours": "2",
                "video": {
                    "url": "https://www.youtube.com/watch?v=dHjWVlfNraM",
                    "shortDescription": "forces1",
                    "_id": "6389adc1439a9c88fe479185",
                    "__v": 0
                },
                "exercise": {
                    "questionOne": {
                        "question": "What is Newton's first law?",
                        "options": [
                            {
                                "id": 0,
                                "_id": "6389adc3439a9c88fe479188"
                            },
                            {
                                "id": 1,
                                "_id": "6389adc3439a9c88fe479189"
                            },
                            {
                                "id": 2,
                                "_id": "6389adc3439a9c88fe47918a"
                            },
                            {
                                "id": 3,
                                "_id": "6389adc3439a9c88fe47918b"
                            }
                        ]
                    },
                    "questionTwo": {
                        "question": "What is Newton's second law?",
                        "options": [
                            {
                                "id": 0,
                                "_id": "6389adc3439a9c88fe47918c"
                            },
                            {
                                "id": 1,
                                "_id": "6389adc3439a9c88fe47918d"
                            },
                            {
                                "id": 2,
                                "_id": "6389adc3439a9c88fe47918e"
                            },
                            {
                                "id": 3,
                                "_id": "6389adc3439a9c88fe47918f"
                            }
                        ]
                    },
                    "_id": "6389adc3439a9c88fe479187",
                    "__v": 0
                },
                "_id": "6389adc3439a9c88fe479191",
                "__v": 0
            }
        ],
        "shortSummary": "learn the basics of physics",
        "previewVideo": {
            "url": "https://www.youtube.com/watch?v=dHjWVlfNraM",
            "shortDescription": "physics is fun...... w da kedbbbbb",
            "_id": "6389adc4439a9c88fe4791aa"
        },
        "courseOutline": "forces, kinematics",
        "createdAt": "2022-12-02T07:48:20.109Z",
        "updatedAt": "2022-12-02T07:48:20.109Z",
        "__v": 0
    },
    {
        "discount": {
            "amount": 0,
            "endDate": null
        },
        "_id": "638f2400eb204e400fddd124",
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
       //All courses that match the search input
]
```
## View Courses

1.filter courses by subject
- route : `viewCourses/filterSubject`
- request type : `GET`
- Query params : `subject` course subject
- response body :
```
{
    "error": "no results"
}
or 
[
    {
        "discount": 0,
        "_id": "6383981ec15e86c073a95355",
        "hours": 4,
        "rating": 0,
        "reviews": [
            "good course"
        ],
        "title": "Computer Architecture",
        "price": 700,
        "subject": "Computer Science",
        "instructorName": "batata",
        "instructorId": "6360f8fd888437fde95bcad7",
        "subtitles": [
            {
                "title": "Types of microprocessor architectures",
                "videos": [
                    {
                        "url": "https://www.youtube.com/watch?v=QMFlF-9ji8Y",
                        "shortDescription": "Von neumann vs Harvard",
                        "_id": "63839815c15e86c073a9531e",
                        "__v": 0
                    },
                    {
                        "url": "https://www.youtube.com/watch?v=dcNk0urQsQM",
                        "shortDescription": "Microprocessor vs Microcontroller",
                        "_id": "6383981ac15e86c073a95321",
                        "__v": 0
                    }
                ],
                "exercise": {
                    "questionOne": {
                        "question": "What is Von Neumann",
                        "options": [
                            {
                                "id": 0,
                                "_id": "6383981bc15e86c073a95324"
                            },
                            {
                                "id": 1,
                                "_id": "6383981bc15e86c073a95325"
                            },
                            {
                                "id": 2,
                                "_id": "6383981bc15e86c073a95326"
                            },
                            {
                                "id": 3,
                                "_id": "6383981bc15e86c073a95327"
                            }
                        ]
                    },
                    "questionTwo": {
                        "question": "What is Harvard",
                        "options": [
                            {
                                "id": 0,
                                "_id": "6383981bc15e86c073a95328"
                            },
                            {
                                "id": 1,
                                "_id": "6383981bc15e86c073a95329"
                            },
                            {
                                "id": 2,
                                "_id": "6383981bc15e86c073a9532a"
                            },
                            {
                                "id": 3,
                                "_id": "6383981bc15e86c073a9532b"
                            }
                        ]
                    },
                    "_id": "6383981bc15e86c073a95323",
                    "__v": 0
                },
                "_id": "6383981cc15e86c073a9532d",
                "__v": 0
            },
            {
                "title": "Pipelining",
                "videos": [
                    {
                        "url": "https://www.youtube.com/watch?v=zPmfprtdzCE",
                        "shortDescription": "Pipeline Principles",
                        "_id": "6383981cc15e86c073a9533a",
                        "__v": 0
                    },
                    {
                        "url": "https://www.youtube.com/watch?v=KkwuSG1I-fE",
                        "shortDescription": "Pipeline Hazard",
                        "_id": "6383981cc15e86c073a9533c",
                        "__v": 0
                    }
                ],
                "exercise": {
                    "questionOne": {
                        "question": "What type of hazard is RAW hazard",
                        "options": [
                            {
                                "id": 0,
                                "_id": "6383981dc15e86c073a9533f"
                            },
                            {
                                "id": 1,
                                "_id": "6383981dc15e86c073a95340"
                            },
                            {
                                "id": 2,
                                "_id": "6383981dc15e86c073a95341"
                            },
                            {
                                "id": 3,
                                "_id": "6383981dc15e86c073a95342"
                            }
                        ]
                    },
                    "questionTwo": {
                        "question": "How many pipeline stages in MIPS 32 arch",
                        "options": [
                            {
                                "id": 0,
                                "_id": "6383981dc15e86c073a95343"
                            },
                            {
                                "id": 1,
                                "_id": "6383981dc15e86c073a95344"
                            },
                            {
                                "id": 2,
                                "_id": "6383981dc15e86c073a95345"
                            },
                            {
                                "id": 3,
                                "_id": "6383981dc15e86c073a95346"
                            }
                        ]
                    },
                    "_id": "6383981dc15e86c073a9533e",
                    "__v": 0
                },
                "_id": "6383981dc15e86c073a95348",
                "__v": 0
            }
        ],
        "shortSummary": "Students will learn the basic computer architecture and pipelining",
        "previewVideo": {
            "url": "",
            "shortDescription": "",
            "_id": "63b03f10cb0ac6b68a88fcb7"
        },
        "courseOutline": "",
        "createdAt": "2022-11-27T17:02:22.711Z",
        "updatedAt": "2022-12-31T12:35:46.437Z",
        "__v": 0
    }
]
```


2.filter courses by price
- route : `viewCourses/filterPrice`
- request type : `GET`
- Query params : `price` course price 
- response body :
```
{
    "error": "no results"
}
or 
//All courses with that price 
```

3.filter courses by rating
- route : `viewCourses/filterRating`
- request type : `GET`
- Query params : `rating` course rating 
- response body :
```
{
    "error": "no results"
}
or 
//All courses with that rating 
```


4.getting courses
- route : `viewCourses/`
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

5.getting prices
- route : `viewCourses/prices`
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
            "_id": "63b03fe5cb0ac6b68a88ff3c"
        },
        "courseOutline": ""
    },
//All other courses
```

6.viewing courses on hover
- route : `viewCourses/onHover`
- request type : `GET`
- Query params : `id` course id
- response body :
```
{
    "title": "Computer Architecture",
    "totalHours": 4,
    "price": 700,
    "discount": 0,
    "courseOutline": "",
    "previewVideo": {
        "url": "",
        "shortDescription": "",
        "_id": "63b04049cb0ac6b68a88ff50"
    },
    "subtitles": [
        {
            "title": "Types of microprocessor architectures",
            "exercise": {
                "questionOne": {
                    "question": "What is Von Neumann",
                    "options": [
                        {
                            "id": 0,
                            "_id": "6383981bc15e86c073a95324"
                        },
                        {
                            "id": 1,
                            "_id": "6383981bc15e86c073a95325"
                        },
                        {
                            "id": 2,
                            "_id": "6383981bc15e86c073a95326"
                        },
                        {
                            "id": 3,
                            "_id": "6383981bc15e86c073a95327"
                        }
                    ]
                },
                "questionTwo": {
                    "question": "What is Harvard",
                    "options": [
                        {
                            "id": 0,
                            "_id": "6383981bc15e86c073a95328"
                        },
                        {
                            "id": 1,
                            "_id": "6383981bc15e86c073a95329"
                        },
                        {
                            "id": 2,
                            "_id": "6383981bc15e86c073a9532a"
                        },
                        {
                            "id": 3,
                            "_id": "6383981bc15e86c073a9532b"
                        }
                    ]
                },
                "_id": "6383981bc15e86c073a95323",
                "__v": 0
            }
        },
        {
            "title": "Pipelining",
            "exercise": {
                "questionOne": {
                    "question": "What type of hazard is RAW hazard",
                    "options": [
                        {
                            "id": 0,
                            "_id": "6383981dc15e86c073a9533f"
                        },
                        {
                            "id": 1,
                            "_id": "6383981dc15e86c073a95340"
                        },
                        {
                            "id": 2,
                            "_id": "6383981dc15e86c073a95341"
                        },
                        {
                            "id": 3,
                            "_id": "6383981dc15e86c073a95342"
                        }
                    ]
                },
                "questionTwo": {
                    "question": "How many pipeline stages in MIPS 32 arch",
                    "options": [
                        {
                            "id": 0,
                            "_id": "6383981dc15e86c073a95343"
                        },
                        {
                            "id": 1,
                            "_id": "6383981dc15e86c073a95344"
                        },
                        {
                            "id": 2,
                            "_id": "6383981dc15e86c073a95345"
                        },
                        {
                            "id": 3,
                            "_id": "6383981dc15e86c073a95346"
                        }
                    ]
                },
                "_id": "6383981dc15e86c073a9533e",
                "__v": 0
            }
        }
    ]
}
```

## How to use
If you are a user who wants to view and register for online courses then you should sign up as an individual trainee.
If you're an instructor or a corporate trainee then the admin will sign you up with a username and a password that you can change later. However if you're not signed in 
you will not be able to register for courses. To get the project running, clone the repository and then cd to the file then open the terminal and type `cd backend` then type `nodemon app.js` to run the backend and to run the frontend `cd frontend` then type `npm start` and the browser will open your react app.

## Credits 
Our team (teen-titans): Haneen Mahmoud 49-2738, Doha Adel 49-7673, Roba Maged 49-4215, Habiba Yasser 49-3505, Zeina Yasser 49-3506 



















