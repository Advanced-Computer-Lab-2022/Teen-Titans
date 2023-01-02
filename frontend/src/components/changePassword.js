import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../index.css'
import EditBiography from './InstructorEditBiography';
import EditEmail from './InstructorEditEmail';
import ViewInstructorRating from "./ViewInstructorRating";
import { AiFillEdit } from "react-icons/ai";
import { AiFillWallet } from "react-icons/ai";

const ChangePassword = () => {
    const [message, setMessage] = useState('')
    const userId = localStorage.getItem('id')
    const user = localStorage.getItem('user')
    const [show, setShow] = useState(false)
    const [money, setMoney] = useState("")
    const [userInfo, setUserInfo] = useState(null)
    const country = JSON.parse(localStorage.getItem('country'))
    const conversion_rate = country.conversion_rate
    const target_code = country.target_code
    useEffect(() => {
        const check = async () => {
            if (user === 'instructor')
                setShow(true)
        }
        const getMoney = async () => {
            const response = await fetch(`http://localhost:5000/users/viewMoneyOwed?instructorId=${userId}`)
            const json = await response.json()
            setMoney(json)
            console.log(json + "money")
        }
        const getUser = async () => {
            const response = await fetch(`http://localhost:5000/users/getUser?id=${userId}`)
            const json = await response.json()
            if (json)
                setUserInfo(json)
        }
        getUser()
        getMoney()
        check()
    }, [])

    const changePassword = async () => {

        if (document.getElementById("password").value == "" || document.getElementById("confirmPassword").value == "" || document.getElementById("oldPassword").value == "") {
            setMessage("Please fill all fields!")
        }
        else if (document.getElementById("password").value != document.getElementById("confirmPassword").value) {
            setMessage("Passwords don't match!")
        }
        else {
            const response = await fetch(`${user}/changePassword`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "id": userId,
                    "oldPassword": document.getElementById("oldPassword").value,
                    "password": document.getElementById("password").value
                })
            })
            const json = await response.json();
            if (response.ok) {
                setMessage("Password Reset")
            }
            else {
                setMessage(json.message)
            }
        }
    }
    return (
        <div>
            {
                userInfo &&
                <div>
                    <h1>{userInfo.firstName} {userInfo.lastName}</h1>
                    <p>{userInfo.username}</p>
                    <p>{userInfo.email}</p>
                </div>
            }
            <div className='register' >
                <h2>Change Password<AiFillEdit /></h2>

                <div className='d-flex flex-column'>
                    {/* <label>Id:</label>
                <input id='id'></input> */}
                    <label  >Old Password:</label>
                    <input style={{
                        width: "200px",
                        left: "40%",
                        width: "250px",
                        height: "40px",
                        position: "relative",
                    }} id='oldPassword'></input>

                    <label >New Password:</label>
                    <input style={{
                        width: "200px",
                        left: "40%",
                        width: "250px",
                        height: "40px",
                        position: "relative"
                    }} id='password'></input>

                    <label  >Confirm Password:</label>
                    <input style={{
                        width: "300px",
                        left: "40%",
                        width: "250px",
                        height: "40px",
                        position: "relative"
                    }} id='confirmPassword'></input>
                    <br></br>
                    <button className='home-button' style={{ width: "20%", left: "41%", position: "relative" }} onClick={() => changePassword()}>Change</button>
                    <span>{message}</span>
                </div>
            </div>
            {show ?
                <div className='settings' >
                    <EditBiography />
                    <EditEmail />
                    <div>
                        <h2 >Money Owed per month<AiFillWallet /></h2>
                        <p> {money * conversion_rate}{target_code}</p>
                    </div>
                    <ViewInstructorRating></ViewInstructorRating>
                </div> : null}

        </div>
    )
}

export default ChangePassword