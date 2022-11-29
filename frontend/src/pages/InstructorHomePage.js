import PriceFilter from "../components/PriceFilter";
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
            <PriceFilter />

            <EditBiography />
            <EditEmail />



        </div>
    )
}
export default InstructorHome