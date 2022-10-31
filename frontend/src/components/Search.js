
import React, { useState } from 'react'


const Search = () => {
    let query
    const [searchResults, setSearchResults] = useState(null);
    const country = JSON.parse(localStorage.getItem('country'))
    const conversion_rate = country.conversion_rate
    const target_code = country.target_code
    const searchGet = async () => {
        query = document.getElementById("searchKey").value;
        const response = await fetch(`/guest/${query}`)
        const json = await response.json()
        if (response.ok) {
            setSearchResults(json)
        }
    }

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


                {searchResults &&
                    searchResults.map((course) => (
                        <div className="box" key={course.id}>
                            <p>{course.title}</p>
                            <p>Price: {course.price * conversion_rate} {target_code}</p>
                            <p>{course.instructorName}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Search