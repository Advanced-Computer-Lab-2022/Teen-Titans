import { useEffect, useState } from 'react'
import SideBar from './SideBar/InstructorSideBar'

const ViewInstructorRating = ({  }) => {
    const [instructor, setInstructor] = useState(null)
    const userId = localStorage.getItem('id')
    const user = localStorage.getItem('user')
    useEffect(() => {
        const fetchInstructor = async () => {
            const response = await fetch(`/instructorsss/viewInstructorRatings?instructorId=${userId}`)
            const json = await response.json()
            if (response.ok) {
                setInstructor(json)
            }
        }
        fetchInstructor()
    }, [])
    return (
        <div style={{position:"absolute",left:"900px" ,top:"100px"}} >
            {/* <SideBar></SideBar> */}
            {
                instructor &&
                <div className="instructor-details">

                    <h5 style={{color:"teal"}} > My Rating{instructor.rating.toFixed(2)} </h5> 
                    <h5 style={{color:"teal"}} >My Reviews:</h5>
                    {
                        instructor.reviews &&
                        instructor.reviews.map((review) => (
                            <h6>{review}</h6>
                        ))
                    }
                </div>
            }
            <hr></hr>
        </div>
    )
}
export default ViewInstructorRating