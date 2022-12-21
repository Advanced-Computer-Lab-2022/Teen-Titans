// const Table = ({ courses }) => {
// 	return (
// 		<div className="container">
// 			<div className="heading">
// 				<p className="title_tab">Title</p>
// 				<p className="subjects_tab">Subjects</p>
// 				<p className="rating_tab">Rating</p>
// 			</div>
// 			{courses.map((course) => (
// 				<div className="course" key={course._id}>
// 					<div className="title_container">
						
// 						<p className="course_title">
// 							{course.name} ({course.year})
// 						</p>
// 					</div>
// 					<div className="subjects_container">
// 						{/* {course.subjects.map((subjects, index) => (
// 							<p key={subjects} className="course_subjects">
// 								{subjects}
// 								{index !== course.subjects.length - 1 && "/"}
// 							</p>
// 						))} */}
//                         <p className='course_subjects'>{course.subject}</p>
// 					</div>
// 					<div className="rating_container">
						
// 						<p className="course_rating">{course.rating}</p>
// 					</div>
// 				</div>
// 			))}
// 		</div>
// 	);
// };

// export default Table