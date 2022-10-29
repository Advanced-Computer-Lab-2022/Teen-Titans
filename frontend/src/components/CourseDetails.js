import Details from "./partialCourseDetails"
import 'react-tippy/dist/tippy.css'
import Tooltip from 'react-tippy'
const CourseDetails = ({ course }) => {
    return (
        <div style={{ paddingBottom: '20px' }} data-toggle="tooltip" title="<Details />">
            <div className="course-details">
                <h4>
                    {course.title}
                </h4>
                <p><strong>course rating:</strong> {course.rating}</p>
                <p><strong>course hours:</strong> {course.hours}</p>
            </div>
        </div>

    )
}


export default CourseDetails