import { ReactComponent as UploadIcon } from 'shared/images/user/uploadIcon.svg';
import { ReactComponent as UploadSubmit } from 'shared/images/user/uploadSubmit.svg';

import defaultAvatar from 'shared/images/user/anonymous.png';
import style from '../UserForm.module.scss';

export const UserPhoto = ({
	avtar,
	register,
	uploadClicked,
	onUploadClick,
	onUploadSubmit,
}) => {
	console.log('uploadClicked', uploadClicked);
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
					<button type="submit" onSubmit={onUploadSubmit}>
						<label htmlFor="avatarSubmit" className={style.user__uploadLabel}>
							<UploadSubmit fill="#F59256" width={18} height={18} />
							<p className={style.user__uploadText}>submit</p>
						</label>
						<input
							type="file"
							name="upload"
							{...register('avatar')}
							id="avatarSubmit"
							className={style.user__uploadInput}
						/>
					</button>

					<button type="button" onClick={onUploadClick}>
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
					</button>
				</div>
			</div>
		</>
	);
};
