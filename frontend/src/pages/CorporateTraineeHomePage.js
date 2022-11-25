import { useEffect, useState } from "react";
import TraineeViewCourses from "../components/TraineeViewCourses";
// import axios from 'axios';
const CorporateTrainee = () => {
    const [id, setId] = useState('');
    // const [courseData, setCourseData] = useState(null)
    // const userId = localStorage.getItem('id')
    // const user = localStorage.getItem('user')
    // const country = JSON.parse(localStorage.getItem('country'))
    // const conversion_rate = country.conversion_rate
    // const target_code = country.target_code
    // const getDetails = async () => {
    //     if (user && userId) {
    //         await axios.get(`users/${user}Courses?id=${userId}`).then(
    //             (res) => {
    //                 const json = res.data
    //                 if (json)
    //                     setCourseData(json)
    //                 console.log(json);
    //             }
    //         )
    //     }
    // }
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
                <TraineeViewCourses key={id} id={id} />
            </div>
        </div>
    )
}

export default CorporateTrainee