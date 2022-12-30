import React, { useEffect, useState } from "react"
import Details from "./Details"
import axios from 'axios';
import CoursesPage from "../pages/CoursesPage";
import { Link, useNavigate } from 'react-router-dom';
import SideBar from "./SideBar/SideBar";





const TraineeViewCourses = ({ id }) => {
    // console.log(id);
    const [courseData, setCourseData] = useState(null)
    const [courseId, setCourseId] = useState(null)
    const userId = localStorage.getItem('id')
    const user = localStorage.getItem('user')
    const country = JSON.parse(localStorage.getItem('country'))
    const conversion_rate = country.conversion_rate
    const target_code = country.target_code
    const navigate = useNavigate();
    // const toexam = (exercise) => {
    //     console.log(exercise);
    //     // navigate('/exercise', { state: exercise });
    // }
    useEffect(() => {
        const getDetails = async () => {
            await axios.get(`users/${user}Courses?id=${id}`).then(
                (res) => {
                    const json = res.data
                    if (json)
                        setCourseData(json)
                    // console.log(json);
                }
            )
        }
        getDetails()
    }, [])

    return (
        <div className="row">
            <div className="col-2">
                <SideBar />
            </div>
            <div className="col-10">
                <div className="content">
                    {id &&
                        <div className="trainee-courses">
                            {/* <div className='courses'> */}
                            <h1>My Courses</h1>
                            {courseData &&
                                courseData.map((course) => (
                                    <div className="display-courses" key={course.id}>
                                        <h4 style={{ color: "var(--taupe)" }}>{course.title}</h4>
                                        <p>Price: {(course.price * conversion_rate).toFixed(2)} {target_code}</p>
                                        <p>Instructor: {course.instructorName}</p>
                                        <button className="display-courses-btn" onClick={() => window.location.href = `/course?user=${user}&courseId=${course._id}&userId=${userId}`}>View Details</button>
                                        {/* <button className="display-courses-btn" onClick={() => { toexam(course.exercise) }}>Exam</button> */}
                                    </div>
                                ))}
                            {/* </div> */}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default TraineeViewCourses