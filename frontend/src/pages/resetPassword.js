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
                    "id": JSON.parse(localStorage.getItem('id')),
                    "password": document.getElementById("password").value
                })
            })
            if (response.ok) {
                setMessage("Password Reset")
            }
            else {
                setMessage("Something went wrong. Please try again!")
            }
        }
    }
    return (
        <div>
            <h2>Reset Password</h2>
            <div className='d-flex flex-column'>
                <label>Password:</label>
                <input id='password'></input>
                <label>Confirm Password:</label>
                <input id='confirmPassword'></input>
                <button onClick={() => resetPassword()}>Reset</button>
                <span>{message}</span>
            </div>
        </div>
    )
}

export default ResetPassword