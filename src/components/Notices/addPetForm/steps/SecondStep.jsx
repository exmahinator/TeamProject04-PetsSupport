import { ReactComponent as MaleSvg } from 'shared/images/Notices/el_male.svg';
import { ReactComponent as FemaleSvg } from 'shared/images/Notices/el_female.svg';
import { ReactComponent as UploadCross } from 'shared/images/user/uploadCross.svg';
import { Button } from 'components/Reuse/Button/Button';
import styles from '../NoticesAddPetForm.module.scss';

export const SecondStep = ({
	register,
	onSubmit,
	downPage,
	handlSex,
	watch,
}) => {

	const newImage = watch('petImg');
	console.log('newImage', newImage)

	return (
		<>
			<p className={styles.sex__paragraph}>
				The sex
				<span className={styles.start}>&#42;</span>:
			</p>
			<ul className={styles.sex}>
				<li className={styles.sex__item}>
					<div>
						<MaleSvg className={styles.sex__svg}/>
					</div>
					<label htmlFor="petMale" className={styles.sex__label}>
						<input
							{...register('petMale')}
							type="button"
							id="petMale"
							value="male"
							onClick={handlSex}
							className={styles.sex__input}
						/>
					</label>
				</li>
				<li className={styles.sex__item}>
					<div>
						<FemaleSvg className={styles.sex__svg}/>
					</div>
					<label htmlFor="petFeMale" className={styles.sex__label}>
						<input
							{...register('petFeMale')}
							type="button"
							id="petFeMale"
							value="female"
							onClick={handlSex}
							className={styles.sex__input}
						/>
					</label>
				</li>
			</ul>
			<ul>
				<li>
					<label htmlFor="petLocation" className={styles.label}>
						<p className={styles.paragraph}>
							Location
							<span className={styles.start}>&#42;</span>:
						</p>
						<input
							type="text"
							{...register('petLocation')}
							id="petLocation"
							placeholder="Type name pet"
							className={styles.input}
						/>
					</label>
				</li>
				<li>
					<label htmlFor="petPrice" className={styles.label}>
						<p className={styles.paragraph}>
							Price
							<span className={styles.start}>&#42;</span>:
						</p>
						<input
							type="text"
							{...register('petPrice')}
							id="petPrice"
							placeholder="Type date of birth"
							className={styles.input}
						/>
					</label>
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
							{...register('petImg')}
							id="petImg"
							placeholder="Type name pet"
							className={styles.upload__input}
						/>
					</label>
				</li>
				<li>
					<label htmlFor="petComments" className={styles.label}>
						<p className={styles.paragraph}>Comments</p>
						<input
							type="text"
							{...register('petComments')}
							id="petComments"
							placeholder="Type comment"
							className={styles.commentsInput}
						/>
					</label>
				</li>
			</ul>

			<div className={styles.buttonWrap}>
				<button type="submit" onSubmit={onSubmit} className={styles.buttonWrap__done}>
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
