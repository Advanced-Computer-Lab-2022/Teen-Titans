import Details from "./Details"
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css';
import React, { useEffect, useState } from "react"



const CoursePrice = ({ course }) => {
    // const [id, setId] = useState('')
    const [courseData, setCourseData] = useState(null)
    const getDetails = async (id) => {
        const response = await fetch(`viewCourses/${id}`)
        const json = await response.json()
        if (response.ok) {
            setCourseData(json)
        }
    }
    const handleHover = event => {
        // setId(event.currentTarget.id)
        getDetails(event.currentTarget.id)
    }
    return (
        <div className="course-price" id={course._id} onMouseEnter={handleHover}>
            <h4>
                {course.title}
            </h4>
            <p><strong>Price:</strong> {course.price}</p>
            {
                courseData &&
                <div className="my-container">
                    <Tippy content={<Details course={courseData}></Details>} placement='left' theme="light">
                        <button>Details</button>
                    </Tippy>
                </div>
            }
        </div>
    )
}

export default CoursePrice