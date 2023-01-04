import { useState } from 'react';
import { ReactComponent as ApproveIcon } from 'shared/images/user/userApprove.svg';
import { ReactComponent as EditIcon } from 'shared/images/user/userChange.svg';
import { ReactComponent as UploadIcon } from 'shared/images/user/uploadIcon.svg';
import { LogOut } from '../LogOut/LogOut';

import s from './UserForm.module.scss';
import userData from './user.json';
import defaultAvatar from 'shared/images/user/anonymous.png';

export const UserForm = () => {
	const [userInput, setUserInput] = useState('');
	const [isDisabled, setIsDisabled] = useState(false);
	const [edited, setEdited] = useState(false);

	const onChange = e => {
		const data = e.target.value;
		setUserInput(data);
		console.log('input', userInput);
	};

	const editUserData = e => {
		setIsDisabled(!isDisabled);
		setEdited(prevValue => !prevValue);

		e.currentTarget.disabled = false;
		console.log('currentTarget', e.currentTarget.disabled);
	};

	return (
		<div className={s.user}>
			<form className={s.user__form}>
				<div className={s.avatar__thumb}>
					<div className={s.thumb}>
						<img
							className={s.user__avatar}
							src={defaultAvatar}
							alt="default avatar"
							width={233}
							height={233}
						/>
					</div>
					<div className={s.user__uploadThumb}>
						<label htmlFor="upload" className={s.user__uploadLabel}>
							<UploadIcon fill="#F59256" width={18} height={18} />
							<p className={s.user__uploadText}>edit Photo</p>
						</label>
						<input
							type="file"
							name="upload"
							id="upload"
							className={s.user__uploadInput}
						/>
					</div>
				</div>
				<div className={s.user__meta}>
					{Object.entries(userData).map(([key, value]) => {
						switch (key) {
							case 'email':
								return (
									<label htmlFor={key} key={key} className={s.user__label}>
										<p className={s.user__text}>{key}:</p>
										<input
											className={s.user__input}
											type="email"
											placeholder={value}
											id={key}
											value={userInput}
											disabled={isDisabled}
											onChange={onChange}
										/>
										<button
											className={s.user__button}
											type="button"
											onClick={editUserData}
											disabled={isDisabled}
										>
											{edited ? (
												<ApproveIcon
													fill="currentColor"
													width='20px'
													height='20px'
												/>
											) : (
												<EditIcon fill="currentColor" width='20px' height='20px' />
											)}
										</button>
									</label>
								);
							case 'phone':
								return (
									<label htmlFor={key} key={key} className={s.user__label}>
										<p className={s.user__text}>{key}:</p>
										<input
											className={s.user__input}
											type="tel"
											id={key}
											value={value}
											disabled={isDisabled}
										/>
										<button type="button" className={s.user__button}>
											{edited ? (
												<ApproveIcon
													fill="currentColor"
													width='20px'
													height='20px'
												/>
											) : (
												<EditIcon fill="currentColor" width='20px' height='20px' />
											)}
										</button>
									</label>
								);
							default:
								return (
									<label htmlFor={key} key={key} className={s.user__label}>
										<p className={s.user__text}>{key}:</p>
										<input
											className={s.user__input}
											type="text"
											id={key}
											value={value}
											disabled={isDisabled}
										/>
										<button type="button" className={s.user__button}>
											{edited ? (
												<ApproveIcon
													fill="currentColor"
													width='20px'
													height='20px'
												/>
											) : (
												<EditIcon fill="currentColor" width='20px' height='20px' />
											)}
										</button>
									</label>
								);
						}
					})}
				</div>
			</form>

			<LogOut />
		</div>
	);
};
