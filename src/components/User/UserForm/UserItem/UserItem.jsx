import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDisabledFields, getLoadingUpdate } from 'redux/user/user-selectors';
import { toggleIsDisablet } from 'redux/user/user-slice';
import { ReactComponent as ApproveIcon } from 'shared/images/user/userApprove.svg';
import { ReactComponent as EditIcon } from 'shared/images/user/userChange.svg';

import style from '../UserForm.module.scss';

export const UserItem = ({
	data,
	type = 'text',
	register,
	field,
	text,
	setValue,
}) => {
	const [edited, setEdited] = useState(false);

	const isLoadingUpdate = useSelector(getLoadingUpdate);
	const isDisabled = useSelector(getDisabledFields);
	const dispatch = useDispatch();

	useEffect(() => {
		if (isLoadingUpdate) {
			setEdited(false);
		}
	}, [isLoadingUpdate]);

	const checkDisabled = () => {
		if (!isDisabled) {
			dispatch(toggleIsDisablet());
			setEdited(true);
		}
	};

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
				<p className={style.user__data}>{data}</p>
			)}
			{edited ? (
				<button className={style.user__button} type="submit">
					<ApproveIcon fill="currentColor" width="20px" height="20px" />
				</button>
			) : (
				<div
					className={
						isDisabled ? style.user__button__disabled : style.user__button
					}
					onClick={() => {
						setValue(field, data);
						checkDisabled();
					}}
				>
					<EditIcon
						fill={isDisabled ? 'rgba(17, 17, 17, 0.6)' : 'currentColor'}
						width="20px"
						height="20px"
					/>
				</div>
			)}
		</label>
	);
};