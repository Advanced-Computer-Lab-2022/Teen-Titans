import Subtitle from '../components/subtitles';
import React, { useEffect, useState } from "react"
import axios from 'axios';
import AppRate from '../components/Rate';
const CoursesPage = () => {

    const [course, setCourse] = useState(null)
    const country = JSON.parse(localStorage.getItem('country'))
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('courseId');
    // console.log(courseId);
    const conversion_rate = country.conversion_rate
    const target_code = country.target_code
    useEffect(() => {
        const getDetails = async (userId) => {
            // console.log(userId);
            await axios.get(`myCourse/openCourse?id=${courseId}`).then(
                (res) => {
                    const json = res.data
                    if (json)
                        setCourse(json)
                    // console.log(json.instructorId);
                }
            )
        }

        getDetails(courseId)
    }, [])

    return (
        <div className="courses-page">
            {courseId && course &&
                <div className='d-flex flex-column justify-content-start align-items-start'>
                    <h1>
                        {course.title}
                    </h1>
                    <h4>Instructor: {course.instructorName}</h4>
                    <h6>course rating: {course.rating}</h6>
                    <h6>course hours: {course.hours}</h6>
                    <div className='d-flex flex-column justify-content-start align-items-start'>
                        <h4 className='subtitles'>Subtitles:</h4>
                        {
                            course.subtitles && course.subtitles.map((subtitle) => (
                                <Subtitle subtitle={subtitle} courseId={course._id} />
                            ))
                        }
                    </div>
                    <AppRate courseId={courseId} instructorId={course.instructorId} />
                </div>
            }
        </div>

    )
}

export default CoursesPage