import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import CoursePrice from '../components/CoursePrice'
// import OwlCarousel from 'react-owl-carousel';
// import OwlCarousel from 'react-owl-carousel';
import PopularCourses from '../components/PopularCourses'
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../index.css';
import CourseForm from '../components/CourseForm'
import ViewCoursesPage from './ViewCoursesPage';
import SideBar from '../components/SideBar/SideBar';
// import CourseForm from '../components/CourseForm'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import * as Icon from 'react-bootstrap-icons';
import Filter from '../components/Filter';
const ViewPrices = () => {
    const [courses, setCourses] = useState(null)
    let query
    const [searchQuery, setSearchQuery] = useState("")
    const [searchResults, setSearchResults] = useState(null);
    const country = JSON.parse(localStorage.getItem('country'))
    const conversion_rate = country.conversion_rate
    const target_code = country.target_code
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
        <div>
            <Navbar />
            <div className='d-flex align-items-end'>
                <input
                    type="text"
                    className="from-control mt-4"
                    id='searchKey'
                    placeholder='search'
                    style={{ width: "40%", height: "50%" }}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <div className='row'>
                <div className='col-2'>
                    <div style={{ marginTop: "5px" }}>
                        <SideBar />
                    </div>
                </div>
                <div className='col-10'>
                    <div className='background'>
                        <ViewCoursesPage />
                    </div>
                    <div className='price'>
                        <div className='prices'>
                            {courses && courses.filter((course) =>
                                course.title?.toLowerCase().includes(searchQuery) || course.instructorName?.toLowerCase().includes(searchQuery)
                                || course.subject?.toLowerCase().includes(searchQuery)
                            ).map((course) => (
                                <CoursePrice key={course._id} course={course} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}












export default ViewPrices