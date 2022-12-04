import axios from 'axios';
import { useState } from "react"

const EditBiography = ({ id }) => {
  const [error, setError] = useState(null)
  const [message, setMessage] = useState('')
  const editBiographyInstructor = async () => {
    // let id = document.getElementById('ID').value;
    const response = await fetch(`/instructor/editBiography/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        "biography": document.getElementById("biography").value.toString(),
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (response.ok) {
      setMessage("biography edited.")
    }
    else {
      setMessage("error")
    }

  }



  return (
    <div>
      <h2>Edit biography</h2>
      <div className='d-flex flex-column'>
        {/* 
        <label>Instructor id:</label>
        <input id='ID'></input> */}
        <label>New Biography:</label>
        <input id='biography'></input>

        <button onClick={() => editBiographyInstructor()}>Edit</button>

      </div>
    </div>
  )
}

export default EditBiography