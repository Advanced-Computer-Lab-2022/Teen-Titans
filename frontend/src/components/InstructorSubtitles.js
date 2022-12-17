import { useEffect ,useState} from 'react';


const Subtitle = ({ subtitle }) => {
const [url, seturl] = useState('')
const [shortDescription, setshortDescription] = useState('')
const courseId = params.get('courseId');
const subtitleId=subtitle._id
const params = new URLSearchParams(window.location.search);



    return (
        <div>
            <div className="onHover-details">
                <h3>{subtitle.title}</h3>
                {
                    subtitle.videos.map((video) => (
                        <div>
                            <span className='labels'>videURL: </span>
                            <span>{video.url} </span>
                            <span className='labels'>video shortDescription: </span>
                            <span>{video.shortDescription} </span>
                        </div>
                    ))

                }



            </div>
           
        </div>

    )
}

export default Subtitle