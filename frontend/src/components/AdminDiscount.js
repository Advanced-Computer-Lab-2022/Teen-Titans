import Details from "./Details"
import DisplayPreviewVideo from "./DisplayPreviewVideo"
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css';
import React, { useEffect, useState } from "react"
import axios from 'axios';
import CourseDetails from "./CourseDetailsForAdmin";

const AdminDiscount = ({  }) => {
    const [courses, setCourseData] = useState(null)
    const user = localStorage.getItem('user')
    const country = JSON.parse(localStorage.getItem('country'))
    const conversion_rate = country.conversion_rate
    const target_code = country.target_code
    useEffect(() => {
        const getDetails = async () => {
            // console.log(userId);
            await axios.get('/viewCourses').then(
                (res) => {
                    const json = res.data
                    if (json)
                    setCourseData(json)
                    console.log(json.title);
                }
            )
        }

       
        getDetails()
    }, [])
   
    return(
        <div className='view'>
            <div className='courses'>
                {courses && courses.map((course)=>(
                    <CourseDetails key={course._id} course= {course}/>
                    
                ))}
                
            </div>
        </div>
        
    )
}

export default AdminDiscount