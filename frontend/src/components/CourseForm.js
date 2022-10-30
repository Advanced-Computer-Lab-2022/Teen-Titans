import { useState } from "react"

const CourseForm = ()=>{
    const [hours, setHours] = useState('')
    const [rating, setRating] = useState('')
    const [reviews, setReviews] = useState('')
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [discount, setDiscount] = useState('')
    const [subject, setSubject] = useState('')
    const [instructorId, setInstructorId] = useState('')
    const [instructorName, setInstructorName] = useState('')
    const[subtitlesHours,setSubtitlesHours]= useState('')
    const [url, setUrl] = useState('')
    const [shortDescription,setShortDescription]=useState('')
    const [exercises,setExercises]= useState('')
    const [shortSummary, setShortSummary] = useState('')
    const [previewVideo, setPreviewVideo] = useState('')
    const [courseOutline, setCourseOutline] = useState('')
    const [error, setError] = useState(null)


    // let addFormFields = async(e) => {
    //   e.preventDefault()
    //   setSubtitlesHours('')
    //   setUrl('')
    //   setShortDescription('')
    //   setExercises('')
      
    // }
    const handleSubmit = async(e)=>{
        e.preventDefault()
        const course={hours,rating,reviews,title,price,discount,subject,instructorId,instructorName,subtitlesHours,url,shortDescription,exercises,shortSummary,previewVideo,courseOutline}

        const response= await fetch('/instructor/createCourse',{
            method: 'POST',
            body: JSON.stringify(course),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }

        if(response.ok){
            setHours('')
            setRating('')
            setReviews('')
            setTitle('')
            setPrice('')
            setDiscount('')
            setSubject('')
            setInstructorId('')
            setInstructorName('')
            setSubtitlesHours('')
            setUrl('')
            setShortDescription('')
            setExercises('')
            setShortSummary('')
            setPreviewVideo('')
            setCourseOutline('')
            setError(null)
            console.log('new course added', json)
        }
     }
     return(
        //create a form 
        <form className="create" onSubmit={handleSubmit}>
           <h3>
               add a new course
           </h3>

           <label>course title:</label>
           <input type="text"
           onChange={(e)=> setTitle(e.target.value)}
           value={title}
           />

         <label> Course Hours:</label>
           <input type="number"
           onChange={(e)=> setHours(e.target.value)}
           value={hours}
           />
        

        <label> Course rating:</label>
        <input type="number"
        onChange={(e)=> setRating(e.target.value)}
        value={rating}
        />
          <label> Course review:</label>
        <input type="text"
        onChange={(e)=> setReviews(e.target.value)}
        value={reviews}
        />
          <label> Course price:</label>
        <input type="number"
        onChange={(e)=> setPrice(e.target.value)}
        value={price}
        />
          <label> Course discount:</label>
        <input type="number"
        onChange={(e)=> setDiscount(e.target.value)}
        value={discount}
        />
          <label> Course subject:</label>
        <input type="text"
        onChange={(e)=> setSubject(e.target.value)}
        value={subject}
        />
          <label> instructor id:</label>
        <input type="number"
        onChange={(e)=> setInstructorId(e.target.value)}
        value={instructorId}
        />
          <label> instructor name:</label>
        <input type="text"
        onChange={(e)=> setInstructorName(e.target.value)}
        value={instructorName}
        />
          <label> Course subtitle hours:</label>
          
        <input type="number"
        onChange={(e)=> setSubtitlesHours(e.target.value)}
        value={subtitlesHours}
        />

        <label>subtitle video url:</label>
        <input type="text"
        onChange={(e)=> setUrl(e.target.value)}
        value={url}
        />
        <label>subtitle video short description:</label>
        <input type="text"
        onChange={(e)=> setShortDescription(e.target.value)}
        value={shortDescription}
        />
        <label>subtitle exercises:</label>
        <input type="text"
        onChange={(e)=> setExercises(e.target.value)}
        value={exercises}
        />


            <label> Course shortSummary:</label>
        <input type="text"
        onChange={(e)=> setShortSummary(e.target.value)}
        value={shortSummary}
        />
            <label> Course previewVideo:</label>
        <input type="text"
        onChange={(e)=> setPreviewVideo(e.target.value)}
        value={previewVideo}
        />
            <label> Course outline:</label>
        <input type="text"
        onChange={(e)=> setCourseOutline(e.target.value)}
        value={courseOutline}
        />

        <button>Add course</button>
      {/* <button className="button add" type="button" onClick={() => addFormFields()}>Add subtitle</button> */}
        {error && <div className="error">{error}</div>}
     </form>
   )
    


}

export default CourseForm
