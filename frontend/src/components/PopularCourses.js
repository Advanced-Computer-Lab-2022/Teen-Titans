import Details from "./Details"
import DisplayPreviewVideo from "./DisplayPreviewVideo"
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css';
import React, { useEffect, useState } from "react"
import axios from 'axios';

const PopularCourses = ({  }) => {
    const [course, setCourseData] = useState(null)
    const user = localStorage.getItem('user')
    const country = JSON.parse(localStorage.getItem('country'))
    const conversion_rate = country.conversion_rate
    const target_code = country.target_code
    useEffect(() => {
        const fetchCourses = async () => {
            const response = await fetch(`${user}/viewPopularCourses`)
            const json = await response.json()

            if (response.ok) {
                setCourseData(json)
            }
        }
        fetchCourses()
    }, [])
   
    return (
        <div className="course-price" >
            <h2>Popular Now!</h2>
            <h4>
                {course.title}
            </h4>
            <p><strong>Price:</strong> {course.price * conversion_rate} {target_code}</p>
            <p><strong>course rating:</strong> {course.rating}</p>
            <p><strong>course hours:</strong> {course.hours}</p>
            <p><strong>course outline:</strong> {course.courseOutline}</p>
            <button className='videos' onClick={() => window.location.href = `/watchVideo?courseId=${course._id}`}>watch a preview video</button>

           
           
             

            
        </div>

       
    )
}

export default PopularCourses