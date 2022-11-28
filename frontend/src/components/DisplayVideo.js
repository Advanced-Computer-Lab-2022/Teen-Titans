import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
const DisplayVideo = () => {
    return (
        <div className="d-flex flex-column align-items-start justify-content-start">
            <h2>Pipeline</h2>
            <div class="ratio ratio-21x9">
                <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default DisplayVideo