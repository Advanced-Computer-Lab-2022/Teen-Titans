import PriceFilter from "../components/PriceFilter";
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
        </div>
    )
}
export default InstructorHome