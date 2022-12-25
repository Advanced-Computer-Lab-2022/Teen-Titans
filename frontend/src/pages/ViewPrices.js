import { useEffect, useState } from 'react'

import CoursePrice from '../components/CoursePrice'
import Search from '../components/Search'
import PopularCourses from '../components/PopularCourses'
// import Subjects from '../components/Subjects';
import '../index.css';
import CourseForm from '../components/CourseForm'
import ViewCoursesPage from './ViewCoursesPage';
const ViewPrices = () => {
    const [courses, setCourses] = useState(null)
    // const [search, setSearch] = useState('');
    useEffect(() => {
        const fetchPrice = async () => {
            const response = await fetch('guest/getPrices')
            const json = await response.json()

            if (response.ok) {
                setCourses(json)
            }
        }
        fetchPrice()
    }, [])

    return (
        <div className='price'>
            <Search />
            <ViewCoursesPage/>
            {/* <Subjects /> */}
            <div className='prices'>
                <h2> Courses</h2>
                {courses && courses.map((course) => (
                    <CoursePrice key={course._id} course={course} />
                 

                ))}
                  
            </div>
          
         
        </div>
    )
}












export default ViewPrices