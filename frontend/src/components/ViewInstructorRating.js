import { useEffect, useState } from 'react'

const ViewInstructorRating = ({ id }) => {
    const [instructor, setInstructor] = useState(null)
    useEffect(() => {
        const fetchInstructor = async () => {
            const response = await fetch(`/instructorsss/viewInstructorRatings?instructorId=${id}`)
            const json = await response.json()
            if (response.ok) {
                setInstructor(json)
            }
        }
        fetchInstructor()
    }, [])
    return (
        <div>
            {
                instructor &&
                <div className="instructor-details">

                    <h6>rating: {instructor.rating} </h6>
                    <h6>reviews: </h6>
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