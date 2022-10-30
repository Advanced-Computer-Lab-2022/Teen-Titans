import Details from "./Details"
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import React, { useEffect, useState } from "react"
const CoursePrice = ({ course }) => {
    const [id, setId] = useState('')
    const handleHover = event => {
        console.log(event.currentTarget.id);
        setId(event.currentTarget.id)
    }
    return (
        <div className="course-price" id={course._id} onMouseEnter={handleHover}>
            <h4>
                {course.title}
            </h4>
            <p><strong>Price:</strong> {course.price}</p>
            <Tippy content={
                <Details courseID={id} />
            } placement="left">
                <button id={course._id}>Details</button>
            </Tippy>
        </div>
    )
}

export default CoursePrice