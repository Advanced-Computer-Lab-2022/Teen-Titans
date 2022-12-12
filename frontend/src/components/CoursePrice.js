import Details from "./Details"
import DisplayPreviewVideo from "./DisplayPreviewVideo"
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css';
import React, { useEffect, useState } from "react"
import axios from 'axios';

const CoursePrice = ({ course }) => {
    const [courseData, setCourseData] = useState(null)
    const country = JSON.parse(localStorage.getItem('country'))
    const conversion_rate = country.conversion_rate
    const target_code = country.target_code
    const getDetails = async (id) => {
        await axios.get(`viewCourses/onHover?id=${id}`).then(
            (res) => {
                const json = res.data
                console.log(json);
                if (json) {
                    setCourseData(json)
                    // console.log(courseData);
                }
            }
        )
    }
    const handleHover = event => {
        getDetails(event.currentTarget.id)
    }
    return (
        <div className="course-price" id={course._id} onMouseEnter={handleHover}>
            <h4>
                {course.title}
            </h4>
            <p><strong>Price:</strong> {course.price * conversion_rate} {target_code}</p>
            <p><strong>course rating:</strong> {course.rating}</p>
            <p><strong>course hours:</strong> {course.hours}</p>
            <p><strong>course outline:</strong> {course.courseOutline}</p>
            <button className='videos' onClick={() => window.location.href = `/watchVideo?courseId=${course._id}`}>watch a preview video</button>

            {
                <div className="my-container">
                    <Tippy content={<Details course={courseData}></Details>} placement='left' theme="light">
                        <button>Details</button>
                        
                    </Tippy>
                   
                </div>

              
            }
            {
                <div> 

                    {/* <DisplayPreviewVideo courseId={course._id}>  */}
                        {/* <DisplayPreviewVideo courseId={course._id}></DisplayPreviewVideo> */}
                     {/* </DisplayPreviewVideo>  */}
                </div>
            }
            
             

            
        </div>

       
    )
}

export default CoursePrice