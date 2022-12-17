import { useEffect,useState } from "react";



const RequestDetails = (request)=>{
    console.log("request IN REQUEST DETAILSPAGE",request);
    console.log("course id",request.request.courseid);
const [course,setCourse]= useState(null)
const [user,setUser]= useState(null)
const [error,setError]= useState(null)
const [show,setShow]= useState(true)
    useEffect(()=>{
     
    const fetchCourse= async()=>{
        
        const response = await fetch(`http://localhost:5000/myCourse/openCourse?courseid=${request.request.courseid}`)
        const json= await response.json()
       

        if(response.ok){
            setCourse(json)
            console.log("json",json)
           // console.log("course",course)
        }
    }
        const fetchUser= async()=>{
            const response = await fetch(`http://localhost:5000/admin/getTrainee?traineeid=${request.request.userid}`)
            const json= await response.json()

            if(response.ok){
                console.log("tarinee",json)
                setUser(json)
            }
    }
   
   fetchCourse()
   fetchUser()
},[])


const Accept= async()=>{

    const response = await fetch(`http://localhost:5000/corporateTrainee/registerForCourse`, {
        method: 'POST',
        body: JSON.stringify({
          "id": request.request.userid,
          "courseId": request.request.courseid,
         
          
          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const json = await response.json()
      if (!response.ok) {
        setError(json.error)
      }
      if (response.ok) {
        alert('Course added successfully!')
       
       
       
        setError(null)
        console.log('new course added to corporate trainee', json)
      }
      setShow(false)
}


    return(
        <div className='request'>
          {setShow?
          <div>
            <h3>Request by</h3>
            <p> Corporate Trainee User Name: {user?.username}</p>
            <h3>Course Title To Access:</h3>
            <p> {course?.title}</p>
            <button onClick={() => Accept()}>Accept</button>
            <button>Reject</button>
<br></br>
<br></br>
</div>
 :null}
            </div>
           
        
        
    )
}

export default RequestDetails