const Subtitle = ({ subtitle }) => {
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
                    <button className='subtitles-faded'>Exercises</button>
                    <h6 className='subtitles-faded'>{subtitle.hours} hours</h6>
                </div>

            </div>
            <hr></hr>
        </div>

    )
}

export default Subtitle