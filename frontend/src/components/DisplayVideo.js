import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import React, { useEffect, useState } from "react"
import ReactPlayer from 'react-player/youtube'

import axios from 'axios';

const DisplayVideo = () => {
    const params = new URLSearchParams(window.location.search);
    const videoId = params.get('videoId');
    const courseId = params.get('courseId')
    const userId = localStorage.getItem('id')
    const user = localStorage.getItem('user')
    const [video, setVideo] = useState(null)
    const [videoUrl, setVideoUrl] = useState('')
    const [seen, setSeen] = useState(false)
    const watchedVideo = async () => {

        await axios.patch(`myCourse/${user}/seen?id=${userId}`, {
            courseId: courseId,
            videoId: videoId
        })
    }
    useEffect(() => {
        // console.log(videoId);
        // console.log(courseId);
        // console.log(userId);
        const getDetails = async (videoId) => {
            // console.log(userId);
            await axios.get(`myCourse/${user}/watch?id=${userId}&videoId=${videoId}&courseId=${courseId}`).then(
                (res) => {
                    const json = res.data
                    let url = json.url
                    // console.log(json);
                    url = url.replace('watch?v=', 'embed/');
                    if (url) {
                        setVideoUrl(url)
                        setVideo(json)
                    }
                    else {
                        setVideoUrl(json.url)
                        setVideo(json)
                    }
                    // console.log(json);
                }
            )
        }

        getDetails(videoId)
    }, [])
    return (
        <div>
            {
                video &&
                <div className="d-flex flex-column align-items-start justify-content-start">
                    <h2>{video.shortDescription}</h2>
                    {/* <div className="ratio ratio-21x9">
                        <iframe width='1080' height='760' src={videoUrl} title="YouTube video" frameBorder="0" allowFullScreen></iframe>
                    </div> */}
                    <br></br>
                    <div className='player-wrapper'>
                        <ReactPlayer
                            sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation allow-presentation"
                            className='react-player'
                            allowFullScreen
                            url={videoUrl}
                            width='100%'
                            height='100%'
                            controls
                            autoPlay={false}
                            onEnded={() => { watchedVideo() }}
                        />
                    </div>
                </div>
            }
        </div>
    )
}

export default DisplayVideo