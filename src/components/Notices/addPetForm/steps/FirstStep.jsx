import { Button } from 'components/Reuse/Button/Button';
import styles from '../NoticesAddPetForm.module.scss';

export const FirstStep = ({
	register,
	nextPage,
	onCloseModal,
	handlCategory,
}) => {
	return (
		<div>
			<p className={styles.heading}>
				Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
				consectetur{' '}
			</p>
			<ul className={styles.categor}>
				<li className={styles.categor__item}>
					<label htmlFor="petCategoriesLost" className={styles.categor__label}>
						<input
							{...register('petCategoriesLost')}
							type="button"
							id="petCategoriesLost"
							value="lost"
							onClick={handlCategory}
							className={styles.categor__input}
						/>
					</label>
				</li>
				<li className={styles.categor__item}>
					<label
						htmlFor="petCategoriesGoodHands"
						className={styles.categor__label}
					>
						<input
							{...register('petCategoriesGoodHands')}
							type="button"
							id="petCategoriesGoodHands"
							value="goodhands"
							onClick={handlCategory}
							className={styles.categor__input}
						/>
					</label>
				</li>
				<li className={styles.categor__item}>
					<label htmlFor="petCategoriesSell" className={styles.categor__label}>
						<input
							{...register('petCategoriesSell')}
							type="button"
							id="petCategoriesSell"
							value="sell"
							onClick={handlCategory}
							className={styles.categor__input}
						/>
					</label>
				</li>
			</ul>
			<ul>
				<li>
					<label htmlFor="petTitle" className={styles.label}>
						<p className={styles.paragraph}>
							Tittle of ad
							<span className={styles.start}>&#42;</span>
						</p>
						<input
							{...register('petTitle')}
							type="text"
							id="petTitle"
							placeholder="Type name pet"
							className={styles.input}
						/>
					</label>
				</li>
				<li>
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
				</li>
				<li>
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
				</li>
				<li>
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
				</li>
			</ul>

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
					onClickFunc={() => onCloseModal()}
				/>
			</div>
		</div>
	);
};
