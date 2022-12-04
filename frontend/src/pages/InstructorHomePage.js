import PriceFilter from "../components/PriceFilter";
import ViewInstructorRating from "../components/ViewInstructorRating";

import EditBiography from "../components/InstructorEditBiography";
import EditEmail from "../components/InstructorEditEmail";
import DefinePromotion from "../components/InstructorDefinePromotion";
import { useState } from "react";
const InstructorHome = () => {
    const [id, setId] = useState('');
    const saveId = () => {
        setId(document.getElementById("id").value)
        localStorage.setItem('id', id)
        localStorage.setItem('user', "instructor")
    }
    return (
        <div className="home">
            <label>Id:</label>
            <input id='id'></input>
            <button onClick={() => saveId()}>Save</button>
            {
                id &&
                <div>
                    <ViewInstructorRating id={id} />
                    <PriceFilter />
                    <EditBiography id={id} />
                    <EditEmail id={id} />
                </div>
            }

        </div>
    )
}
export default InstructorHome