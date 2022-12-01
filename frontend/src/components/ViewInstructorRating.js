const ViewInstructorRating = ({ instructor }) => {
    return (
        <div>
            <div className="instructor-details">
               
                <h6>rating: {instructor.rating} </h6>
                <h6>reviews: </h6>
                {
                    instructor.reviews.map((review) => (
                        <h6>{review}</h6>
                    ))
                }
            </div>
            <hr></hr>
        </div>
    )
}
export default ViewInstructorRating