import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../index.css'
import EditBiography from './InstructorEditBiography';
import EditEmail from './InstructorEditEmail';
import { AiFillEdit } from "react-icons/ai";

const ChangePassword = () => {
    const [message, setMessage] = useState('')
    const userId = localStorage.getItem('id')
    const user = localStorage.getItem('user')
    const [show, setShow] = useState(false)


    useEffect(() => {
        const check = async () => {
           if(user==='instructor')
           setShow(true)
        }

       
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
            // await axios.patch('/individualTrainee/changePassword', {
            //     id: document.getElementById("id").value,
            //     oldPassword: document.getElementById("oldPassword").value,
            //     password: document.getElementById("oldPassword").value
            // }).then(
            //     (res) => {
            //         const message = res.data
            //         console.log(message)
            //         setMessage(message)

            //     })
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
            <div className='login' >
            <h2>Change Password<AiFillEdit/></h2>

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
                    <button style={{
                        width: "300px",
                        left: "40%",
                        width: "250px",
                        height: "40px",
                        position: "relative"
                    }} onClick={() => changePassword()}>Change</button>
                    <span>{message}</span>
                </div>
            </div>
            {setShow ?
                <div className='login' >
                    <EditBiography />
                    <EditEmail />
                </div> : null}

        </div>
    )
}

export default ChangePassword