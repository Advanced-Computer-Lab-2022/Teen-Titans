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
    const pay = async () => {
        const response = await fetch('/individualTrainee/registerForCourseUsingWallet', {
            method: 'POST',
            body: JSON.stringify({
                "id": userId,
                "courseId": courseId
            }),
            headers: { 'Content-Type': 'application/json' }

        })

        if (response.ok) {
            setMessage("Registration Successful!")
        }
        else {
            setMessage("Not enough money in wallet!")
        }

    }

    return (
        <div className="home">
            <h2>Please choose a payment method</h2>
            {/* <input id = 'id'></input> */}
            <button className="paymentButtons" onClick={() => window.location.href = `/pay?courseId=${courseId}`}>Credit card <AiFillCreditCard /></button>
            <button className="paymentButtons" onClick={() => pay()}>Wallet <SlWallet /></button>
            <br></br>
            <span>{message}</span>
        </div>

    )

}

export default PaymentMethod