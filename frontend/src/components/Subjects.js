// const Subjects = ({ subjects, filterSubjects, setFilterSubjects }) => {
// 	const onChange = ({ currentTarget: input }) => {
// 		if (input.checked) {
// 			const state = [...filterSubjects, input.value];
// 			setFilterSubjects(state);
// 		} else {
// 			const state = filterSubjects.filter((val) => val !== input.value);
// 			setFilterSubjects(state);
// 		}
// 	};

// 	return (
// 		<div className="container">
// 			<h1 className="heading">Filter By Subjects</h1>
// 			<div className="subjects_container">
// 				{subjects.map((subject) => (
// 					<div className="subjects" key={subject}>
// 						<input
// 							className="subjects_input"
// 							type="checkbox"
// 							value={subject}
// 							onChange={onChange}
// 						/>
// 						<p className="subjects_label">{subject}</p>
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	);
// };

// export default Subjects