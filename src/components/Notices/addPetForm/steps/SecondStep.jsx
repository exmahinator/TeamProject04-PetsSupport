import { ReactComponent as MaleSvg } from 'shared/images/Notices/el_male.svg';
import { ReactComponent as FemaleSvg } from 'shared/images/Notices/el_female.svg';
import { ReactComponent as UploadCross } from 'shared/images/user/uploadCross.svg';
import { Button } from 'components/Reuse/Button/Button';
import styles from '../NoticesAddPetForm.module.scss';
import { AddPetItem } from '../AddPetItem/AddPetItem';
import { AddPetRadioItem } from '../AddPetRadioItem/AddPetSex';

export const SecondStep = ({
	register,
	onSubmit,
	downPage,
	watch,
}) => {
	const newImage = watch('petImg');

	return (
		<>
			<p className={styles.sex__paragraph}>
				The sex
				<span className={styles.start}>&#42;</span>:
			</p>
			<ul className={styles.sex}>
				<li className={styles.sex__item}>
					<AddPetRadioItem
						data="petMale"
						img={<MaleSvg className={styles.sexSvg} />}
						text="Male"
						value="male"
						field="sex"
						register={register}
					/>
				</li>
				<li className={styles.sex__item}>
					<AddPetRadioItem
						data="petFeMale"
						img={<FemaleSvg />}
						text="Female"
						value="female"
						field="sex"
						register={register}
					/>
				</li>
			</ul>
			<ul>
				<li>
					<AddPetItem
						data="location"
						text="Location"
						field="location"
						register={register}
					/>
				</li>
				<li>
					<AddPetItem
						data="price"
						text="Price"
						field="price"
						register={register}
					/>
				</li>

				<li className={styles.upload}>
					<label htmlFor="petImg" className={styles.upload__label}>
						<p className={styles.upload__text}>Load the pets image:</p>
						<div className={styles.upload__wrapper}>
							{newImage?.length ? (
								<img src={URL.createObjectURL(newImage[0])} alt="poster" />
							) : (
								<UploadCross
									width={48}
									height={48}
									fill="gba(17, 17, 17, 0.6)"
								/>
							)}
						</div>
						<input
							type="file"
							{...register('avatar')}
							id="petImg"
							placeholder="Type name pet"
							className={styles.upload__input}
						/>
					</label>
				</li>
				<li>
					<AddPetItem
						data="comments"
						text="Comments"
						field="comments"
						register={register}
					/>
				</li>
			</ul>

			<div className={styles.buttonWrap}>
				<button
					type="submit"
					onSubmit={onSubmit}
					className={styles.buttonWrap__done}
				>
					Done
				</button>
				<Button
					type={'button'}
					text={'Back'}
					colorType={'white'}
					onClickFunc={downPage}
				/>
			</div>
		</>
	);
};
