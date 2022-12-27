import { useEffect,useState } from "react";



const ReportDetails = (report)=>{
    console.log("report IN report DETAILSPAGE",report);
    console.log("course id",report.report.courseId);
const [course,setCourse]= useState(null)
const [user,setUser]= useState(null)
const [error,setError]= useState(null)
const [show,setShow]= useState(true)
    useEffect(()=>{
     
    const fetchCourse= async()=>{
        
        const response = await fetch(`http://localhost:5000/myCourse/openCourse?courseid=${report.report.courseId}`)
        const json= await response.json()
       

        if(response.ok){
            setCourse(json)
            console.log("json",json)
           // console.log("course",course)
        }
    }
   
            const fetchUser= async()=>{
                if(user==="corporateTrainee" || user==="individualTrainee"){
            const response = await fetch(`http://localhost:5000/admin/getTrainee?traineeid=${report.report.userId}`)
            const json= await response.json()

            if(response.ok){
                console.log("tarinee",json)
                setUser(json)
            }
            }
            else{
                const response = await fetch(`http://localhost:5000/admin/getInstructor?id=${report.report.userId}`)
                const json= await response.json()

            if(response.ok){
                console.log("tarinee",json)
                setUser(json)
            }
            }
            
    }



   fetchCourse()
   fetchUser()
},[])


// const Accept= async()=>{

//     const response = await fetch(`http://localhost:5000/corporateTrainee/registerForCourse`, {
//         method: 'POST',
//         body: JSON.stringify({
//           "id": request.request.userId,
//           "courseId": request.request.courseId,
         
          
//           }
//         ),
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       })
//       const json = await response.json()
//       if (!response.ok) {
//         setError(json.error)
//       }
//       if (response.ok) {
//         alert('Course added successfully!')
       
       
       
//         setError(null)
//         console.log('new course added to corporate trainee', json)
//       }
//       setShow(false)
// }


    return(
        <div className='report'>
         
          <div>
            
            <h3>Course Title :</h3>
            <p> {course?.title}</p>
            <h3>My  Problem :</h3>
            <p> {report?.report.problem}</p>
            <h3>Status:</h3>
            <p> {report?.report.status}</p>
            <h3>Type:</h3>
            <p> {report?.report.type}</p>
            <button >Follow Up</button>
         
<br></br>
<br></br>
</div>
 
            </div>
           
        
        
    )
}

export default ReportDetails