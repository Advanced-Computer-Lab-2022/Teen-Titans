import { useEffect, useState } from "react";
import TraineeViewCourses from "../components/TraineeViewCourses";
import AppRate from "../components/Rate";
import Login from "../components/Login";

const CorporateTrainee = () => {
    const [id, setId] = useState('');
    console.log(id,"id in corporate traineehomepage");
    const saveId = () => {
        setId(document.getElementById("id").value)
        localStorage.setItem('id', id)
        localStorage.setItem('user', "corporateTrainee")
     
        
    }
    return (


        
        <div className="home">
            {/* <Login/> */}
            <label>Id:</label>
            <input id='id'></input>
            <button onClick={() => saveId()}>Save</button>

            
                <br></br>
                <br></br>
            {/* <button onClick={getDetails()}>View Courses</button> */}
            <div className="courses" >
                <h1>My Courses</h1>
                <TraineeViewCourses key={id} id={id} />
            </div>
            {/* <AppRate /> */}


            
        </div>
    )
}

export default CorporateTrainee