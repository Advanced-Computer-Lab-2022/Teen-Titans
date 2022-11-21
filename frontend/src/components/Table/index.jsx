import styles from "./styles.module.css";

const Table = ({ courses }) => {
	return (
		<div className={styles.container}>
			<div className={styles.heading}>
				<p className={styles.title_tab}>Title</p>
				<p className={styles.subject_tab}>subjects</p>
				<p className={styles.price_tab}>Price</p>
			</div>
			{courses?.map((course) => (
				<div className={styles.course} key={course._id}>
					<div className={styles.title_container}>
						
						<p className={styles.course_title}>
							{course.title} 
						</p>
					</div>
					<div className={styles.subject_container}>
						<p className={styles.subject_title}>
							{course.subject} 
						</p>
						

					</div>
					<div className={styles.price_container}>
						<p className={styles.course_price}>{course.price}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Table;