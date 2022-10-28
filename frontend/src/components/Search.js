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

import React, { useState, useEffect } from 'react'


const Search = () => {
    let query
    const [searchResults, setSearchResults] = useState(null);
    const searchGet = async () => {
        query = document.getElementById("searchKey").value;
        const response = await fetch(`http://localhost:8000/guest/${query}`)
        const json = await response.json()
        if (response.ok) {
            setSearchResults(json)
        }
    }
    // useEffect(() => {

    // }, [query])
    return (
        <div className="col-12 mb-5">
            <div className="mb-3 col-4 mx-auto text-center">
                <input
                    type="text"
                    className="from-control mt-4"
                    id='searchKey'
                    placeholder='search'
                />
                <button id='searchButton' onClick={() => searchGet()}>Search</button>

                {/* <searchContext.Provider value={{ courses, setCourses }}></searchContext.Provider> */}
                {searchResults &&
                    searchResults.map((course) => (
                        <div className="box" key={course.id}>
                            <p>{course.title}</p>
                            <p>{course.price}</p>
                            <p>{course.instructorName}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Search