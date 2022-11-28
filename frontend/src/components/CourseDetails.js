
const CourseDetails = ({ course }) => {
    return (
        <div className="course-details">
            <h4>
                {course.title}
            </h4>
            <p><strong>course rating:</strong> {course.rating}</p>
            <p><strong>course hours:</strong> {course.hours}</p>
        </div>

    )   
}


export default CourseDetails