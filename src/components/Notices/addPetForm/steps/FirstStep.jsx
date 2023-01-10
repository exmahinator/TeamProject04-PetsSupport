import {
	petAdTitle,
	petBirth,
	petBreed,
	petName,
} from 'components/Authorization/Input/inputOptions';
import { Button } from 'components/Reuse/Button/Button';
import { AddPetInput } from 'components/User/AddPetForm/AddPetInput/AddPetInput';
// import { AddPetItem } from '../AddPetItem/AddPetItem';
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
						text="goodhands"
						value="goodhands"
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

			<AddPetInput register={register} errors={errors} settings={petAdTitle} />
			<AddPetInput register={register} errors={errors} settings={petName} />
			<AddPetInput register={register} errors={errors} settings={petBirth} />
			<AddPetInput register={register} errors={errors} settings={petBreed} />
			</div>
			{/* <ul>
				<li>
					<AddPetItem
						data="title"
						text="Tittle of ad"
						field="title"
						register={register}
						req={true}
					/>
				</li>
				<li>
					<AddPetItem
						data="name"
						text="Name pet"
						field="name"
						register={register}
					/>
				</li>
				<li>
					<AddPetItem
						data="birthday"
						text="Date of birth"
						field="birthday"
						register={register}
					/>
				</li>
				<li>
					<AddPetItem
						data="breed"
						text="Breed"
						field="breed"
						register={register}
					/>
				</li>
			</ul> */}

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
