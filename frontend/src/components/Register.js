import React, { useState } from "react"
import axios from 'axios';
const Register = () => {
    const [userId, setUserId] = useState('')
    const [userType, setUserType] = useState('')
    const [countryCode, setCountryCode] = useState('')
    const [message, setMessage] = useState('')
    const register = async () => {
        // console.log(document.getElementById('country').value.toString());
        setCountryCode(document.getElementById('country').value.toString())
        console.log(countryCode);
        let country;
        if (document.getElementById('country').value.toString() === "EGP")
            country = 'Egypt'
        else if (document.getElementById('country').value.toString() === "USD")
            country = "United States of America"
        else if (document.getElementById('country').value.toString() === "IGD")
            country = "Iraq"
        else if (document.getElementById('country').value.toString() === "EUR")
            country = "Germany"
        else if (document.getElementById('country').value.toString() === "AED")
            country = "United Arab Emirates"
        else if (document.getElementById('country').value.toString() === "SAR")
            country = "Saudi Arabia"
        await axios.post(`guest/signup`, {
            username: document.getElementById('username').value,
            password: document.getElementById('password').value,
            email: document.getElementById('email').value,
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            gender: document.getElementById('gender').value.toString(),
            country: country,
            wallet: 0,
            enrolledCourses: []
        }).then(
            (res) => {
                const json = res.data
                console.log(json);
                if (json) {
                    // setUserId(json.id)
                    // setUserType(json.userType)
                    localStorage.setItem('user', 'individualTrainee')
                    localStorage.setItem('id', json._id)
                    setMessage('Registration Successful!')
                    // console.log(json.user._id);
                }
            }
        )
        if (countryCode) {
            const conversionRate = await fetch(`https://v6.exchangerate-api.com/v6/aa42e1fdd9028ad01333558c/pair/USD/${countryCode}`)
            const response = await conversionRate.json()
            // console.log(response);
            localStorage.setItem('country', JSON.stringify(response))
            window.location.href = `/homePage`
        }
    }
    return (
        <div>
            <h2>Register</h2>
            <div className='Register page'>
                <div className="row">
                    <div className="col-6">
                        <label>First Name:</label>
                        <input id='firstName' required></input>
                    </div>
                    <div className="col-6">
                        <label>Last Name:</label>
                        <input id='lastName' required></input>
                    </div>
                </div>
                <label>Email:</label>
                <input id='email' required></input>
                <div className="row">
                    <div className="col">
                        <label>Enter your username:</label>
                        <input id='username' required></input>
                    </div>
                    <div className="col">
                        <label>Enter your password:</label>
                        <input id='password' type="password" required></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <label>Country:</label>
                        <br></br>
                        <select id="country" style={{ color: "var(--teal)", margin: "10px" }}>
                            <option value="EGP">Egypt</option>
                            <option value="IQD">Iraq</option>
                            <option value="EUR">Germany</option>
                            <option value="SAR">Saudi Arabia</option>
                            <option value="AED">United Arab Emirates</option>
                            <option value="USD">United States of America</option>
                        </select>
                    </div>
                    <div className="col-6">
                        <label>Gender:</label>
                        <br></br>
                        <select id="gender" style={{ color: "var(--teal)", margin: "10px" }}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div>
                <button className="home-button" onClick={() => register()} > Sign up</button>
                {/* <a href = "/InstructorHomePage"> Log in </a> */}
                <span>{message}</span>
            </div>
        </div>
    )
}
export default Register