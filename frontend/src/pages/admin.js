import React, { useEffect, useState } from 'react'
import '../index.css'
import {  useNavigate } from 'react-router-dom';

const Admin = () => {
    const [message, setMessage] = useState('')
    const [requests, setRequests] = useState(null)

    const navigate = useNavigate();
    const torequests = () => {
        navigate('/requests',{ state: requests });
    }
    useEffect(()=>{
                const fetchRequests= async()=>{
                    const response = await fetch(`http://localhost:5000/admin/getRequests`)
                    const json= await response.json()
        
                    if(response.ok){
                        setRequests(json)
                        console.log("rquests back in admin",json)
                    }
                }
                fetchRequests()  },[])
    
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
        <div>
            <h2>Add Users</h2>
            <div className='d-flex flex-column'>

                <label>Select User</label>
                <select id="selectedElement">
                    <option value="Admin">Admin</option>
                    <option value="Instructor">Instructor</option>
                    <option value="corporateTrainee">Corporate Trainee</option>
                </select>
                <label>Username:</label>
                <input id='username'></input>
                <label>Password:</label>
                <input id='password'></input>
                <button onClick={() => addUser()}>Add</button>
                <span>{message}</span>
            </div>
            <br></br>
            <button onClick={() =>{ torequests() }}>View Requests</button>
        </div>
    )
}

export default Admin