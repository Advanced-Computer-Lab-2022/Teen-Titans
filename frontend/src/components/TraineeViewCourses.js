import React, { useEffect, useState } from "react"
import Details from "./Details"
import axios from 'axios';
import CoursesPage from "../pages/CoursesPage";
import { Link, useNavigate } from 'react-router-dom';





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
    const toexam = () => {
        navigate('/exercise', { state: courseData.courseExam });
    }
    useEffect(() => {
        const getDetails = async () => {
            console.log(user + " " + userId);
            console.log("hi");
            await axios.get(`users/${user}Courses?id=${id}`).then(
                (res) => {
                    const json = res.data
                    if (json)
                        setCourseData(json)
                    console.log("course data " + courseData);
                }
            )
        }
        getDetails()
    }, [])

    return (
        <div className="content">
            {id &&
                <div className="trainee-courses">
                    {/* <div className='courses'> */}
                    {courseData &&
                        courseData.map((course) => (
                            <div className="display-courses" key={course.id}>
                                <h4>{course.title}</h4>
                                <p>Price: {course.price * conversion_rate} {target_code}</p>
                                <p>Instructor: {course.instructorName}</p>
                                <button onClick={() => window.location.href = `/course?user=${user}&courseId=${course._id}&userId=${userId}`}>View Details</button>
                                <button onClick={() => { toexam() }} className='subtitles-faded'>Exam</button>
                            </div>
                        ))}
                    {/* </div> */}
                </div>
            }
        </div >
    )
}

export default TraineeViewCourses