import { useEffect ,useState} from 'react'

import CoursePrice from '../components/CoursePrice'

const ViewPrices = ()=>{
    const [courses,setCourses]= useState(null)
    useEffect(()=>{
        const fetchPrice = async()=>{
            const response= await fetch('viewCourses/prices')
            const json = await response.json()

            if(response.ok){
                setCourses(json)
            }
        }
        fetchPrice()
    },[])

    return(
        <div className='price'>
            <div className='prices'>
                {courses && courses.map((course)=>(
                <CoursePrice key = {course._id} course={course}/>
               ) )}
            </div>
        </div>
    )
}


export default ViewPrices