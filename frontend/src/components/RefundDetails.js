// import { useEffect,useState } from "react";



// const RefundDetails = (request)=>{
//     console.log("request in refund details",request);
//     console.log("course id",request.request.courseId);
// const [course,setCourse]= useState(null)
// const [user,setUser]= useState(null)
// const [error,setError]= useState(null)
// const [show,setShow]= useState(true)

// const country = JSON.parse(localStorage.getItem('country'))
// const conversion_rate = country.conversion_rate
// const target_code = country.target_code
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
//             const response = await fetch(`http://localhost:5000/admin/getindividualTrainee?traineeid=${request.request.userId}`)
//             const json= await response.json()

//             if(response.ok){
//                 console.log("individual",json)
//                 setUser(json)
//             }
//     }
   
//    fetchCourse()
//    fetchUser()
// },[])


// const Refund= async()=>{
//     //update wallet with % from course price
//     const response = await fetch('/individual/refund', {
//         method: 'PATCH',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             "id": request.request.userId,
//             "amount": course.price * conversion_rate * 0.25,
//             "courseId": request.request.courseId,
//         })
//     })
//     const json = await response.json()
//     if (!response.ok) {
//       setError(json.error)
//     }
//     if (response.ok) {
//       alert('wallet updated successfully!')
     
     
     
//       setError(null)
    
//     }
//     setShow(false)
   

// }


//     return(
//         <div className='request'>
//           {show?
//           <div>
//             <h3>Request by</h3>
//             <p>   User Name: {user?.username}</p>
//             <h3>Course Title :</h3>
//             <p> {course?.title}</p>
//             <h3>Course Price :</h3>
//             <p> {course?.price * conversion_rate} {target_code}</p>
//             <h3>Refund amount :</h3>
//             <p> {course?.price *conversion_rate* 0.5} {target_code}</p>
//             <button onClick={() => Refund()}>50 % Refund </button>
           
// <br></br>
// <br></br>
// </div>
//  :null}
//             </div>
           
        
        
//     )
// }

// export default RefundDetails