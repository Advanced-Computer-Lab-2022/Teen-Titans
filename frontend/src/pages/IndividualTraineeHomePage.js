import {  useEffect ,useState } from "react";
import TraineeViewCourses from '../components/TraineeViewCourses'
import axios from 'axios';

// import AppRate from "../components/Rate";
const IndividualTrainee = () => {
    const [id, setId] = useState('');
   const [Wallet,setWallet]= useState(-1)
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
                            setWallet(json)
                            console.log("wallet data " + Wallet);
                    
                }
                )
                
            
    }
      
    
    return (
        <div className="home">
            <label>Id:</label>
            <input id='id'></input>
            <button onClick={() =>saveId()}>Save</button>
      
            <div className="courses">
                <TraineeViewCourses key={id} id={id} />
            </div>
            {/* <AppRate /> */}
            <div className="wallet">
                <h3>Wallet</h3>
                <h4>{Wallet}</h4>
              
              
            </div>
           
            
        </div>
    )
}

export default IndividualTrainee