import axios from 'axios';
import { useState } from "react"

const DefinePromotion = () => {
    const [error, setError] = useState(null)
    const [message, setMessage] = useState('')
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('courseId');
    const definePromotion = async () => {
        //let id = document.getElementById('ID').value;
        const response = await fetch(`/instructor/discount/${courseId}`, {
          method: 'POST',
          body: JSON.stringify({
            "amount":document.getElementById("amount").value,
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
      else {
          setMessage("there is already a discount applied")
      }
    
      }

      //console.log("alooo"+courseId)
        
    

      return(
        <div>
            <h2>Define course promotion</h2>
            <div className='d-flex flex-column'>

            {/* <label>Course id:</label>
                <input id='ID'></input> */}
                <label>Discount amount:</label>
                <input id='amount'></input>
                <label>Discount end date:</label>
                <input placeholder='year-month-day' id='endDate'></input>
               
                <button onClick={() => definePromotion()}>Done</button>
                <span>{message}</span>
            </div>
        </div>
      )
}

export default DefinePromotion