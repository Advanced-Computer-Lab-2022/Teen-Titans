import Details from "./Details"
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css';
import React, { useEffect, useState } from "react"
import axios from 'axios';
// import CorporateTraineeSearch from "./CorporateTraineeSearch"


const CoursePrice = ({ course }) => {
    const [courseData, setCourseData] = useState(null)
    const country = JSON.parse(localStorage.getItem('country'))
    const conversion_rate = country.conversion_rate
    const target_code = country.target_code
    const userId = localStorage.getItem('id')
    const user = localStorage.getItem('user')
    const [showRequest, setshowRequest] = useState(false)
    const [ishidden, setishidden] = useState(false)
    const [sent, setSent] = useState(false)
    const [open, setOpen] = useState(false)


  useEffect(() => {
    get()
       
    }, [])

const get = () => {
    if (user === "corporateTrainee") {
        setishidden(true)
        console.log("ishidden",ishidden);
        console.log(user,userId,"courseprice");
   
    }
}

    const getDetails = async (id) => {
        await axios.get(`viewCourses/onHover?id=${id}`).then(
            (res) => {
                const json = res.data
                // console.log(json);
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

    
    const checkAccess = async (courseId) => {
        console.log("course id:",courseId);
        console.log(user,"trainee id:",userId);
      
       const response = await fetch(`http://localhost:5000/users/checkAccess?courseId=${courseId}&traineeId=${userId}`)
        console.log("after fetch");
console.log("response",response);
        if (response.ok) {
            setshowRequest(false)
            console.log("response ok");
            setOpen(false)
        }
        else
            setshowRequest(true)
      
    }
    

    const requestAccess = async (courseId) => {
        const response = await fetch(`http://localhost:5000/users/requestAccess?courseId=${courseId}&traineeId=${userId}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'  
    }},)
    alert("Request sent successfully")
    setSent(true)
    setOpen(true)

   
    }

    return (
        <div className="course-price" id={course._id} onMouseEnter={handleHover} onClick={() => checkAccess(course._id)}>
            <h4>
                {course.title}
            </h4>
            <p><strong>Price:</strong> {course.price * conversion_rate} {target_code}</p>
            <p><strong>course rating:</strong> {course.rating}</p>
            <p><strong>course hours:</strong> {course.hours}</p>
            {
                courseData &&
                <div className="my-container">
                    <Tippy content={<Details course={courseData} key={courseData.id}></Details>} placement='left' theme="light">
                        <button>Details</button>
                    </Tippy>
                    {ishidden ?
                    <div>
                    {showRequest ?
                                <button disabled={sent } onClick={() => requestAccess(course._id)}>Request Access</button>
                                  :   <button disabled={open || !checkAccess(course._id) }onClick={() => window.location.href = `/course?user=${user}&courseId=${course._id}&userId=${userId}`}>Open Course</button>
                                }
                                </div>
                                : null}

                </div>
            }
        </div>
    )
}

export default CoursePrice