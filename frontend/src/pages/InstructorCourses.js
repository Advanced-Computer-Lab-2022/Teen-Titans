import React from 'react'
// import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

const InstructorCourses = () => {
    const country = JSON.parse(localStorage.getItem('country'))
    const conversion_rate = country.conversion_rate
    const target_code = country.target_code
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('courseId');
    const [url, seturl] = useState('');
    const [shortDescription, setshortDescription] = useState('');
    console.log("courseId" + courseId);
    const [course, setCourse] = useState(null)
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const course = { courseId, url, shortDescription }

        const response = await fetch(`http://localhost:5000/instructor/upload`, {
            method: 'POST',
            body: JSON.stringify(course),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()


        if (!response.ok) {
            setError(json.error)
        }

        if (response.ok) {

            console.log('preview video added', json)
        }
    }




    useEffect(() => {
        const getDetails = async () => {

            await axios.get(`http://localhost:5000/myCourse/openCourse?id=${courseId}`).then(
                (res) => {
                    const json = res.data
                    if (json)
                        setCourse(json)
                    console.log(json);
                }
            )
        }

        getDetails()
    }, [])

    return (
        <div>
            {
                course &&
                <div className='onHover-details'>
                    <h5>{course.title}</h5>
                    <h6 className='faded'>{course.hours} total hours</h6>
                    <h6>
                        <span className='labels'>Price: </span>
                        <span>{course.price * conversion_rate} {target_code}</span>

                    </h6>
                    <h6>
                        <span className='labels'>Discount: </span>
                        <span>{course.discount} %</span>
                    </h6>
                    <div>
                        <h6 className='labels'>Subtitles:</h6>
                        {
                            course.subtitles && course.subtitles.map((subtitle) => (
                                // <Subtitle subtitle={subtitle} />
                                <h6>
                                    {subtitle.title}
                                </h6>

                            ))
                        }
                    </div>


                    <div>
                        <span className='labels'>videURL: </span>
                        <span>{course?.previewVideo?.url} </span>
                        <br></br>
                        <span className='labels'>video shortDescription: </span>
                        <span>{course?.previewVideo?.shortDescription} </span>
                    </div>
                    <div>

                    </div>
                </div>
            }
        </div>
    )
}
export default InstructorCourses
