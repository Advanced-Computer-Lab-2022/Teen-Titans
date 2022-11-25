// import axios from 'axios';
// import { useState } from "react"

// const DefinePromotion = () => {
//     const [error, setError] = useState(null)
//     const [message, setMessage] = useState('')
//     const definePromotion = async () => {
//         let id = document.getElementById('ID').value;
//         const response = await fetch(`/instructor/discount/${id}`, {
//           method: 'POST',
//           body: JSON.stringify({
//             "amount":document.getElementById("amount").value,
//             "duration": document.getElementById("duration").value.toString()
//           }),
//           headers: {
//             'Content-Type': 'application/json'
//           }
//         })
//         const json = await response.json()
    
//         if (response.ok) {
//           setMessage("email edited.")
//       }
//       else {
//           setMessage("error")
//       }
    
//       }
        
    

//       return(
//         <div>
//             <h2>Define course promotion</h2>
//             <div className='d-flex flex-column'>

//             <label>Course id:</label>
//                 <input id='ID'></input>
//                 <label>Discount amount:</label>
//                 <input id='amount'></input>
//                 <label>Discount duration:</label>
//                 <input id='duration'></input>
               
//                 <button onClick={() => definePromotion()}>Done</button>
                
//             </div>
//         </div>
//       )
// }

// export default DefinePromotion