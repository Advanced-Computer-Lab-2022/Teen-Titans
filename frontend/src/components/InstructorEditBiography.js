import axios from 'axios';
import { useState } from "react"
import { AiFillEdit } from "react-icons/ai";
const EditBiography = ({  }) => {
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
      <h2>Edit biography  <AiFillEdit/></h2>
      <div className='d-flex flex-column'>
        {/* 
        <label>Instructor id:</label>
        <input id='ID'></input> */}
        <label style={{
                    width: "200px",
                    left: "40%",
                    width: "250px",
                    height: "40px",
                    position: "relative"
                }}>New Biography:</label>
        <input style={{
                    width: "200px",
                    left: "40%",
                    width: "250px",
                    height: "40px",
                    position: "relative"
                }} id='biography'></input>

        <button style={{width: "300px",
       left:"40%",
       width:"250px",
       height:"40px",
       position: "relative" }}onClick={() => editBiographyInstructor()}>Edit</button>
        <span>{message}</span>
      </div>
    </div>
  )
}

export default EditBiography