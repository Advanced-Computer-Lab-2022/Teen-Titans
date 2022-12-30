import { useEffect, useState } from "react";

const Home = () => {
    const setCountry = async (countryCode) => {
        const conversionRate = await fetch(`https://v6.exchangerate-api.com/v6/aa42e1fdd9028ad01333558c/pair/USD/${countryCode}`)
        const response = await conversionRate.json()
        // console.log(response);
        localStorage.setItem('country', JSON.stringify(response))
        window.location.href = `/homePage`
    }

    return (
        <div className="home">
            <h1 style={{ color: "var(--teal)", margin: "10px" }}>Knowledge Boost</h1>
            <label>Please select your country:</label>
            <br></br>
            <select name="countries" id="countries" style={{ color: "var(--teal)", margin: "10px" }}>
                <option value="EGP">Egypt</option>
                <option value="IQD">Iraq</option>
                <option value="EUR">Germany</option>
                <option value="SAR">Saudi Arabia</option>
                <option value="AED">United Arab Emirates</option>
                <option value="USD">United States of America</option>
            </select>
            <br></br>
            <button className="home-button" type="submit" onClick={() => {
                setCountry(document.getElementById('countries').value.toString())
            }}>Submit</button>
        </div>
    )
}

export default Home