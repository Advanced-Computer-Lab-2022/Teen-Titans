import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    // FaRegChartBar,
    // FaCommentAlt,
    // FaShoppingBag,
    FaThList,
    FaExclamation,
    FaLockOpen,
    FaWallet,
    FaSignOutAlt,
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const SideBar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const userId = localStorage.getItem('id')
    const user = localStorage.getItem('user')
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/homePage",
            name: "Home",
            icon: <FaTh />
        },
        {
            path: `/${user}HomePage`,
            name: "My Courses",
            icon: <FaTh />
        },
        {
            path: `/createCourse`,
            name: "Create Course",
            icon: <FaTh />
        },
        // {
        //     path: "/viewInstructorRating",
        //     name: "Ratings & Reviews",
        //     icon: <FaSignOutAlt />
        // },
        {
            path: "/",
            name: "Log Out",
            icon: <FaSignOutAlt />
        }
    ]
    return (
        <div className="container1">
            <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Knowledge Boost</h1>
                    <div style={{ marginLeft: isOpen ? "40px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};


export default SideBar;