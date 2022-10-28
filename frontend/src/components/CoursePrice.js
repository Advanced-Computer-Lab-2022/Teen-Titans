const CoursePrice = ({course})=>{
    return (
        <div className="course-price">
            <h4>
                {course.title}
            </h4>
            <p><strong>Price:</strong> {course.price}</p>
        </div>
    )
}

export default CoursePrice