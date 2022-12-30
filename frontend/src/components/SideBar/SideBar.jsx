import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    // FaRegChartBar,
    // FaCommentAlt,
    // FaShoppingBag,
    // FaThList,
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
            name: "Dashboard",
            icon: <FaTh />
        },
        {
            path: "/login",
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
import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    // FaRegChartBar,
    // FaCommentAlt,
    // FaShoppingBag,
    // FaThList,
    FaExclamation,
    FaLockOpen,
    FaWallet,
    FaSignOutAlt,
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const SideBar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/HomePage",
            name:"Home",
            icon:<FaTh/>
        },
        {
            path:"/admin",
            name:"Users",
            icon:<FaUserAlt/>
        },
        {
            path:"/reports",
            name:"Reports",
            icon:<FaExclamation/>
        },
        {
            path:"/requests",
            name:"Requests",
            icon:<FaLockOpen/>
        },
        {
            path:"/refunds",
            name:"Refunds",
            icon:<FaWallet/>
        },
        {
            path:"/LogIn",
            name:"Log Out",
            icon:<FaSignOutAlt/>
        }
    ]
    return (
        <div className="container1">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Knowledge Boost</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default SideBar;