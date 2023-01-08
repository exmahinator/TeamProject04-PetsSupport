import styles from '../NoticesAddPetForm.module.scss';

export const AddPetItem = ({
	data,
	type = 'text',
	register,
	field,
	text,
	img,
	value,
	req,
}) => {
	return (
		<>
			<label htmlFor={data} className={styles.label}>
				{img && <div className={styles.sex__svg}>{img}</div>}
				<p className={styles.paragraph}>
					{text}
					{req && <span className={styles.start}>&#42;</span>}
				</p>
				<input
					{...register(field)}
					type={type}
					value={value}
					id={data}
					placeholder="Type name pet"
					className={styles.input}
				/>
			</label>
		</>
	);
};
