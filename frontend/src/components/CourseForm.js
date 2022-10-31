import { useState } from "react"
const CourseForm = ()=>{
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const[subject,setSubject]=useState('')
    const[instructorId,setInstructorId]=useState('')
    const[instructorName,setInstructorName]=useState('')
     const [shortSummary, setShortSummary] = useState('')
    const [subtitle ,setSubtitle] = useState([]);
    const [error, setError] = useState(null)

    
  const handleSubtitleAdd=()=>{
    setSubtitle([])
  }


    const handleSubmit = async(e)=>{
        e.preventDefault()

        const course={title,price,subject,instructorId,instructorName,subtitle,shortSummary}

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
            setTitle('')
            setPrice('')
            setSubject('')
            setInstructorId('')
            setInstructorName('')
            setSubtitle([])
            setShortSummary('')
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
          <label> Course price:</label>
        <input type="number"
        onChange={(e)=> setPrice(e.target.value)}
        value={price}
       placeholder ="Enter price in USD" />
       
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
         <label> Course subtitle:</label>
        <input type="text"
        onChange={(e)=> setSubtitle(e.target.value)}
        value={subtitle}
        />

          

        
            <label> Course shortSummary:</label>
        <input type="text"
        onChange={(e)=> setShortSummary(e.target.value)}
        value={shortSummary}
        />

<button type="button" className="add-btn" onClick={handleSubtitleAdd}
>      <span>add a subtitle</span>
  </button>  

        <button>Add course</button>
        {error && <div className="error">{error}</div>}
     </form>
    
   )
    


}

export default CourseForm
