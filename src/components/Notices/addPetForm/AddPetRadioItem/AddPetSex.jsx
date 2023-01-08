import styles from '../NoticesAddPetForm.module.scss';

export const AddPetRadioItem = ({
	data,
	register,
	field,
	text,
	img,
	value,
	req,
}) => {
	return (
		<>
			<input
				{...register(field)}
				type="radio"
				value={value}
				id={data}
				placeholder="Type name pet"
				className={styles.sexInput}
			/>
			<label htmlFor={data} className={styles.sexLabel}>
				{img && <div className={styles.sex__svg}>{img}</div>}
				<p className={styles.paragraph}>
					{text}
					{req && <span className={styles.start}>&#42;</span>}
				</p>
			</label>
		</>
	);
};
