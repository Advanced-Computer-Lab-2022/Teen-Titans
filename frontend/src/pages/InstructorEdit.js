import axios from 'axios';
import { useState } from "react"

const EditEmail = () => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState(null)
    const handleSubmit = async (e) => {
        e.preventDefault()
       const newEmail={email}
       let id = document.getElementById('ID').value;
        const response = await fetch(`/instructor/editEmail/${id}`, {
          method: 'PATCH',
          body: JSON.stringify(newEmail),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const json = await response.json()
    
        if (!response.ok) {
          setError(json.error)
          console.log('error')
        }
    
        if (response.ok) {
         setEmail('')
         setError(null)
          console.log('Email edited', json)
        }
      }
        
    

      return(
        <div  onSubmit={handleSubmit}>
           
             <label>Instructor id:</label>
             <input id='ID'></input>
            <label> Enter New Email: </label>
            <input type="text"
        onChange={(e) => setEmail(e.target.value )}
        value={email}
      />
                <button>Update</button>
        </div>
      )
}

export default EditEmail