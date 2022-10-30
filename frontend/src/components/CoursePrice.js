const CoursePrice = ({course})=>{
    return (
        <div className="course-price">
            <h4>
                {course.title}
            </h4>
            <p><strong>Price:</strong> {course.price}</p>
            <p><strong>course rating:</strong> {course.rating}</p>
            <p><strong>course hours:</strong> {course.hours}</p>
        </div>
    )
}

export default CoursePrice