import styles from "./styles.module.css";

const Table = ({ courses }) => {
	return (
		<div className={styles.container}>
			<div className={styles.heading}>
				<p className={styles.title_tab}>Title</p>
				<p className={styles.genre_tab}>subjects</p>
				<p className={styles.rating_tab}>Price</p>
			</div>
			{courses?.map((course) => (
				<div className={styles.movie} key={course._id}>
					<div className={styles.title_container}>
						{/* <img src={movie.img} alt="movie" className={styles.movie_img} /> */}
						<p className={styles.movie_title}>
							{course.title} 
						</p>
					</div>
					<div className={styles.genre_container}>
						{/* {course?.subject?.map((subject, index) => (
							<p key={subject} className={styles.movie_genre}>
								{subject}
								{index !== course.subject.length - 1 && "/"}
							</p>
						))} */}
						<p className={styles.movie_title}>
							{course.subject} 
						</p>
						

					</div>
					<div className={styles.rating_container}>
						{/* <img
							src="./images/star.png"
							alt="star"
							className={styles.star_img}
						/> */}
						<p className={styles.movie_rating}>{course.price}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Table;