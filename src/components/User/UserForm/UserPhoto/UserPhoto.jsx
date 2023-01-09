import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLoadingUpdate } from 'redux/user/user-selectors';
import { toggleIsDisablet } from 'redux/user/user-slice';
import { ReactComponent as UploadIcon } from 'shared/images/user/uploadIcon.svg';
import { ReactComponent as UploadSubmit } from 'shared/images/user/uploadSubmit.svg';

import style from '../UserForm.module.scss';

export const UserPhoto = ({ avatar, watch, register }) => {
	const [edited, setEdited] = useState(false);

	const isLoadingUpdate = useSelector(getLoadingUpdate);
	const dispatch = useDispatch();

	const newImage = watch('avatar');

	useEffect(() => {
		if (isLoadingUpdate) {
			setEdited(false);
		}
	}, [isLoadingUpdate]);

	useEffect(() => {
		if (newImage && newImage[0]) {
			setEdited(true);
			dispatch(toggleIsDisablet());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [newImage]);

	return (
		<>
			<div className={style.avatar__thumb}>
				<div className={style.thumb}>
					<img
						className={style.user__avatar}
						src={
							newImage && newImage[0]
								? URL.createObjectURL(newImage[0])
								: avatar
						}
						alt="default avatar"
						width={233}
						height={233}
					/>
				</div>
				<div className={style.user__uploadThumb}>
					{newImage && newImage[0] && edited ? (
						<button type="submit" className={style.user__uploadSubmit}>
							<UploadSubmit fill="#F59256" width={23} height={23} />
							<p className={style.user__uploadText}>submit</p>
						</button>
					) : (
						<div>
							<label htmlFor="avatar" className={style.user__uploadLabel}>
								<UploadIcon fill="#F59256" width={18} height={18} />
								<p className={style.user__uploadText}>edit Photo</p>
							</label>
							<input
								type="file"
								name="avatar"
								{...register('avatar')}
								id="avatar"
								className={style.user__uploadInput}
							/>
						</div>
					)}
				</div>
			</div>
		</>
	);
};
