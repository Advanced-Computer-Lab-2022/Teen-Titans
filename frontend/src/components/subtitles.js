import { Link, useNavigate } from 'react-router-dom';
const Subtitle = ({ subtitle, courseId }) => {
    const navigate = useNavigate();
    const toexercise = () => {
        navigate('/page', { state: subtitle.exercise });
    }

    return (
        <div>
            <div className="onHover-details d-flex flex-column justify-content-start align-items-start">
                <h3>{subtitle.title}</h3>
                {
                    subtitle.videos.map((video) => (
                        <button className='videos' onClick={() => window.location.href = `/watch?videoId=${video._id}&courseId=${courseId}`}>{video.shortDescription}</button>
                    ))
                }
                <div>

                    <button onClick={() => { toexercise() }} className='subtitles-faded'>Exercises</button>
                    <h6 className='subtitles-faded'>{subtitle.subtitleHours} hours</h6>
                </div>

            </div>
            <hr></hr>
        </div>

    )
}

export default Subtitle