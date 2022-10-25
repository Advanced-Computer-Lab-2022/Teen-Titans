import { Link } from 'react-router-dom'
// import { useEffect, useState } from "react";
const Navbar = () => {
    const search = async (e) => {
        const response = await fetch(`http://localhost:8000/search/${e}`)
    }

    return (
        <header>
            <div className="container">
                <Link to="/homePage">
                    <h1>OnlineSchool</h1>
                    <input type="text" placeholder='search' id='searchKeyWord'></input>
                    <button type='submit'>Search</button>
                </Link>
            </div>
        </header>
    )
}

export default Navbar