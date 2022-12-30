import React, { useState } from 'react'
import { useEffect } from 'react';
import DefinePromotion from './InstructorDefinePromotion';
const PriceFilter = () => {

    const [filterResults, setfilterResults] = useState(null);
    //   const [subjectfilterResults, setsubjectfilterResults] = useState(null);
    const country = JSON.parse(localStorage.getItem('country'))
    const conversion_rate = country.conversion_rate
    const target_code = country.target_code


   




    const fetchCourses = async () => {
        if (document.getElementById('instructorName').value) {
            const response = await fetch(`/instructor/all/${document.getElementById('instructorName').value}`);
            const json = await response.json()
            if (response.ok) {
                setfilterResults(json)
                console.log(json)
            }
        }
    };
    const onfilterChange = async (event) => {

        if (event.target.value === "two") {
            let price = 200
            const response = await fetch(`/instructor/${document.getElementById('instructorName').value}/?price=${price}`);
            const json = await response.json()

            if (response.ok) {
                setfilterResults(json)
                console.log(json)
            }
        }

        else if (event.target.value === "three") {
            let price = 300
            const response = await fetch(`/instructor/${document.getElementById('instructorName').value}/?price=${price}`);
            const json = await response.json()


            if (response.ok) {
                setfilterResults(json)
                console.log(json)
            }
        }
        else {
            const response = await fetch(`/instructor/all/${document.getElementById('instructorName').value}`);
            const json = await response.json()
            if (response.ok) {
                setfilterResults(json)
                console.log(json)
            }
        }
    }
    const onfilterChange2 = async (event) => {
        if (event.target.value === "all") {
            const response = await fetch(`/instructor/all${document.getElementById('instructorName').value}`);
            const json = await response.json()
            if (response.ok) {
                setfilterResults(json)
                console.log(json)
            }
        }
        else {
            const response = await fetch(`/instructor/subject/${document.getElementById('instructorName').value}/?subject=${event.target.value}`);
            const json = await response.json()
            if (response.ok) {
                setfilterResults(json)
                console.log(json)
            }
        }
    }
    return (
        <div className="col-12 mb-5">
            <label>Please enter your username:</label>
            <input id='instructorName'></input>
            <button type='submit' onClick={() => fetchCourses()}>Submit</button>
            <div className="mb-3 col-4 mx-auto text-center">
                <b>Filter by Price:</b>
                <select name="price" onChange={onfilterChange}>
                    <option value="all">All</option>
                    <option value="two">200 USD</option>
                    <option value="three">300 USD</option>
                </select>
            </div>
            <div className="mb-3 col-4 mx-auto text-center">
                <b>Filter by Subject:</b>
                <select name="price" onChange={onfilterChange2}>
                    <option value="all">All</option>
                    <option value="bio">bio</option>
                    <option value="chem">chem</option>
                    <option value="calculus">calculus</option>

                </select>
            </div>
            {filterResults &&
                filterResults.map((course) => (
                    <div className="box" key={course.id}>
                        <b>TITLE:</b>
                        <p>{course.title}</p>
                        <b>PRICE:</b>
                        <p>{course.price * conversion_rate} {target_code}</p>
                        <b> InstructorNAME:</b>
                        <p>{course.instructorName}</p>
                        <b> SUBJECT:</b>
                        <p>{course.subject}</p>
                        <b> RATING:</b>
                        <p>{course.rating}</p>
                        <b> REVIEWS:</b>
                        {
                            course.reviews.map((review) => (
                                <p>review</p>
                            ))
                        }  
                        <button onClick={() => window.location.href = `/instructorcourse?courseId=${course._id}`}>View Details</button>
                        {/* <b>define promotion:</b>
                        <DefinePromotion courseId = {course._id}/>  */}
                        <button onClick={() => window.location.href = `/discount?courseId=${course._id}`}>Define promotion</button>
                    </div>
                ))
            }
        </div>
    )
}
export default PriceFilter;