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
import ISideBar from '../components/SideBar/InstructorSideBar.jsx';



// import CourseForm from '../components/CourseForm'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import * as Icon from 'react-bootstrap-icons';
// import Filter from '../components/Filter';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const ViewPrices = () => {
    const [courses, setCourses] = useState(null)
    let query
    const [searchQuery, setSearchQuery] = useState("")
    const [searchResults, setSearchResults] = useState(null);
    const country = JSON.parse(localStorage.getItem('country'))
    const conversion_rate = country.conversion_rate
    const target_code = country.target_code
    const [rate, setRate] = useState(0);
    const [subject, setSubject] = useState("");
    const [price, setPrice] = useState(1000000);
    const [show, setShow] = useState(true);
    const userId = localStorage.getItem('id')
    const user = localStorage.getItem('user')



    const handleChange = (event) => {
        // if(event.target.value<2)
        console.log(event.target.value)
        setRate(event.target.value );
      };
      const handleChange2 = (event) => {
        // if(event.target.value<2)
        console.log(event.target.value)
        setSubject(event.target.value );
      };

      const handleChange3= (event) => {
       
        console.log(event.target.value)
        setPrice(event.target.value );
      };
    
    useEffect(() => {
        const fetchPrice = async () => {
            const response = await fetch('guest/getPrices')
            const json = await response.json()

            if (response.ok) {
                setCourses(json)
            }
        }

      
        
        const get = () => {
            if (user === "corporateTrainee") {
                setShow(false)
          
            }
        }
        get()
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

                
            <div className="mb-3 col-4 mx-auto text-center">
            <FormControl style={{minWidth: 100}} >
  <InputLabel id="demo-simple-select-label">Rating</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={rate}
    label="Rating"
    onChange={handleChange}
  >
    <MenuItem value={1.0}> 1.0 or more</MenuItem>
    <MenuItem value={2.0}>  2.0 or more</MenuItem>
    <MenuItem value={3.0}> 3.0 or more</MenuItem>
    <MenuItem value={4.0}> 4.0 or more</MenuItem>
    <MenuItem value={5.0}> 5.0 or more</MenuItem>
  </Select>
</FormControl>
{show? 
<FormControl style={{minWidth: 100}} >
  <InputLabel id="demo-simple-select-label">Price</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={price}
    label="Price"
    onChange={handleChange3}
  >
    <MenuItem value={0}> Free </MenuItem>
    <MenuItem value={(100* conversion_rate).toFixed(2)}>up to {(100* conversion_rate).toFixed(2)} {country.target_code}
</MenuItem>

    <MenuItem value={(300* conversion_rate).toFixed(2)}>  up to {(300* conversion_rate).toFixed(2)} {country.target_code}</MenuItem>
    <MenuItem value={(500* conversion_rate).toFixed(2)}>up to {(500* conversion_rate).toFixed(2)} {country.target_code}</MenuItem>
    <MenuItem value={(700* conversion_rate).toFixed(2)}> up to {(700* conversion_rate).toFixed(2)} {country.target_code}</MenuItem>
    <MenuItem value={(900* conversion_rate).toFixed(2)}> up to {(900* conversion_rate).toFixed(2)} {country.target_code}</MenuItem>
  </Select>
</FormControl>
:null}
            
            <FormControl  style={{minWidth: 100}}>
  <InputLabel id="demo-simple-select-label">Subject</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={subject}
    label="Subject"
    onChange={handleChange2}
  >
    <MenuItem value={"Computer Science"}> Computer Science</MenuItem>
    <MenuItem value={"Science"}> Science</MenuItem>
    <MenuItem value={"Fremd Sprache"}> Fremd Sprache</MenuItem>
  </Select>
</FormControl>
            </div>
          
            </div>
            
            <div className='row'>
                <div className='col-2'>
                    <div style={{ marginTop: "5px" }}>
                        {user==="instructor"?<ISideBar />:<SideBar />}
                        
                    </div>
                </div>
                <div className='col-10'>
                    <div className='background'>
                        <ViewCoursesPage />
                    </div>
                    
                    <div className='price'>
                        <div className='prices'>
                            {courses && courses.filter((course) =>
                               ( course.title?.toLowerCase().includes(searchQuery) || course.instructorName?.toLowerCase().includes(searchQuery)
                                || course.subject?.toLowerCase().includes(searchQuery))&& ( (course?.rating>=rate)&&(course?.subject.includes(subject)) && (course?.price<=price))
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



//(course?.price * conversion_rate).toFixed(2) >0 &&








export default ViewPrices