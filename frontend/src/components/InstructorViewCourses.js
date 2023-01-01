import React, { useEffect, useState } from "react"
// import Details from "./Details"
import Navbar from '../components/Navbar';

import axios from 'axios';
// import CoursesPage from "../pages/CoursesPage";
import { Link, useNavigate } from 'react-router-dom';
import CorporateTraineeSearch from "./CorporateTraineeSearch";
import { Filter } from "react-bootstrap-icons";
import CoursePrice from '../components/CoursePrice'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import SideBar from "./SideBar/InstructorSideBar";
// import ViewInstructorRating  from 
import { AiFillWallet } from "react-icons/ai";
import ViewInstructorRating from "./ViewInstructorRating";



const InstructorViewCourses = ({ }) => {
    const [courseData, setCourseData] = useState(null)
    const [courseId, setCourseId] = useState(null)
    const userId = localStorage.getItem('id')
    const user = localStorage.getItem('user')
    const [price,setPrice]=useState(10000000)
    const [subject,setSubject]=useState("")
    const [searchQuery, setSearchQuery] = useState("")
    const [money, setMoney] = useState("")


    const country = JSON.parse(localStorage.getItem('country'))
    const conversion_rate = country.conversion_rate
    const target_code = country.target_code
    const navigate = useNavigate();
    // const toexam = () => {
    //     navigate('/exercise', { state: courseData.courseExam });
    // }

    const handleChange = (event) => {
        // if(event.target.value<2)
        console.log(event.target.value)
        setPrice(event.target.value );
      };

      const handleChange2 = (event) => {
        // if(event.target.value<2)
        console.log(event.target.value)
        setSubject(event.target.value );
      };

    useEffect(() => {
        const getDetails = async () => {
            console.log(user + " " + userId);
            await axios.get(`users/${user}Courses?id=${userId}`).then(
                (res) => {
                    const json = res.data
                    console.log("json", json);
                    if (json)
                        setCourseData(json)
                    console.log("course data " + courseData);
                }
            )
        }
        const getMoney = async () => {
          
          
                const response = await fetch(`http://localhost:5000/users/viewMoneyOwed?instructorId=${userId}`)
                const json = await response.json()
               
                    setMoney(json)
                    console.log(json+"money")
                   
                
            }
        
        getDetails()
        getMoney()
    }, [])

    return (
        <div>
        <Navbar></Navbar>
        <div className="container1">
            <SideBar></SideBar>
            
       
      
        {/* <ViewInstructorRating id={id} />
                    <PriceFilter />

                    <EditBiography id={id} />
                    <EditEmail id={id} /> */}



            
            <FormControl style={{minWidth: 100}} >
  <InputLabel id="demo-simple-select-label">Price</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={price}
    label="Price"
    onChange={handleChange}
  >
    <MenuItem value={(100* conversion_rate).toFixed(2)}>up to {(100* conversion_rate).toFixed(2)}</MenuItem>
    <MenuItem value={(300* conversion_rate).toFixed(2)}>  up to {(300* conversion_rate).toFixed(2)}</MenuItem>
    <MenuItem value={(500* conversion_rate).toFixed(2)}>up to {(500* conversion_rate).toFixed(2)}</MenuItem>
    <MenuItem value={(700* conversion_rate).toFixed(2)}> up to {(700* conversion_rate).toFixed(2)}</MenuItem>
    <MenuItem value={(900* conversion_rate).toFixed(2)}> up to {(900* conversion_rate).toFixed(2)}</MenuItem>
  </Select>
</FormControl>
          
            
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


           

            {/* <div className="search">
                { <CorporateTraineeSearch id={id} /> }
                </div> */}
                <input
                    type="text"
                    className="from-control mt-4"
                    id='searchKey'
                    placeholder='search'
                    style={{ width: "20%", height: "50%",position:"relative",minWidth: 100 ,margin:"20px"}}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            {userId &&
                <div className="trainee-courses" style={{height:"10%", position:"absolute",top:"150px",left:"500px"}}>
                    {courseData && courseData.filter((course) =>
                        // ((course?.price* conversion_rate <= price || course.subject===subject)&&(course.title?.toLowerCase().includes(searchQuery) || course.instructorName?.toLowerCase().includes(searchQuery)
                        // || course.subject?.toLowerCase().includes(searchQuery)))
                        ( course.title?.toLowerCase().includes(searchQuery) || course.instructorName?.toLowerCase().includes(searchQuery)
                        || course.subject?.toLowerCase().includes(searchQuery))&&(course?.subject.includes(subject)) && (course?.price* conversion_rate <= price )
                    ).map((course) => (
                        <div className="display-courses" key={course.id}>
                            <h4>{course?.title}</h4>
                            <p>Price: {course?.price * conversion_rate} {target_code}</p>
                            <p>Instructor: {course?.instructorName}</p>
                            <button style={{backgroundColor:"teal"}} onClick={() => window.location.href = `/Icourse?user=${user}&courseId=${course._id}&userId=${userId}`}>View Details</button>
                            <button style={{backgroundColor:"teal",margin:"30px"}} onClick={() => window.location.href = `/discount?courseId=${course._id}`}>Define promotion</button>
                        </div>
                        // <CoursePrice key={course._id} course={course} />
                    ))}
                </div>
                

            }
            <div className="display-courses" style={{margin:"300px" }}>
    <h5 style={{color:"teal"}} >Money Owed per month<AiFillWallet/></h5>
<p> {money*conversion_rate}{target_code}</p>
</div>

{/* <div className="display-courses" style={{margin:"300px" }}> */}
    <ViewInstructorRating></ViewInstructorRating>
{/* <h5 style={{color:"teal"}} >My Rating</h5>

<h5 style={{color:"teal"}} >My Reviews</h5> */}


{/* </div> */}
        </div >
        </div>
    
    )
}

export default InstructorViewCourses