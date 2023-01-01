import Subtitle from '../components/subtitles';
import React, { useEffect, useState, ReactPropTypes } from "react"
import ReactPlayer from 'react-player/youtube'
import axios from 'axios';
import AppRate from '../components/Rate';
import "bootstrap/js/src/collapse.js";
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icon from 'react-bootstrap-icons';
import Notes from '../components/Notes';
const InstructorCoursesPage = () => {

    const [course, setCourse] = useState(null)
    const country = JSON.parse(localStorage.getItem('country'))
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('courseId');
    const userId = params.get('userId');
    const user = params.get('user')

    const [video, setVideo] = useState(null)
    const [videoUrl, setVideoUrl] = useState("")
    const [percentage, setPercentage] = useState(0)

    const watchedVideo = async () => {
        if (video) {
            console.log(video);
            await axios.patch(`myCourse/${user}/seen?id=${userId}`, {
                courseId: courseId,
                videoId: video
            }).then(
                (res) => {
                    const json = res.data
                    if (json)
                        setPercentage(json.percentageComplete)
                }
            )
        }
    }
    const navigate = useNavigate();
    // const toexercise = (subtitle) => {
    //     navigate('/exercise', { state: subtitle.exercise });
    // }
    useEffect(() => {
        const getDetails = async () => {
            await axios.get(`myCourse/${user}/openCourse?id=${userId}&courseId=${courseId}`).then(
                (res) => {
                    // console.log("ho");
                    // console.log(user);
                    // console.log(userId);
                    // console.log(courseId);
                    const json = res.data
                    if (json) {
                        setCourse(json)
                        // setPercentage(json.percentageComplete)
                        console.log(json,"json");
                    }
                }
            )
           
        }
        getDetails()
    }, [])

    return (
        <div>
            {courseId && course &&
                <div>
                    <div className='d-flex justify-content-between'>
                        <h1>
                            {course?.title}
                        </h1>
                        <Icon.GearFill style={{ cursor: "pointer" }} size={30} onClick={() => window.location.href = `/courseSettings?userId=${userId}&courseId=${courseId}&user=${user}`} />
                    </div>
                    <div className='row row-cols-2'>
                        <div className='col-8 course-details1'>

                            <div className='player-wrapper'>
                                <ReactPlayer
                                    sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation allow-presentation"
                                    className='react-player'
                                    allowFullScreen
                                    url={videoUrl || course?.previewVideo.url}
                                    width='100%'
                                    // height='100%'
                                    controls
                                    autoPlay={false}
                                    onEnded={() => {
                                        if (video)
                                            watchedVideo()
                                    }}
                                />
                            </div>
                            <div className='d-flex'>
                                <div className='d-flex flex-column'>
                                    <p>
                                        <a className="btn" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" style={{backgroundColor:"Teal"}}>
                                            Course Info
                                        </a>
                                    </p>
                                    <div className="collapse" id="collapseExample">
                                        <div className="card card-body">
                                            <h4>Instructor: {course?.instructorName}</h4>
                                            <h6>course rating: {course?.rating}</h6>
                                            <h6>course hours: {course?.hours}</h6>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className='d-flex flex-column'>
                                    <p>
                                        <a className="btn" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">
                                            Add Rating
                                        </a>
                                    </p>
                                    <div className="collapse" id="collapseExample2">
                                        <div className="card card-body">
                                            <AppRate courseId={courseId} instructorId={course?.course?.instructorId} />
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className='d-flex flex-column'>
                                    <p>
                                        <a className="btn" data-bs-toggle="collapse" href="#notes" role="button" aria-expanded="false" aria-controls="notes">
                                            Write Notes
                                        </a>
                                    </p>
                                    <div className="collapse" id="notes">
                                        <div className="card card-body">
                                            <Notes />
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className='col-4'>
                            {/* <div> */}
                                {/* <div className='d-flex justify-content-start'>Percentage of the course completed:
                                </div> */}
                                {/* <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ backgroundColor: "#1aac83", width: `${course.percentageComplete}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{course.percentageComplete}%</div>
                                    {
                                        course.percentageComplete === 100
                                    }
                                </div> */}
                            {/* </div> */}
                            {
                                course.subtitles && course.subtitles.map((subtitle) => (
                                    <div>
                                        <div className="onHover-details d-flex flex-column justify-content-start align-items-start">
                                            <h3>{subtitle.title}</h3>
                                            <h6 className='subtitles-faded'>{subtitle.subtitleHours} hours</h6>
                                            {
                                                subtitle.video &&
                                                <button style={{color:"teal"}} className='videos' onClick={() => {
                                                    if (subtitle.video) {
                                                        setVideoUrl(subtitle.video.url);
                                                        console.log(subtitle.video.url)
                                                        setVideo(subtitle.video._id)
                                                    }
                                                }}>{subtitle.video.shortDescription}</button>
                                            }
                                            {/* <div>
                                                <button onClick={() => { toexercise(subtitle) }} className='btn2'>Exercises</button>
                                            </div> */}

                                        </div>
                                        <hr></hr>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            }
        </div>

    )
}

export default InstructorCoursesPage