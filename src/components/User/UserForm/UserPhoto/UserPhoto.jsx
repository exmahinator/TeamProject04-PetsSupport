import { ReactComponent as UploadIcon } from 'shared/images/user/uploadIcon.svg';

import defaultAvatar from 'shared/images/user/anonymous.png';
import style from '../UserForm.module.scss';

export const UserPhoto = ({ avtar }) => {
	return (
		<>
			<div className={style.avatar__thumb}>
				<div className={style.thumb}>
					<img
						className={style.user__avatar}
						src={avtar ? avtar : defaultAvatar}
						alt="default avatar"
						width={233}
						height={233}
					/>
				</div>
				<div className={style.user__uploadThumb}>
					<label htmlFor="upload" className={style.user__uploadLabel}>
						<UploadIcon fill="#F59256" width={18} height={18} />
						<p className={style.user__uploadText}>edit Photo</p>
					</label>
					<input
						type="file"
						name="upload"
						id="upload"
						className={style.user__uploadInput}
					/>
				</div>
			</div>
		</>
	);
};
