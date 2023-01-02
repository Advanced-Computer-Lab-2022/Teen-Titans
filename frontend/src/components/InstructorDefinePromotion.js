import axios from 'axios';
import { useState } from "react"
import SideBar from "./SideBar/AdminSideBar";
const DefinePromotion = () => {
  const [error, setError] = useState(null)
  const [message, setMessage] = useState('')
  const params = new URLSearchParams(window.location.search);
  const courseId = params.get('courseId');
  const definePromotion = async () => {
    //let id = document.getElementById('ID').value;
    const response = await fetch(`/instructor/definePromotion/${courseId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        "amount": document.getElementById("amount").value,
        "endDate": document.getElementById("endDate").value
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (response.ok) {
      setMessage("promotion defined")
    }
    if (response.status.valueOf(302)) {
      setMessage(json.error)
    }
    else {
      setMessage("there is already a discount applied")
    }

  }

  //console.log("alooo"+courseId)



  return (
    <div className='row'>
      <div className='col-2'>
        <SideBar />
      </div>
      <div className='col-10'>
        <div className='display-courses d-flex flex-column justify-content-center align-items-center'>
          <h2>Define course promotion</h2>
          <div className='d-flex flex-column'>
            <label>Discount amount:</label>
            <input id='amount'></input>
            <label>Discount end date:</label>
            <input placeholder='year-month-day' id='endDate'></input>

            <button className='display-courses-btn' onClick={() => definePromotion()}>Done</button>
            <span>{message}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DefinePromotion