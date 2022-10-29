import React, { useEffect, useState } from 'react'

const Details = ({ course }) => {
    const [courseData, setCourseData] = useState(null)
    useEffect(() => {
        const getDetails = async () => {
            const id = course._id;
            const response = await fetch(`/viewCourses/${id}`)
            const json = await response.json()
            if (response.ok) {
                setCourseData(json)
            }
        }
        getDetails()
    }, [])
    return (
        <div>
            {courseData &&
                courseData.map((courseData) => (
                    <div className="box" key={courseData.id}>
                        <div>
                            <h2>courseData.title</h2>
                            <h3>
                                <span>courseData.price</span>
                                <span>courseData.discount</span>
                            </h3>
                            <h3>courseData.totalHours</h3>
                            <h3>
                                <span>courseData.subtitles.videos.shortDescription</span>
                                <span>courseData.subtitles.hours</span>
                                <span>courseData.subtitles.exercises</span>
                            </h3>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Details