import React from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import Subtitle from './subtitles';

// const Details = ({ courseID }) => {
//     const id = courseID;
//     // console.log(id);
//     const [courseData, setCourseData] = useState(null)
//     useEffect(() => {
//         const getDetails = async () => {
//             const response = await fetch(`/viewCourses/${id}`)
//             const json = await response.json()
//             if (response.ok) {
//                 setCourseData(json)
//             }
//         }
//         getDetails()
//     }, [])
//     return (
//         <div>
//             {
//                 courseData &&
//                 <div className="box" key={courseData.id}>
//                     <Tippy content={
//                         <div>
//                             <h6>{courseData.title}</h6>
//                             <h6>
//                                 <span>Price: {courseData.price} EGP</span><br></br>
//                                 <span>Discount: {courseData.discount} %</span>
//                             </h6>
//                             <h6>{courseData.totalHours} hours</h6>
//                             {/* <h6>
//                             <span>{courseData.subtitles}</span>
//                         </h6> */}
//                         </div>
//                     }></Tippy>
//                 </div>
//             }
//         </div>
//     )
// }

const Details = ({ course }) => {
    const country = JSON.parse(localStorage.getItem('country'))
    const conversion_rate = country.conversion_rate
    const target_code = country.target_code
    return (
        <div>
            {
                course &&
                <div className='onHover-details'>
                    <h5>{course.title}</h5>
                    <h6 className='faded'>{course.totalHours} total hours</h6>
                    <h6>
                        <span className='labels'>Price: </span>
                        <span>{course.price * conversion_rate} {target_code}</span>

                    </h6>
                    <h6>
                        <span className='labels'>Discount: </span>
                        <span>{course.discount} %</span>
                    </h6>
                    <div>
                        <h6 className='labels'>Subtitles:</h6>
                        {
                            course.subtitles && course.subtitles.map((subtitle) => (
                                <Subtitle subtitle={subtitle} />
                            ))
                        }
                    </div>

                    <ul>

                    </ul>
                </div>
            }
        </div>
    )
}
export default Details