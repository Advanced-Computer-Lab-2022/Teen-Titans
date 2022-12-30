import { useEffect, useState } from "react";
import TraineeViewCourses from '../components/TraineeViewCourses'
import AppRate from "../components/Rate";
import Login from "../components/Login";

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