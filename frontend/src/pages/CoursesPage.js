// import Subtitle from '../components/subtitles';
import React, { useEffect, useState } from "react"
import ReactPlayer from 'react-player/youtube'
import axios from 'axios';
import AppRate from '../components/Rate';
import TextEditor from '../components/TextEditor';
import jsPDF from 'jspdf';
import "bootstrap/js/src/collapse.js";
import { Link, useNavigate } from 'react-router-dom';
const CoursesPage = () => {

    const [course, setCourse] = useState(null)
    const country = JSON.parse(localStorage.getItem('country'))
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('courseId');
    const userId = params.get('userId');
    const user = params.get('user')
    const [video, setVideo] = useState(null)
    const [videoUrl, setVideoUrl] = useState('')
    const [percentage, setPercentage] = useState(0)
    // const conversion_rate = country.conversion_rate
    // const target_code = country.target_code
    const [notes, setNotes] = useState("");
    const getNotes = (text) => {
        const notes = text.replace(/(<([^>]+)>)/ig, '');
        setNotes(notes);
        console.log(notes);
    };

    const generateNotesPDF = () => {
        const doc = new jsPDF();
        doc.text(notes, 10, 10);

        doc.setFont("courier")

        doc.setFontSize(50)

        // doc.text("There is more text", 10, 50);

        doc.save("Notes.pdf");
    }

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
    const requestRefund = async () => {
        await axios.get(`/individual/requestRefund?id=${userId}&courseId=${courseId}`).then(
            (res) => {
                const json = res.data
                if (json) {
                    console.log(json);
                    alert(json.message)
                }
            }
        )
    }
    const navigate = useNavigate();
    const toexercise = (subtitle) => {
        navigate('/exercise', { state: subtitle.exercise });
    }
    useEffect(() => {
        const getDetails = async () => {
            await axios.get(`myCourse/${user}/openCourse?id=${userId}&courseId=${courseId}`).then(
                (res) => {
                    console.log("ho");
                    console.log(user);
                    console.log(userId);
                    console.log(courseId);
                    const json = res.data
                    if (json) {
                        setCourse(json)
                        setPercentage(json.percentageComplete)
                        console.log(json);
                    }
                }
            )
           
        }
        getDetails()
    }, [])

    return (
        <div>
            {courseId && course &&
                <div className='row row-cols-2'>
                    <div className='col-8 course-details1'>
                        <h1>
                            {course?.title}
                        </h1>
                        <div className='player-wrapper'>
                            <ReactPlayer
                                sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation allow-presentation"
                                className='react-player'
                                allowFullScreen
                                url={videoUrl || course?.course?.previewVideo.url}
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
                                    <a className="btn" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        Course Info
                                    </a>
                                </p>
                                <div className="collapse" id="collapseExample">
                                    <div className="card card-body">
                                        <h4>Instructor: {course?.course?.instructorName}</h4>
                                        <h6>course rating: {course?.course?.rating}</h6>
                                        <h6>course hours: {course?.course?.hours}</h6>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex flex-column'>
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
                            </div>
                            <div className='d-flex flex-column'>
                                <p>
                                    <a className="btn" data-bs-toggle="collapse" href="#notes" role="button" aria-expanded="false" aria-controls="notes">
                                        Write Notes
                                    </a>
                                </p>
                                <div className="collapse" id="notes">
                                    <div className="card card-body">
                                        <TextEditor initialValue="" getValue={getNotes} />
                                        <button onClick={generateNotesPDF}>Download Notes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='d-flex justify-content-between'>
                            <div>
                                <div>Percentage of the course completed:</div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ backgroundColor: "#1aac83", width: `${course.percentageComplete}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{course.percentageComplete}%</div>
                                    {
                                        course.percentageComplete === 100
                                    }
                                </div>
                            </div>
                            <div>
                                <button className='danger' onClick={() => requestRefund()}>Drop Course</button>
                            </div>
                        </div>
                        <h4 className='subtitles'>Subtitles:</h4>
                        {
                            course?.course?.subtitles && course?.course?.subtitles.map((subtitle) => (
                                <div>
                                    <div className="onHover-details d-flex flex-column justify-content-start align-items-start">
                                        <h3>{subtitle?.title}</h3>
                                        {
                                            subtitle?.video &&
                                            <button className='videos' onClick={() => {
                                                if (subtitle?.video) {
                                                    setVideoUrl(subtitle?.video.url);
                                                    setVideo(subtitle?.video._id)
                                                }
                                            }}>{subtitle?.video?.shortDescription}</button>
                                        }
                                        <div>

                                            <button onClick={() => { toexercise(subtitle) }} className='subtitles-faded'>Exercises</button>
                                            <h6 className='subtitles-faded'>{subtitle?.subtitleHours} hours</h6>
                                        </div>

                                    </div>
                                    <hr></hr>
                                </div>
                            ))
                        }
                    </div>
                </div>
            }
        </div>

    )
}

export default CoursesPage