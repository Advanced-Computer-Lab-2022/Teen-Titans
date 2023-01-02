import React, { useState } from "react"
import axios from 'axios';
const Login = () => {
    const [userId, setUserId] = useState('')
    const [user, setUser] = useState(null)
    const [userType, setUserType] = useState('')
    const [countryCode, setCountryCode] = useState('')
    const [message, setMessage] = useState('')
    const login = async () => {
        await axios.post(`auth/login`, {
            username: document.getElementById('username').value,
            password: document.getElementById('password').value
        }).then(
            (res) => {
                const json = res.data
                console.log(json);
                if (json) {
                    setUser(json.user)
                    setUserId(json.user.id)
                    setUserType(json.userType)
                    if (json.userType !== 'admin') {
                        if (json.user.country.includes('Egypt'))
                            setCountryCode('EGP')
                        else if (json.user.country.includes('Iraq'))
                            setCountryCode('IQD')
                        else if (json.user.country.includes('Germany'))
                            setCountryCode('EUR')
                        else if (json.user.country.includes('United States of America'))
                            setCountryCode('USD')
                        else if (json.user.country.includes('Saudi Arabia'))
                            setCountryCode('SAR')
                        else if (json.user.country.includes('United Arab Emirates'))
                            setCountryCode('AED')
                    }
                    else {
                        localStorage.setItem('user', 'admin')
                        setCountryCode('EGP')
                    }
                    if (json.userType === 'instructor')
                        localStorage.setItem('user', 'instructor')
                    else if (json.userType === 'corporateTrainee')
                        localStorage.setItem('user', 'corporateTrainee')
                    else if (json.userType === 'individualTrainee')
                        localStorage.setItem('user', 'individualTrainee')

                    localStorage.setItem('id', json.user._id)
                    // console.log(json.user._id);
                }
            }
        )
            .catch(function (error) {
                if (error.response) {
                    // Request made and server responded
                    console.log(error.response.data);
                    if (error.response.data)
                        setMessage(error.response.data.message)
                    // console.log(error.response.status);
                    // console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }

            });
        if (countryCode) {
            console.log("hello");
            const conversionRate = await fetch(`https://v6.exchangerate-api.com/v6/aa42e1fdd9028ad01333558c/pair/USD/${countryCode}`)
            const response = await conversionRate.json()
            // console.log(response);
            localStorage.setItem('country', JSON.stringify(response))
            if (userType !== 'admin' && userType !== 'instructor')
                window.location.href = `/homePage`
            else if (userType === 'admin')
                window.location.href = `/admin`
            else {
                if (userType === 'instructor' && user.agreed)
                    window.location.href = `/homePage`
                else
                    window.location.href = `/CopyrightsPage`
            }
        }
        // if (countryCode &&userType === 'admin' ) {
        //     const conversionRate = await fetch(`https://v6.exchangerate-api.com/v6/aa42e1fdd9028ad01333558c/pair/USD/${countryCode}`)
        //     const response = await conversionRate.json()
        //     // console.log(response);
        //     localStorage.setItem('country', JSON.stringify(response))
        //     window.location.href = `/admin`
        // }

    }
    return (
        <div className="login">
            <h2>Log in</h2>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <label>Enter your username:</label>
                <input id='username' style={{ width: "40%" }}></input>
                <label>Enter your password:</label>
                <input id='password' style={{ width: "40%" }}></input>
                {
                    message &&
                    <span>{message}</span>
                }
                <a href="/forgotPassword"> forgot password? </a>
                {/* window.location.href = `/` */}
                <div>
                    <button className="home-button" onClick={() => login()} >log in</button>
                    or
                    <button onClick={() => window.location.href = "/RegisterPage"} className="home-button"> Register </button>
                </div>
                <a href="/country"> Continue as a guest </a>
            </div>
        </div>
    )
}
export default Login