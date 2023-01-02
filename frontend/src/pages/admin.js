import React, { useEffect, useState } from 'react'
import '../index.css'
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/SideBar/AdminSideBar';
const Admin = () => {
    const [message, setMessage] = useState('')
    const [requests, setRequests] = useState(null)
    const [refunds, setRefunds] = useState(null)
    const [reports, setReports] = useState(null)



    const navigate = useNavigate();
    const torequests = () => {
        navigate('/requests', { state: requests });
    }

    const torefundrequests = () => {
        navigate('/refunds', { state: refunds });
    }

    const toreports = () => {
        navigate('/reports', { state: reports });
    }


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

        <div className='container1'>
            <Sidebar />
            <div className='display-courses' >
                <h2>Add Users</h2>
                <label>Select User</label>
                <br></br>
                <select id="selectedElement">
                    <option value="Admin">Admin</option>
                    <option value="Instructor">Instructor</option>
                    <option value="corporateTrainee">Corporate Trainee</option>
                </select>
                <br></br>
                <br></br>
                <div className='d-flex flex-column justify-content-center align-items-center' >
                    <label>Username:</label>
                    <input style={{ width: "200px" }} id='username' ></input>
                    <label>Password:</label>
                    <input style={{ width: "200px" }} id='password'></input>
                    <button className='display-courses-btn' onClick={() => addUser()}>Add</button>
                    <span>{message}</span>
                </div>
            </div>
            <br></br>
            <br></br>
        </div>
    )
}

export default Admin