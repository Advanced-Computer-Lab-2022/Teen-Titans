import { useEffect, useState } from "react";

const Home = () => {

    // useEffect(() => { //like ngOnInit

    // }, [])
    return (
        <div className="home">
            <h2>Home</h2>
            <label for="countries">Select your country:</label>
            <br></br>
            <select name="countries" id="countries">
                <option value="Egypt">Egypt</option>
                <option value="Iraq">Iraq</option>
                <option value="Germany">Germany</option>
                <option value="Saudi">Saudi Arabia</option>
            </select>
            <br></br>
            <button type="submit">Submit</button>
        </div>
    )
}

export default Home