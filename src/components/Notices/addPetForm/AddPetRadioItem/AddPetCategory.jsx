import styles from '../NoticesAddPetForm.module.scss';

export const AddPetCategory = ({ data, register, field, text, value }) => {
	return (
		<>
			<input
				{...register(field)}
				type="radio"
				value={value}
				id={data}
				placeholder="Type name pet"
				className={styles.category__input}
			/>
			<label htmlFor={data} className={styles.category__label}>
				<p className={styles.category__paragraph}>{text}</p>
			</label>
		</>
	);
};
