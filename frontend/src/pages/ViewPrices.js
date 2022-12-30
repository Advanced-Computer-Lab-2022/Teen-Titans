import { useEffect, useState } from 'react'

import CoursePrice from '../components/CoursePrice'
import Search from '../components/Search'
// import Subjects from '../components/Subjects';
import '../index.css';
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

    // const searchGet = async () => {
    //     query = document.getElementById("searchKey").value;
    //     const response = await fetch(`/search?searchInput=${query}`)
    //     const json = await response.json()
    //     if (response.ok) {
    //         setSearchResults(json)
    //         console.log(searchResults);
    //     }
    // }

    // const filterCourses = e => {
    //     const search = e.target.value.toLowerCase()
    //     if (courses) {
    //         const filteredCourses = courses.filter((course) =>
    //             course.title?.toLowerCase().includes(search) || course.instructorName?.toLowerCase().includes(search)
    //             || course.subject?.toLowerCase().includes(search)
    //         )
    //         setCourses(filteredCourses)
    //     }
    // }
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
            <div className='d-flex align-items-end'>
                <input
                    type="text"
                    className="from-control mt-4"
                    id='searchKey'
                    placeholder='search'
                    style={{ width: "40%", height: "50%" }}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                {/* <button id='searchButton' className='btn2' style={{ margin: "0px 5px", padding: "10px" }} onClick={() => searchGet()}>Search</button> */}
                {/* {searchResults &&
                    searchResults.map((course) => (
                        <div className="box" key={course.id}>
                            <p>{course.title}</p>
                            <p>Price: {course.price * conversion_rate} {target_code}</p>
                            <p>Instructor: {course.instructorName}</p>
                        </div>
                    ))
                } */}
              
            </div>
            <div className='d-flex align-items-end'>
            <Filter></Filter>
            </div>
            <div className='price'>
                {/* <Search /> */}
                {/* <Subjects /> */}
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
    )
}












export default ViewPrices