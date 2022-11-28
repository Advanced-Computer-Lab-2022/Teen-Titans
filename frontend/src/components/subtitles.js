import {Link, useNavigate} from 'react-router-dom';
const Subtitle = ({ subtitle }) => {
    const navigate = useNavigate();
    const toexercise = () => {
        navigate('/page' ,{state: subtitle.exercise});
    }

    return (
        <div>
            <div className="onHover-details">
                <h3>{subtitle.title}</h3>
                {
                    subtitle.videos.map((video) => (
                        <h6>{video}</h6>
                    ))
                }
                <div>
                
                    <button  onClick={() => {toexercise()}}  className='subtitles-faded'>Exercises</button>
                    <h6 className='subtitles-faded'>{subtitle.hours} hours</h6>
                </div>

            </div>
            <hr></hr>
        </div>

    )
}

export default Subtitle