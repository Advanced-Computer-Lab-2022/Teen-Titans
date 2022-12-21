import {  useEffect ,useState } from "react";
import TraineeViewCourses from '../components/TraineeViewCourses'
import axios from 'axios';

// import AppRate from "../components/Rate";
const IndividualTrainee = () => {
    const [id, setId] = useState('');
   const [Wallet,setWallet]= useState(-1)
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
        <div className="home">
            <label>Id:</label>
            <input id='id'></input>
            <button onClick={() =>saveId()}>Save</button>
      

            <div className="courses" >
                <h1>My Courses</h1>
                <TraineeViewCourses key={id} id={id} />
            </div>


            {/* <AppRate /> */}
            <div className="wallet">
                <h3>Wallet</h3>
                <h4>{Wallet} {target_code}</h4>
              
              
            </div>
           
            
        </div>
    )
}

export default IndividualTrainee