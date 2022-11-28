import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import React, { useEffect, useState } from "react"
import axios from 'axios';

const DisplayVideo = () => {
    const params = new URLSearchParams(window.location.search);
    const videoId = params.get('videoId');
    const courseId = params.get('courseId')
    const userId = localStorage.getItem('id')
    const user = localStorage.getItem('user')
    const [video, setVideo] = useState(null)
    const [videoUrl, setVideoUrl] = useState('')
    useEffect(() => {
        const getDetails = async (videoId) => {
            // console.log(userId);
            await axios.get(`myCourse/${user}/watch?id=${userId}&videoId=${videoId}&courseId=${courseId}`).then(
                (res) => {
                    const json = res.data
                    let url = json.url
                    url = url.replace('watch?v=', 'embed/');
                    if (json) {
                        setVideoUrl(url)
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
                    <div className="ratio ratio-21x9">
                        <iframe width='1080' height='760' src={videoUrl} title="YouTube video" frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>
            }
        </div>
    )
}

export default DisplayVideo