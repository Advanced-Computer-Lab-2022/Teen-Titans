import React, { useState } from 'react'
import '../index.css'
const ResetPassword = () => {
    const [message, setMessage] = useState('')
    const resetPassword = async () => {
        if (document.getElementById("password").value == "" || document.getElementById("confirmPassword").value == "") {
            setMessage("Please fill all fields!")
        }
        else if (document.getElementById("password").value != document.getElementById("confirmPassword").value) {
            setMessage("Passwords don't match!")
        }
        else {
            const response = await fetch('/users/resetPassword', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "username": document.getElementById("username").value,
                    "password": document.getElementById("password").value
                })
            })
            console.log(JSON.parse(localStorage.getItem('id')));
            if (response.ok) {
                setMessage("Password Reset")
            }
            else {
                setMessage("Something went wrong. Please try again!")
            }
        }
    }
    return (
        <div className='register'>
            <h2>Reset Password</h2>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <label>Username:</label>
                <input id='username'></input>
                <label>Password:</label>
                <input id='password'></input>
                <label>Confirm Password:</label>
                <input id='confirmPassword'></input>
                <button className='home-button' onClick={() => resetPassword()}>Reset</button>
                <span>{message}</span>
            </div>
        </div>
    )
}

export default ResetPassword