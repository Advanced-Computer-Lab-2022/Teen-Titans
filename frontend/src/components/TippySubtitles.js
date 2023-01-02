const TippySubtitles = ({ subtitle }) => {
    // console.log(subtitle);
    return (
        <div>
            <div className="onHover-details d-flex flex-column justify-content-start align-items-start">
                <h5>{subtitle.title}</h5>
                <div>
                    <h6 className='subtitles-faded'>{subtitle.hours} hours</h6>
                </div>
            </div>
            <hr></hr>
        </div>

    )
}

export default TippySubtitles