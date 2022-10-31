import styles from "./styles.module.css";

const Subject = ({ subjects, filterGenre, setfilterGenre }) => {
	const onChange = ({ currentTarget: input }) => {
		if (input.checked) {
			const state = [...filterGenre, input.value];
			setfilterGenre(state);
		} else {
			const state = filterGenre.filter((val) => val !== input.value);
			setfilterGenre(state);
		}
	};

	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>Filter By Subject</h1>
			<div className={styles.genre_container}>
				{subjects?.map((subject) => (
					<div className={styles.genre} key={subject}>
						<input
							className={styles.genre_input}
							type="checkbox"
							value={subject}
							onChange={onChange}
						/>
						<p className={styles.genre_label}>{subject}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Subject;