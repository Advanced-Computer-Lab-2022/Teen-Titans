import axios from 'axios';
import { useState } from "react"

const EditEmail = ({ id }) => {
  const [error, setError] = useState(null)
  const [message, setMessage] = useState('')
  const editEmailInstructor = async () => {
    // let id = document.getElementById('ID').value;
    const response = await fetch(`/instructor/editEmail/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        "email": document.getElementById("email").value.toString(),
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (response.ok) {
      setMessage("email edited.")
    }
    else {
      setMessage("error")
    }

  }



  return (
    <div>
      <h2>Edit email</h2>
      <div className='d-flex flex-column'>

        {/* <label>Instructor id:</label>
        <input id='ID'></input> */}
        <label>New email:</label>
        <input id='email'></input>

        <button onClick={() => editEmailInstructor()}>Edit</button>
        <span>{message}</span>
      </div>
    </div>
  )
}

export default EditEmail