import { ReactComponent as UploadCross } from 'shared/images/user/uploadCross.svg';

import style from './AddPetFormSecondPage.module.scss';

export const AddPetFormSecondPage = ({ register, watch }) => {
	const newImage = watch('petUpload');

	return (
		<>
			<div className={style.uploadThumb}>
				<label htmlFor="petUpload" className={style.petUploadLabel}>
					<p className={style.petUploadLabel__text}>
						Add photo and some comments
					</p>
					<div className={style.crossWrapper}>
						{newImage ? (
							<img
								className={style.image}
								src={URL.createObjectURL(newImage[0])}
								alt="poster"
								// className={style.crossWrapper}
							/>
						) : (
							<UploadCross width={48} height={48} fill="gba(17, 17, 17, 0.6)" />
						)}
					</div>
					<input
						type="file"
						{...register('petUpload')}
						id="petUpload"
						placeholder="Type name pet"
						className={style.uploadInput}
					/>
				</label>
			</div>

			<label htmlFor="petComment" className={style.petCommentLabel}>
				<p className={style.petCommentLabel__text}>Comments</p>
				<textarea
					type="text"
					{...register('petComment')}
					id="petComment"
					placeholder="Type comments"
					className={style.petCommentInput}
				></textarea>
			</label>
		</>
	);
};
