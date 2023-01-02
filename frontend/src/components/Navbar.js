
import { Link } from 'react-router-dom'


import React, { useState } from 'react'
import { FiUser } from "react-icons/fi";
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { FaRegTimesCircle } from 'react-icons/fa'
import { BsFillHouseFill } from 'react-icons/bs'
import ChangePassword from './changePassword';

//import './Navbar.css'
const Navbar = () => {
    const user = localStorage.getItem('user')
    return (
        <header>
            <div className="container">
                <Link to="/homepage"> <h1><BsFillHouseFill /></h1></Link>
                {/* <Link to="/"> */}
                <h1>
                    Knowledge Boost
                </h1>
                {/* </Link> */}
                {
                    user &&
                    <button onClick={() => window.location.href = `/changePassword`}>Account <FiUser /></button>
                }
                {
                    !user &&
                    <button onClick={() => window.location.href = `/`}>Login <FiUser /></button>
                }
            </div>
        </header>
    )
}


export default Navbar