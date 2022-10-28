import { useEffect ,useState} from 'react'

import CoursePrice from '../components/CoursePrice'
import Search from '../components/Search'

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
            <Search />
            <div className='prices'>
                {courses && courses.map((course)=>(
                <CoursePrice key = {course._id} course={course}/>
               ) )}
            </div>
        </div>
    )
}


export default ViewPrices