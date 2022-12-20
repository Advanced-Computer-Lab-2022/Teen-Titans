const TippySubtitles = ({ subtitle }) => {
    // console.log(subtitle);
    return (
        <div>
            <div className="onHover-details d-flex flex-column justify-content-start align-items-start">
                <h3>{subtitle.title}</h3>
                <div>
                    <h6 className='subtitles-faded'>{subtitle.subtitleHours} hours</h6>
                </div>
            </div>
            <hr></hr>
        </div>

    )
}

export default TippySubtitles