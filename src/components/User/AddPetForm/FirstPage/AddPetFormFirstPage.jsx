import style from './AddPetFormFirstPage.module.scss';

export const AddPetFormFirstPage = ({ register }) => {

	return (
		<>
			<label htmlFor="petName" className={style.label}>
				<p className={style.label__text}>Name pet</p>
				<input
					type="text"
					{...register('petName')}
					id="petName"
					placeholder="Type name pet"
					className={style.input}
				/>
			</label>
			<label htmlFor="petBirth" className={style.label}>
				<p className={style.label__text}>Date of birth</p>
				<input
					type="text"
					{...register('petBirth')}
					id="petBirth"
					placeholder="Type date of birth"
					className={style.input}
				/>
			</label>
			<label htmlFor="petname" className={style.label}>
				<p className={style.label__text}>Breed</p>
				<input
					type="petBreed"
					{...register('petBreed')}
					id="petBreed"
					placeholder="Type breed"
					className={style.input}
				/>
			</label>
		</>
	);
};
