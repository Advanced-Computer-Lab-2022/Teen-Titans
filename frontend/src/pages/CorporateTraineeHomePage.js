import { useEffect, useState } from "react";
//import TraineeViewCourses from "../components/TraineeViewCourses";
import App from "../components/Rate2";
// import axios from 'axios';
const CorporateTrainee = () => {
    const [id, setId] = useState('');
   
     
    const saveId = () => {
        setId(document.getElementById("id").value)
        localStorage.setItem('id', id)
        localStorage.setItem('user', "corporateTrainee")
    }
    return (
        <div className="home">
            <label>Id:</label>
            <input id='id'></input>
            <button onClick={() => saveId()}>Save</button>
            {/* <button onClick={getDetails()}>View Courses</button> */}
            <div className="courses">
                {/* <TraineeViewCourses key={id} id={id} /> */}
            </div>
            <App/>
        </div>
    )
}

export default CorporateTrainee