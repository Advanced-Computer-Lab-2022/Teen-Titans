import axios from 'axios';
import { useState } from "react"
import { AiFillEdit } from "react-icons/ai";
const EditBiography = ({ }) => {
  const userId = localStorage.getItem('id')
  const user = localStorage.getItem('user')
  const [error, setError] = useState(null)
  const [message, setMessage] = useState('')
  const editBiographyInstructor = async () => {
    // let id = document.getElementById('ID').value;
    const response = await fetch(`/instructor/editBiography/${userId}`, {
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
      <h2>Edit biography  <AiFillEdit /></h2>
      <div className='d-flex flex-column align-items-center justify-content-center'>
        {/* 
        <label>Instructor id:</label>
        <input id='ID'></input> */}
        <label>New Biography:</label>
        <input id='biography'></input>

        <button className='home-button' onClick={() => editBiographyInstructor()}>Edit</button>
        <span>{message}</span>
      </div>
    </div>
  )
}

export default EditBiography