import { useState } from "react";
import TraineeViewCourses from '../components/TraineeViewCourses'
const IndividualTrainee = () => {
    const [id, setId] = useState('');
    const saveId = () => {
        setId(document.getElementById("id").value)
        localStorage.setItem('id', id)
        localStorage.setItem('user', "individualTrainee")
    }
    return (
        <div className="home">
            <label>Id:</label>
            <input id='id'></input>
            <button onClick={() => saveId()}>Save</button>
            <div className="courses">
                <TraineeViewCourses key={id} id={id} />
            </div>
        </div>
    )
}

export default IndividualTrainee