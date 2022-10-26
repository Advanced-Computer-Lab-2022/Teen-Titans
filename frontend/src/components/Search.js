// import { Link } from 'react-router-dom'

// // import { useEffect, useState } from "react";
// const Navbar = () => {
//     const search = async (e) => {
//         const response = await fetch(`http://localhost:8000/search/${e}`)
//     }

//     return (
//         <header>
//             <div className="container">
//                 <Link to="/homePage">
//                     <h1>OnlineSchool</h1>
//                     <input type="text" placeholder='search' id='searchKeyWord'></input>
//                     <button type='submit'>Search</button>
//                 </Link>
//             </div>
//         </header>
//     )
// }

// export default Navbar


import axios from 'axios';
import React, { useState, useEffect } from 'react'


const Search = () => {
    const { courses, setCourses } = useState(null);
    const searchGet = async () => {
        console.log('hi');
        let query = document.getElementById("searchKey").value;
        await fetch(`http://localhost:8000/search/${query}`)
            .then((response) => {
                console.log(response);
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="col-12 mb-5">
            <div className="mb-3 col-4 mx-auto text-center">
                <label className="form-label h4">Search</label>
                <input
                    type="text"
                    className="from-control"
                    id='searchKey'
                />
                <button id='searchButton' onClick={() => searchGet()}>Search</button>

                {/* {courses &&
                    courses.filter(course => {
                        if (query === '') {
                            return course;
                        } else if (course.title.toLowerCase().includes(query.toLowerCase())) {
                            return course;
                        }
                    }).map((course, index) => (
                        <div className="box" key={index}>
                            <p>{course.title}</p>
                            <p>{course.price}</p>
                            <p>{course.instructorName}</p>
                        </div>
                    ))
                } */}
            </div>
        </div>
    )
}

export default Search