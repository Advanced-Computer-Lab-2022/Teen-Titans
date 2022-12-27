
const CourseDetails = ({ course }) => {
    const country = JSON.parse(localStorage.getItem('country'))
    const conversion_rate = country.conversion_rate
    const target_code = country.target_code
    return (
       
  <div className="prices">
   
        <div className="course-details">
           <h4> Popular!</h4>
            <h4>
           

                {course.title}
                
            </h4>
            <p><strong>course rating:</strong> {course.rating}</p>
            <p><strong>course hours:</strong> {course.hours}</p>
            <p><strong>Price:</strong> {course.price * conversion_rate} {target_code}</p>
            <button className='videos' onClick={() => window.location.href = `/watchVideo?courseId=${course._id}`}>watch a preview video</button>
            <button className='videos' onClick={() => window.location.href = `/paymentMethod?courseId=${course._id}`}>Enroll now</button>

        </div>
        </div>
    )   
}
//

export default CourseDetails