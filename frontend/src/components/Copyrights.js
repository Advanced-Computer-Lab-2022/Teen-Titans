import { useState } from "react"
import axios from 'axios';
const Copyrights = () => {
    const [agree, setAgree] = useState(false);
    const percentage = 30
    const userId = localStorage.getItem('id')
    const onAgree = async () => {
        setAgree(true);
        await axios.patch(`instructor/agree?id=${userId}`)
            .then(
                (res) => {
                    const json = res.data
                    if (json) {
                        window.location.href = "/homePage"
                    }
                }
            )
    }
    const onRefuse = () => {
        setAgree(false);
        console.log(agree);
        window.location.href = "/"
    }

    return (
        <div className="register">
            <h1> INTELLECTUAL PROPERTY RIGHTS</h1>
            <p>Unless otherwise indicated, the site is our proprietary property and all source code, databases, functionality, software,
                website designs, audio, video, text, photographs and graphics on the site and the trademarks, service marks and logos contained
                therein are owned by us and licensed to us and are protected by copyright and trademark laws and various other intellectual
                property rights. The content is provided on the site for your information and personal use only. Except as expressly provided in
                these terms of use, no part of the site and no content may be copied, uploaded, posted, sold, licensed or otherwise exploited for
                any commercial purpose whatsoever, without our express prior written permission.
            </p>
            <h1> KNOWLEDGE BOOST'S RIGHTS ON VIDEOS</h1>
            <p>Knowledge Boost will take a {percentage}% profit on each video per registered trainee</p>
            <button className="home-button" onClick={() => onAgree()} > I agree</button>
            <button className="home-button" onClick={() => onRefuse()} > I don't agree</button>
        </div>
    )
}
export default Copyrights