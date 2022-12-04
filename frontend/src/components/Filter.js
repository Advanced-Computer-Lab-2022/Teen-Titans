import React, { useState } from 'react'
import { useEffect } from 'react';
const Filter = () => {

    const [filterResults, setfilterResults] = useState(null);

    const onfilterChange = async (event) => {

        if (event.target.value === "two") {
            let price = 200
            const response = await fetch(`/viewCourses/filterPrice/?price=${price}`);
            const json = await response.json()


            if (response.ok) {
                setfilterResults(json)
                console.log(json)
            }
        }

        else if (event.target.value === "three") {
            let price = 300
            const response = await fetch(`/viewCourses/filterPrice/?price=${price}`);
            const json = await response.json()


            if (response.ok) {
                setfilterResults(json)
                console.log(json)
            }
        }
        else if (event.target.value === "zero") {
            let price = 0
            const response = await fetch(`/viewCourses/filterPrice/?price=${price}`);
            const json = await response.json()


            if (response.ok) {
                setfilterResults(json)
                console.log(json)
            }
        }


    }
    const onfilterChange2 = async (event) => {



        const response = await fetch(`/viewCourses/filterSubject/?subject=${event.target.value}`);
        const json = await response.json()


        if (response.ok) {
            setfilterResults(json)
            console.log(json)
        }






    }
    const onfilterChange3 = async (event) => {
        if (event.target.value === "two") {
            let rating = 2
            const response = await fetch(`/viewCourses/filterRating/?rating=${rating}`);
            const json = await response.json()


            if (response.ok) {
                setfilterResults(json)
                console.log(json)
            }
        }

        else if (event.target.value === "four") {
            let rating = 4
            const response = await fetch(`/viewCourses/filterRating/?rating=${rating}`);
            const json = await response.json()


            if (response.ok) {
                setfilterResults(json)
                console.log(json)
            }
        }
        else if (event.target.value === "zero") {
            let rating = 0
            const response = await fetch(`/viewCourses/filterRating/?rating=${rating}`);
            const json = await response.json()


            if (response.ok) {
                setfilterResults(json)
                console.log(json)
            }
        }
    }




    return (
        <div className="col-12 mb-5">
            <div className="mb-3 col-4 mx-auto text-center">
                <b>Filter by Price less than or equal:</b>
                <select name="price" onChange={onfilterChange}>
                    <option value="zero">0</option>
                    <option value="two">200</option>
                    <option value="three">300</option>
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



            <div className="mb-3 col-4 mx-auto text-center">
                <b>Filter by Rating less than or equal:</b>
                <select name="rating" onChange={onfilterChange3}>
                    <option value="two">2.0</option>
                    <option value="four">4.0</option>
                    <option value="zero">0.0</option>


                </select>




            </div>





            {filterResults &&
                filterResults.map((course) => (
                    <div className="box" key={course.id}>
                        <b>TITLE:</b>
                        <p>{course.title}</p>
                        <b>PRICE:</b>
                        <p>{course.price}</p>
                        <b> InstructorNAME:</b>
                        <p>{course.instructorName}</p>
                        <b> SUBJECT:</b>
                        <p>{course.subject}</p>
                        <b> Rating:</b>
                        <p>{course.rating}</p>


                    </div>
                ))
            }




        </div>


    )

}



export default Filter;