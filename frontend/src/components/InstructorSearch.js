import React from "react";
import { useState } from 'react';

const InstructorSearch = ({ setInstructorSearch }) => {
    const country = JSON.parse(localStorage.getItem('country'))
    const conversion_rate = country.conversion_rate
    const target_code = country.target_code
    const [message, setMessage] = useState('')
    const [searchResults, setSearchResults] = useState(null);
    const inputInstructorId = async () => {
        if (document.getElementById("ID").value === "") {
            setMessage("Please enter your Id")
        }
        else {
            const response = await fetch(`/instructor/myCourses/${document.getElementById("CourseTitle").value.toString()}/${document.getElementById("ID").value.toString()}`)
            if (response.ok) {
                setSearchResults(await response.json())
                console.log(searchResults)
            }
            else {
                setMessage("Invalid Id")
            }
        }
    }


    return (
        <div>
            <h2>Search Course</h2>
            <div className='d-flex flex-column'>

                <label>Enter your ID:</label>
                <input id='ID'></input>
                <label>Search for a Course:</label>
                <input id='CourseTitle'></input>
                <button onClick={() => inputInstructorId()}>search course</button>
                <span>{message}</span>
            </div>
            {
                searchResults && searchResults.map((course) => (
                    <div className="box" key={course.id}>
                        <p>{course.title}</p>
                        <p>Price: {course.price * conversion_rate} {target_code}</p>
                        <p>Instructor: {course.instructorName}</p>
                    </div>
                ))
            }
        </div>


    );
}
export default InstructorSearch;

