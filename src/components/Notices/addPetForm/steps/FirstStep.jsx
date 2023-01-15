import {
	petAdTitle,
	petBirth,
	petBreed,
	petName,
} from 'components/Authorization/Input/inputOptions';
import { Button } from 'components/Reuse/Button/Button';
import { AddPetInput } from 'components/User/AddPetForm/AddPetInput/AddPetInput';
import { AddPetCategory } from '../AddPetRadioItem/AddPetCategory';
import styles from '../NoticesAddPetForm.module.scss';

export const FirstStep = ({ register, errors, nextPage, onCloseModal }) => {
	return (
		<div>
			<p className={styles.heading}>
				Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
				consectetur
			</p>
			<ul className={styles.categor}>
				<li className={styles.categor__item}>
					<AddPetCategory
						data="petCategoriesLost"
						text="lost"
						value="lost"
						field="category"
						register={register}
					/>
				</li>
				<li className={styles.categor__item}>
					<AddPetCategory
						data="petCategoriesGoodHands"
						text="in good hands"
						value="in good hands"
						field="category"
						register={register}
					/>
				</li>
				<li className={styles.categor__item}>
					<AddPetCategory
						data="petCategoriesSell"
						text="sell"
						value="sell"
						field="category"
						register={register}
					/>
				</li>
			</ul>
			<div className={styles.inputWrapper}>
				<AddPetInput
					register={register}
					errors={errors}
					settings={petAdTitle}
				/>
				<AddPetInput register={register} errors={errors} settings={petName} />
				<AddPetInput register={register} errors={errors} settings={petBirth} />
				<AddPetInput register={register} errors={errors} settings={petBreed} />
			</div>

			<div className={styles.buttonWrap}>
				<Button
					type={'button'}
					text={'Cancel'}
					colorType={'white'}
					onClickFunc={onCloseModal}
				/>
				<Button
					type={'button'}
					text={'Next'}
					colorType={'orange'}
					onClickFunc={nextPage}
				/>
			</div>
		</div>
	);
};
