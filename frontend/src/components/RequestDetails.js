// import { useEffect,useState } from "react";



// const RequestDetails = (request)=>{
//     console.log("request IN REQUEST DETAILSPAGE",request);
//     console.log("course id",request.request.courseId);
//     console.log("trainee id",request.request.userId);
//     console.log("request id",request.request._id);
// const [course,setCourse]= useState(null)
// const [user,setUser]= useState(null)
// const [error,setError]= useState(null)
// const [show,setShow]= useState(true)
//     useEffect(()=>{
     
//     const fetchCourse= async()=>{
        
//         const response = await fetch(`http://localhost:5000/myCourse/openCourse?courseid=${request.request.courseId}`)
//         const json= await response.json()
       

//         if(response.ok){
//             setCourse(json)
//             console.log("json",json)
//            // console.log("course",course)
//         }
//     }
//         const fetchUser= async()=>{
//             const response = await fetch(`http://localhost:5000/admin/getTrainee?traineeid=${request.request.userId}`)
//             const json= await response.json()

//             if(response.ok){
//                 console.log("tarinee",json)
//                 setUser(json)
//             }
//     }
   
//    fetchCourse()
//    fetchUser()
// },[])


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
//        // console.log('new course added to corporate trainee', json)
//       }
//       setShow(false)


//       const res = await fetch(`http://localhost:5000/admin/changeStatus`, {
//         method: 'POST',
//         body: JSON.stringify({
//           "id": request.request._id,

//   }),
//   headers: {
//     'Content-Type': 'application/json'
//   }
//   })
//   const js = await res.json()
//   if (!res.ok) 
//     setError(js.error)
  
// }
//     return(
//         <div className='request'>
//           {show?
//           <div>
//             <h3>Request by</h3>
//             <p> Corporate Trainee User Name: {user?.username}</p>
//             <h3>Course Title To Access:</h3>
//             <p> {course?.title}</p>
//             <button onClick={() => Accept()}>Accept</button>
            
//             <button >Reject</button>
// <br></br>
// <br></br>
// </div>
//  :null}
//             </div>
           
        
        
//     )
// }

// export default RequestDetails