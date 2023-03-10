import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { updateUserData } from 'redux/user/user-operations';
import { createFormData } from 'shared/functions/createFormData';

import { itemInfo } from './itemInfo';
import { UserItem } from './UserItem/UserItem';
import { UserPhoto } from './UserPhoto/UserPhoto';
import { LogOut } from '../LogOut/LogOut';
import { UserSkeletonMobile } from 'components/Reuse/Loaders/Skeleton/UserSkeletonMobile';

import style from './UserForm.module.scss';

export const UserForm = ({ formData }) => {
	const {
		userInfo: { name, email, birthday, phone, city },
		userAvatar,
		isUserLoading,
		isCurrentLoading,
	} = formData;
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors },
	} = useForm({});
	const dispatch = useDispatch();

	const normalizeUserInfo = {
		name,
		email,
		birthday,
		phone,
		city,
	};

	const onSubmit = data => {
		if (data) {
			const fieldToChange = createFormData(data);
			dispatch(updateUserData(fieldToChange));
		}
	};

	return (
		<div className={style.user}>
			<div className={style.user__form}>
				{isUserLoading || isCurrentLoading ? (
					<UserSkeletonMobile />
				) : (
					<>
						<UserPhoto
							onSubmit={handleSubmit(onSubmit)}
							watch={watch}
							avatar={userAvatar}
							register={register}
						/>

						<div className={style.user__meta}>
							{itemInfo.map((info, idx) => (
								<UserItem
									onSubmit={handleSubmit(onSubmit)}
									data={Object.values(normalizeUserInfo)[idx]}
									text={info.text}
									type={info.type}
									field={info.field}
									errors={errors}
									pattern={info.pattern}
									register={register}
									setValue={setValue}
									key={idx}
								/>
							))}
						</div>
					</>
				)}
			</div>
			{!isUserLoading && !isCurrentLoading && <LogOut />}
		</div>
	);
};
