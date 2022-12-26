import { useEffect,useState } from "react";



const ReportDetails = (report)=>{
    console.log("report in reportdetails",report);
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
            console.log("course",json)
           // console.log("course",course)
        }
    }
        const fetchUser= async()=>{
            let response;
            if(report.report.user=="corporateTrainee"){
             response = await fetch(`http://localhost:5000/admin/getTrainee?traineeid=${report.report.userId}`)
            }
            else if(report.report.user=="individualTrainee"){
             response = await fetch(`http://localhost:5000/admin/getindividualTrainee?traineeid=${report.report.userId}`)
            }
            else{
             response = await fetch(`http://localhost:5000/admin/getInstructor?traineeid=${report.report.userId}`)
            }

            const json= await response.json()

            if(response.ok){
                console.log("tarinee",json)
                setUser(json)
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
        //auto unseen
        <div className='report'>
          {show?
          <div>
            <h3>Report by</h3>
            <p>  User Name: {report.report.user} {user?.username}</p>
            <h3>problem:</h3>
            <p> {report.report.problem}</p>
            <h3>Type:</h3>
            <p> {report.report.type}</p>
            <input type="radio" id="a" name="pending"  />
              <label for="a">pending</label>
              <input type="radio" id="b" name="resolved"  />
              <label for="b">resolved</label>

          
<br></br>
<br></br>
</div>
 :null}
            </div>
           
        
        
    )
}

export default ReportDetails