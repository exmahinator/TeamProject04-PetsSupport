import NoticesCategories from 'components/Notices/categories/NoticesCategories';
import { Button } from 'components/Reuse/Button/Button';
import styles from '../NoticesAddPetForm.module.scss'

export const FirstStep = ({ register, nextPage, onCloseModal }) => {
	return (
		<div>
			<p className={styles.heading}>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur </p>
			<NoticesCategories categories={'short'}/>
			<label htmlFor="petTitle" className={styles.label}>
				<p className={styles.paragraph}>Tittle of ad</p>
				<input
					{...register('petTitle')}
					type="text"
					id="petTitle"
					placeholder="Type name pet"
					className={styles.input}
				/>
			</label>
			<label htmlFor="petName" className={styles.label}>
				<p className={styles.paragraph}>Name pet</p>
				<input
					type="text"
					{...register('petName')}
					id="petName"
					placeholder="Type name pet"
					className={styles.input}
				/>
			</label>
			<label htmlFor="petBirth" className={styles.label}>
				<p className={styles.paragraph}>Date of birth</p>
				<input
					type="text"
					{...register('petBirth')}
					id="petBirth"
					placeholder="Type date of birth"
					className={styles.input}
				/>
			</label>
			<label htmlFor="petname" className={styles.label}>
				<p className={styles.paragraph}>Breed</p>
				<input
					type="text"
					{...register('petBreed')}
					id="petBreed"
					placeholder="Type breed"
					className={styles.input}
				/>
			</label>

			<div className={styles.buttonWrap}>
				<Button
					type={'button'}
					text={'Next'}
					colorType={'orange'}
					onClickFunc={nextPage}
				/>
				<Button
					type={'button'}
					text={'Cancel'}
					colorType={'white'}
					onClickFunc={onCloseModal}
				/>
			</div>
		</div>
	);
};
