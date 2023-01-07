import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getLoadingUpdate } from 'redux/user/user-selectors';
import { ReactComponent as ApproveIcon } from 'shared/images/user/userApprove.svg';
import { ReactComponent as EditIcon } from 'shared/images/user/userChange.svg';

import style from '../UserForm.module.scss';

export const UserItem = ({
	data,
	type = 'text',
	register,
	field,
	text,
	// edited,
	// setEdited
}) => {
	console.log(data);
	const isLoadingUpdate = useSelector(getLoadingUpdate)

	const [edited, setEdited] = useState(false);

	useEffect(() => {
	if (isLoadingUpdate) {
	setEdited(false)
}
	}, [isLoadingUpdate])
	

	return (
		<label htmlFor={data} className={style.user__label}>
			<p className={style.user__text}>{text}:</p>
			{edited ? (
				<input
					{...register(field)}
					className={style.user__input}
					type={type}
					id={data}
				/>
			) : (
				<p>{data}</p>
			)}
			{edited ? (
				<button className={style.user__button} type="submit">
					<ApproveIcon fill="currentColor" width="20px" height="20px" />
				</button>
			) : (
				<div className={style.user__button} onClick={() => setEdited(true)}>
					<EditIcon fill="currentColor" width="20px" height="20px" />
				</div>
			)}
		</label>
	);
};
