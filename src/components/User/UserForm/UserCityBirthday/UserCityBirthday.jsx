import { ReactComponent as Galocka } from 'shared/images/user/userApprove.svg';
import { ReactComponent as Karandash } from 'shared/images/user/userChange.svg';

import style from '../UserForm.module.scss';

export const UserCityBirthday = ({
	heading,
	data,
	edited,
	editUserData,
	onUploadSubmit,
	register,
}) => {
	return (
		<label htmlFor={heading} key={heading} className={style.user__label}>
			<p className={style.user__text}>{heading}:</p>

			{edited ? (
				<input
					className={style.user__input}
					{...register(`${heading}`)}
					type="text"
					id={heading}
				/>
			) : (
				<p>{data}</p>
			)}

			{/* {edited ? ( */}
			<button
				type="submit"
				id="galo4ka"
				className={style.user__button}
				onSubmit={onUploadSubmit}
			>
				<Galocka fill="currentColor" width="20px" height="20px" />
			</button>
			{/* ) : ( */}
			<div className={style.user__button} onClick={editUserData}>
				<Karandash fill="currentColor" width="20px" height="20px" />
			</div>
			{/* )} */}
		</label>
	);
};
