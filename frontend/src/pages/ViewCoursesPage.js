import { useEffect ,useState} from 'react'
//components
import CourseDetails  from '../components/CourseDetails'

const ViewCoursesPage = ()=>{  
    const [courses,setCourses]= useState(null)
    useEffect(()=>{
        const fetchCourses= async()=>{
            const response = await fetch('/viewCourses')
            const json= await response.json()

            if(response.ok){
                setCourses(json)
            }
        }      
        fetchCourses()
    },[])
    return(
        <div className='view'>
            <div className='courses'>
                {courses && courses.map((course)=>(
                    <CourseDetails key={course._id} course= {course}/>
                ))}
            </div>
        </div>      
    )  
}
export default ViewCoursesPage