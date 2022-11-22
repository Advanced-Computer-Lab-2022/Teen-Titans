import React, { useState } from 'react'
import axios from 'axios';
import '../index.css'
const ChangePassword = () => {
    const [message, setMessage] = useState('')
    const changePassword = async () => {
        if (document.getElementById("password").value == "" || document.getElementById("confirmPassword").value == "" || document.getElementById("oldPassword").value == "") {
            setMessage("Please fill all fields!")
        }
        else if (document.getElementById("password").value != document.getElementById("confirmPassword").value) {
            setMessage("Passwords don't match!")
        }
        else {
            // await axios.patch('/individualTrainee/changePassword', {
            //     id: document.getElementById("id").value,
            //     oldPassword: document.getElementById("oldPassword").value,
            //     password: document.getElementById("oldPassword").value
            // }).then(
            //     (res) => {
            //         const message = res.data
            //         console.log(message)
            //         setMessage(message)

            //     })
            const response = await fetch('/individualTrainee/changePassword', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: {
                    id: document.getElementById("id").value,
                    oldPassword: document.getElementById("oldPassword").value,
                    password: document.getElementById("oldPassword").value
                }
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
                <label>Id:</label>
                <input id='id'></input>
                <label>Old Password:</label>
                <input id='oldPassword'></input>
                <label>New Password:</label>
                <input id='password'></input>
                <label>Confirm Password:</label>
                <input id='confirmPassword'></input>
                <button onClick={() => changePassword()}>Change</button>
                <span>{message}</span>
            </div>
        </div>
    )
}

export default ChangePassword