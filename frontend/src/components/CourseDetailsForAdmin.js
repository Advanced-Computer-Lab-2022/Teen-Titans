
const CourseDetails = ({ course }) => {
    const country = JSON.parse(localStorage.getItem('country'))
    const conversion_rate = country.conversion_rate
    const target_code = country.target_code
    return (

        <div className="course-details">
            <h4>
                {course.title}
            </h4>
            <p><strong>course rating:</strong> {course.rating}</p>
            <p><strong>course hours:</strong> {course.hours}</p>
            <p><strong>Price:</strong> {course.price * conversion_rate} {target_code}</p>
            <button className="display-courses-btn" onClick={() => window.location.href = `/discount?courseId=${course._id}`}>Define promotion</button>
        </div>

    )
}
//

export default CourseDetails