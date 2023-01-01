import React, { useState } from "react"
import axios from 'axios';
const Login = () => {
    const [userId, setUserId] = useState('')
    const [userType, setUserType] = useState('')
    const [countryCode, setCountryCode] = useState('')
    const login = async () => {
        await axios.post(`auth/login`, {
            username: document.getElementById('username').value,
            password: document.getElementById('password').value
        }).then(
            (res) => {
                const json = res.data
                console.log(json);
                if (json) {
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
        if (countryCode) {
            const conversionRate = await fetch(`https://v6.exchangerate-api.com/v6/aa42e1fdd9028ad01333558c/pair/USD/${countryCode}`)
            const response = await conversionRate.json()
            // console.log(response);
            localStorage.setItem('country', JSON.stringify(response))
          
            if(userType!=='admin')
            window.location.href = `/homePage`
            else
            window.location.href = `/admin`
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
                {/* window.location.href = `/` */}
                <div>
                    <button className="home-button" onClick={() => login()} >log in</button>
                    or
                    <a href="/RegisterPage" style={{ marginLeft: "10px" }}> Register </a>
                </div>
                <a href="/country"> Continue as a guest </a>
            </div>
        </div>
    )
}
export default Login