//pay with wallet or credit card

import React, { useEffect, useState } from "react"
import Details from "./Details"
import axios from 'axios';
import CoursesPage from "../pages/CoursesPage";
import { AiFillCreditCard } from "react-icons/ai";
import { SlWallet } from "react-icons/sl";

const PaymentMethod = () => {
    const [error, setError] = useState(null)
    const [message, setMessage] = useState('')
    const userId = localStorage.getItem('id')
    const user = localStorage.getItem('user')
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('courseId')
    const pay = async ()=>{
        const response = await fetch('/individualTrainee/registerForCourseUsingWallet', {
          method: 'POST',
          body: JSON.stringify({
              "id":document.getElementById("id").value,
              "courseId":courseId
          }),
          headers: { 'Content-Type': 'application/json' }
    
      })
    
      if (response.ok) {
          setMessage("Registration Successful!")
      }
      else {
          setMessage("Wallet not enough")
      }
          
        }

    return (
<div className="home">
    <h2>Please choose the payment method</h2>
    <input id = 'id'></input>
        <button onClick={() => window.location.href = `/pay?courseId=${courseId}`}>Credit card <AiFillCreditCard/></button>
        <button  onClick={() => pay()}>Wallet <SlWallet /></button>
        <span>{message}</span>
        </div>

    )
    
}

export default PaymentMethod