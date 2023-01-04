import styles from '../NoticesAddPetForm.module.scss';

import { ReactComponent as MaleSvg } from 'shared/images/Notices/el_male.svg';
import { ReactComponent as FemaleSvg } from 'shared/images/Notices/el_female.svg';
import { ReactComponent as Upload } from 'shared/images/Notices/Notices-plusForm.svg';
import { Button } from 'components/Reuse/Button/Button';

export const SecondStep = ({ register, onSubmit, downPage }) => {
	return (
		<>
			<div>
				<label htmlFor="petMale">
					<input type="radio" {...register('petMale')} id="petMale" />
					<FemaleSvg />
				</label>
				<label htmlFor="petFeMale">
					<input type="radio" {...register('petFeMale')} id="petFeMale" />
					<MaleSvg />
				</label>
			</div>
			<label htmlFor="petLocation">
				<p>Location*:</p>
				<input
					type="text"
					{...register('petLocation')}
					id="petLocation"
					placeholder="Type name pet"
				/>
			</label>
			<label htmlFor="petPrice">
				<p>Price*:</p>
				<input
					type="text"
					{...register('petPrice')}
					id="petPrice"
					placeholder="Type date of birth"
				/>
			</label>
			<label htmlFor="petImg" className={styles.custom}>
				<p>Load the pets image</p>
				<input
					type="file"
					{...register('petImg')}
					id="petImg"
					className={styles.upload}
				/>
				<div>
					<Upload />
				</div>
			</label>
			<label htmlFor="comments">
				<p>Comments</p>
				<input
					type="text"
					{...register('comments')}
					id="comments"
					placeholder="Type breed"
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
