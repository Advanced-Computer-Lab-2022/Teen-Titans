import React, { useEffect, useState } from 'react'

const Details = ({ courseID }) => {
    const id = courseID;
    // console.log(id);
    const [courseData, setCourseData] = useState(null)
    useEffect(() => {
        const getDetails = async () => {

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
            {
                courseData &&
                <div className="box" key={courseData.id}>
                    <div>
                        <h6>{courseData.title}</h6>
                        <h6>
                            <span>Price: {courseData.price} EGP</span><br></br>
                            <span>Discount: {courseData.discount} %</span>
                        </h6>
                        <h6>{courseData.totalHours} hours</h6>
                        {/* <h6>
                            <span>{courseData.subtitles}</span>
                        </h6> */}
                    </div>
                </div>
            }
        </div>
    )
}

export default Details