const Subtitle = ({ subtitle }) => {
    return (
        <div>
            <div className="onHover-details">
                {
                    subtitle.videos.map((video) => (
                        <h6>{video}</h6>
                    ))
                }
                {
                    subtitle.exercises.map((exercise) => (
                        <h6 className='subtitles-faded'>{exercise}</h6>
                    ))
                }
                <h6 className='subtitles-faded'>{subtitle.hours} hours</h6>
            </div>
            <hr></hr>
        </div>

    )
}

export default Subtitle