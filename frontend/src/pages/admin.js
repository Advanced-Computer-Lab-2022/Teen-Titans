import React, { useEffect, useState } from 'react'
import '../index.css'
import {  useNavigate } from 'react-router-dom';
import Sidebar from '../components/SideBar/AdminSideBar';
const Admin = () => {
    const [message, setMessage] = useState('')
    const [requests, setRequests] = useState(null)
    const [refunds, setRefunds] = useState(null)
    const [reports, setReports] = useState(null)



    const navigate = useNavigate();
    const torequests = () => {
        navigate('/requests',{ state: requests });
    }

    const torefundrequests = () => {
        navigate('/refunds',{ state: refunds });
    }

    const toreports = () => {
        navigate('/reports',{ state: reports });
    }
    useEffect(()=>{
                // const fetchRequests= async()=>{
                //     const response = await fetch(`http://localhost:5000/admin/getRequests`)
                //     const json= await response.json()
        
                //     if(response.ok){
                //         setRequests(json)
                //         console.log("rquests back in admin",json)
                //     }
                // }
                // const fetchRefunds= async()=>{
                //     const response = await fetch(`http://localhost:5000/admin/getRefunds`)
                //     const json= await response.json()
        
                //     if(response.ok){
                //         setRefunds(json)
                //         console.log("refunds back in admin",json)
                //     }
                // }
                // const fetchReports= async()=>{
                //     const response = await fetch(`http://localhost:5000/admin/getReports`)
                //     const json= await response.json()
        
                //     if(response.ok){
                //         setReports(json)
                //         console.log("reports frontend in admin",json)
                //     }
                // }
                // fetchReports()
                // fetchRequests() 
                // fetchRefunds()
             },[])
    
    const addUser = async () => {
        if (document.getElementById("username").value == "" || document.getElementById("password").value == "") {
            setMessage("Please enter all fields!")
        }
        else {
            const response = await fetch('/admin/addUser', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "username": document.getElementById("username").value.toString(),
                    "password": document.getElementById("password").value.toString(),
                    "selectedElement": document.getElementById("selectedElement").value.toString()
                })
            })
            if (response.ok) {
                setMessage("User Added.")
            }
            else {
                setMessage("Username already exists")
            }
        }
    }
    return (
         
        <div  className='container1'>
         
         <Sidebar  />
            
            <div className='adminadduser' >
           
            <h2>Add Users</h2>
                <label>Select User</label>
                <select id="selectedElement">
                    <option value="Admin">Admin</option>
                    <option value="Instructor">Instructor</option>
                    <option value="corporateTrainee">Corporate Trainee</option>
                </select>
                <br></br>
                <br></br>
                <div className='box' >
               
                <label>Username:</label>
                <input style={{ width: "200px"}}  id='username' ></input>
                <label>Password:</label>
                <input style={{ width: "200px" }}  id='password'></input>
                <button onClick={() => addUser()}>Add</button>


                <span>{message}</span>
                </div>
            </div>
            <br></br>
            <br></br>
            {/* <button onClick={() =>{ torequests() }}> Course Access Requests</button>
            <br></br>
            <button onClick={() =>{ torefundrequests() }}> Refund Requests</button>
            <br></br>
            <button onClick={() =>{ toreports() }}> Reports</button> */}
            {/* <button style={{ width: "100px",height:"100px" ,position:"relative",}}  onClick={() => window.location.href = `/viewCoursesForDiscount`}>View courses</button> */}
        </div>
    )
}

export default Admin