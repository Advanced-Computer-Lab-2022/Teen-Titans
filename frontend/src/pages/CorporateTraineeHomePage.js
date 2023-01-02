import { useEffect, useState } from "react";
import TraineeViewCourses from "../components/TraineeViewCourses";
import AppRate from "../components/Rate";
import Login from "../components/Login";

const CorporateTrainee = () => {
    const [id, setId] = useState('');
    useEffect(() => {
        setId(localStorage.getItem("id"))
        // console.log(id);
    })
    return (
        <div>
            {
                id &&
                <TraineeViewCourses key={id} id={id} />
            }
        </div>
    )
}

export default CorporateTrainee