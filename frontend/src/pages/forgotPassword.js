import React, { useState } from 'react'
import '../index.css'
const ForgotPassword = () => {
    const [message, setMessage] = useState('')
    const forgotPassword = async () => {
        if (document.getElementById("email").value == "") {
            setMessage("Please enter your email!")
        }
        else {
            const response = await fetch('/users/forgotPassword', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "email": document.getElementById("email").value.toString()
                })
            })
            if (response.ok) {
                setMessage("Please check your email for the link to reset your password!")
                const user = await response.json();
                const id = await user._id;
                localStorage.setItem("id", JSON.stringify(await id))
            }
            else {
                setMessage("Email not found. Please make sure you entered the correct email!")
            }
        }
    }
    return (
        <div>
            <h2>Forgot Your Password?</h2>
            <div className='d-flex flex-column'>
                <label>Email:</label>
                <input id='email'></input>
                <button onClick={() => forgotPassword()}>Send Email</button>
                <span>{message}</span>
            </div>
        </div>
    )
}

export default ForgotPassword