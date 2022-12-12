import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import React, { useEffect, useState } from "react"
import axios from 'axios';

const DisplayPreviewVideo = () => {
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('courseId')
    const user = localStorage.getItem('user')
    //const courseId = params.get('courseId');
    const [video, setVideo] = useState(null)
    const [videoUrl, setVideoUrl] = useState('')
    const [VideoShortDescription, setVideoShortDescription] = useState('')
    useEffect(() => {
      
        //console.log(courseId);
      
        const getDetails = async (courseId) => {
            // console.log(userId);
            await axios.get(`${user}/watchPreviewVideo?courseId=${courseId}`).then(
                (res) => {
                    const json = res.data
                    let url = json.url
                    let shortDescription = json.shortDescription
                    console.log(json);
                    url = url.replace('watch?v=', 'embed/');
                    if (url) {
                        setVideoUrl(url)
                        setVideoShortDescription(shortDescription)
                        setVideo(json)
                    }
                    else {
                        setVideoUrl(json.url)
                        setVideoShortDescription(json.shortDescription)
                        setVideo(json)
                    }
                    // console.log(json);
                }
            )
        }

        getDetails(courseId)
    }, [])
    return (
        <div>
            {
              
                <div className="d-flex flex-column align-items-start justify-content-start">
                    <h2>{VideoShortDescription}</h2>
                    <div className="ratio ratio-21x9">
                        <iframe width='1080' height='760' src={videoUrl} title="YouTube video" frameBorder="0" allowFullScreen></iframe>
                    </div>
                    {/* <button onClick={() => DisplayPreviewVideo(courseId)}>watch preview video</button> */}
                </div>
            }
        </div>
    )
}

export default DisplayPreviewVideo