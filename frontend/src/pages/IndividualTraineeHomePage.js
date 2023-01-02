import { useEffect, useState } from "react";
import TraineeViewCourses from '../components/TraineeViewCourses'
import AppRate from "../components/Rate";
import Login from "../components/Login";

import axios from 'axios';

// import AppRate from "../components/Rate";
const IndividualTrainee = () => {
    const [id, setId] = useState('');
    useEffect(() => {
        setId(localStorage.getItem("id"))
        // console.log(id);
    })
    // const saveId = () => {
    //     setId(document.getElementById("id").value)
    //     localStorage.setItem('id', id)
    //     localStorage.setItem('user', "individualTrainee")
    // }
   const [Wallet,setWallet]= useState('')
   const country = JSON.parse(localStorage.getItem('country'))
const conversion_rate = country.conversion_rate
const target_code = country.target_code

    const saveId = () => {
        setId(document.getElementById("id").value)
        localStorage.setItem('id', id)
        localStorage.setItem('user', "individualTrainee")
        if (id) {
            fetchWallet()
        }
    }
      
         const fetchWallet= async()=>{
           
console.log("iN FETCH " );
console.log("id " + id);



                await axios.get(`users/wallet?id=${id}`).then(
                    (res) => {
                        const json = res.data
                       
                        console.log( "json" ,json);
                            setWallet(Math.round(json))
                            console.log("wallet data " + Wallet);
                    
                }
                )
                
            
    }
      
    
    return (
        <div>
            {/* <Login/> */}
            {/* <label>Id:</label>
            <input id='id'></input>
            <button onClick={() => saveId()}>Save</button> */}
            {/* <div className="courses">
            </div> */}
            {
                id &&
                <div>
                    <TraineeViewCourses id={id} />
                </div>
            }
        </div>
    )
}

export default IndividualTrainee