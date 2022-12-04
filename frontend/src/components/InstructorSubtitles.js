import { useEffect ,useState} from 'react';


const Subtitle = ({ subtitle }) => {
const [url, seturl] = useState('')
const [shortDescription, setshortDescription] = useState('')
const courseId = params.get('courseId');
const subtitleId=subtitle._id
const params = new URLSearchParams(window.location.search);

const handleSubmit = async (e) => {
    e.preventDefault()

    const course = { courseId,subtitleId, url, shortDescription }

    const response = await fetch(`http://localhost:5000/instructor/uploadst`, {
      method: 'POST',
      body: JSON.stringify(course),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()


   

    if (response.ok) {
    
      console.log('preview video added', json)
    }
  }

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

                {/* <div>
                    <label>upload url</label>
                    <input type="text"
                        onChange={(e) => seturl(e.target.value)}
                        value={url}
                    />
                </div> */}
                {/* <div>
                    <label> shortDescription:</label>
                    <input type="text"
                        onChange={(e) => setshortDescription(e.target.value)}
                        value={shortDescription}
                    />
                </div> */}
                {/* <button onClick={handleSubmit}>add  video</button> */}


            </div>
           
        </div>

    )
}

export default Subtitle