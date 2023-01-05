import { ReactComponent as MaleSvg } from 'shared/images/Notices/el_male.svg';
import { ReactComponent as FemaleSvg } from 'shared/images/Notices/el_female.svg';
import { ReactComponent as UploadCross } from 'shared/images/user/uploadCross.svg';
import { Button } from 'components/Reuse/Button/Button';
import styles from '../NoticesAddPetForm.module.scss';

export const SecondStep = ({ register, onSubmit, downPage }) => {
	return (
		<>
			<div>
				<p className={styles.radioP}>The sex*:</p>
				<div className={styles.radioWraper}>
				<label htmlFor="petMale" className={styles.radioLabel}>
					<input
						type="radio"
						{...register('petMale')}
						id="petMale"
						className={styles.customInput}
					/>
					<MaleSvg />
					<span className={styles.customSpan}>Male</span>
				</label>
				<label htmlFor="petFeMale" className={styles.radioLabel}>
					<input
						type="radio"
						{...register('petFeMale')}
						id="petFeMale"
						className={styles.customInput}
					/>
					<FemaleSvg />
					<span className={styles.customSpan}>Female</span>
				</label>
				</div>
			</div>
			<label htmlFor="petLocation" className={styles.label}>
				<p className={styles.paragraph}>Location*:</p>
				<input
					type="text"
					{...register('petLocation')}
					id="petLocation"
					placeholder="Type name pet"
					className={styles.input}
				/>
			</label>
			<label htmlFor="petPrice" className={styles.label}>
				<p className={styles.paragraph}>Price*:</p>
				<input
					type="text"
					{...register('petPrice')}
					id="petPrice"
					placeholder="Type date of birth"
					className={styles.input}
				/>
			</label>
			<label htmlFor="petImg" className={styles.customLabel}>
				<p className={styles.paragraph}>Load the pets image</p>
				<input
					type="file"
					{...register('petImg')}
					id="petImg"
					className={styles.customInput}
				/>
				<div className={styles.crossWrapper}>
					<UploadCross width={48} height={48} fill="gba(17, 17, 17, 0.6)" />
				</div>
			</label>
			<label htmlFor="comments" className={styles.label}>
				<p className={styles.paragraph}>Comments</p>
				<input
					type="text"
					{...register('comments')}
					id="comments"
					placeholder="Type breed"
					className={styles.input}
				/>
			</label>

			<div>
				{/* <Button
					type={'submit'}
					text={'Done'}
					colorType={'orange'}
					onClickFunc={onSubmit}
				/> */}
				<button type="submit" onSubmit={onSubmit}>
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
