
import React, { useState } from 'react'

// import axios from 'axios'
const CorporateTraineeSearch = ({ id }) => {
    let query
    const [searchResults, setSearchResults] = useState(null);
    const [showRequest, setshowRequest] = useState(false)
    const country = JSON.parse(localStorage.getItem('country'))
    const conversion_rate = country.conversion_rate
    const target_code = country.target_code
    const userId = localStorage.getItem('id')
    const user = localStorage.getItem('user')
    console.log("id", id);
    console.log("user", user);

    const searchGet = async () => {
        query = document.getElementById("searchKey").value;
        const response = await fetch(`/search?searchInput=${query}`)
        const json = await response.json()
        if (response.ok) {
            setSearchResults(json)
            console.log(searchResults);
        }
    }



    const checkAccess = async (courseId) => {
        console.log("course id:",courseId);
        console.log("trainee id:",id);
        // await axios.get(`http://localhost:5000/users/checkAccess?courseId=${courseId}&traineeId=${id}`).then(
        //     (res) => {
        //         const json = res.data
        //         if (json){
        //         console.log(" data " + res);
        //         console.log(" json " + json);
        //         setshowRequest(false)
                
        //         }
        //         else
        //         setshowRequest(true)
        //     }
        // )
       const response = await fetch(`http://localhost:5000/users/checkAccess?courseId=${courseId}&traineeId=${id}`)
        console.log("after fetch");
console.log("response",response);
        if (response.ok) {
            setshowRequest(false)
            console.log("responsenotok");
        }
        else
            setshowRequest(true)
      
    }

    const requestAccess = async (courseId) => {
        const response = await fetch(`http://localhost:5000/users/requestAccess?courseId=${courseId}&traineeId=${id}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'  
    }},)
    }

    return (
        <div className="col-12 mb-5">
            <div className="mb-3 col-4 mx-auto text-center">
                <input
                    type="text"
                    className="from-control mt-4"
                    id='searchKey'
                    placeholder='search'
                // onChange={(e) => setSearch(e.target.value)}
                />
                <button id='searchButton' onClick={() => searchGet()}>Search</button>

                {searchResults &&
                    searchResults.map((course) => ( 
                        <div className="courses" key={course.id}  onClick={() => checkAccess(course._id) }>
                            <p>{course.title}</p>
                            <p>Price: {course.price * conversion_rate} {target_code}</p>
                            <p>Instructor: {course.instructorName}</p>
                         
                                {showRequest ?
                                <button onClick={() => requestAccess(course._id)}>Request Access</button>
                                  :   <button onClick={() => window.location.href = `/course?user=${user}&courseId=${course._id}&userId=${userId}`}>View Details</button>
                                }
                        </div>
                     
                      
                    ))
                  
                }
            
            </div>
        </div>
    )
}
export default CorporateTraineeSearch