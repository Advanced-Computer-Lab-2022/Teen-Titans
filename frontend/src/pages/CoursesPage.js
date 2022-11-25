import Subtitle from '../components/subtitles';
import React, { useEffect, useState } from "react"
import axios from 'axios';
const CoursesPage = () => {

    const [course, setCourse] = useState(null)
    const country = JSON.parse(localStorage.getItem('country'))
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('courseId');
    console.log(courseId);
    const conversion_rate = country.conversion_rate
    const target_code = country.target_code
    useEffect(() => {
        const getDetails = async (userId) => {
            console.log(userId);
            await axios.get(`myCourse/openCourse?id=${courseId}`).then(
                (res) => {
                    const json = res.data
                    if (json)
                        setCourse(json)
                    console.log(json);
                }
            )
        }

        getDetails(courseId)
    }, [])

    return (
        <div className="courses-page">
            {courseId && course &&
                <div>
                    <h2>
                        {course.title}
                    </h2>
                    <h3>Instructor: {course.instructorName}</h3>
                    <h6><strong>course rating:</strong> {course.rating}</h6>
                    <h5><strong>course hours:</strong> {course.hours}</h5>
                    <div>
                        <h6 className='labels'>Subtitles:</h6>
                        {
                            course.subtitles && course.subtitles.map((subtitle) => (
                                <Subtitle subtitle={subtitle} />
                            ))
                        }
                    </div>
                </div>}
        </div>

    )
}

export default CoursesPage