import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { LogOut } from '../LogOut/LogOut';
import { updateUserData } from 'redux/user/user-operations';
import { UserPhoto } from './UserPhoto/UserPhoto';
import { UserItem } from './UserItem/UserItem';

import style from './UserForm.module.scss';
import { createFormData } from 'shared/functions/createFormData';
import { UserSkeletonMobile } from 'components/Reuse/Loaders/Skeleton/UserSkeletonMobile';

export const UserForm = ({
	userInfo,
	userAvatar,
	isUserLoading,
	isCurrentLoading,
}) => {
	const { register, handleSubmit, watch } = useForm({});

	const dispatch = useDispatch();

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
						<form onSubmit={handleSubmit(onSubmit)}>
							<UserPhoto
								watch={watch}
								avatar={userAvatar}
								register={register}
							/>
						</form>
						<div className={style.user__meta}>
							<form onSubmit={handleSubmit(onSubmit)}>
								<UserItem
									data={userInfo.name}
									text="Name"
									field="name"
									register={register}
								/>
							</form>
							<form onSubmit={handleSubmit(onSubmit)}>
								<UserItem
									data={userInfo.email}
									text="Email"
									type="email"
									field="email"
									register={register}
								/>
							</form>
							<form onSubmit={handleSubmit(onSubmit)}>
								<UserItem
									data={userInfo.birthday}
									text="Birthday"
									field="birthday"
									register={register}
								/>
							</form>
							<form onSubmit={handleSubmit(onSubmit)}>
								<UserItem
									data={userInfo.phone}
									text="Phone"
									field="phone"
									register={register}
								/>
							</form>
							<form onSubmit={handleSubmit(onSubmit)}>
								<UserItem
									data={userInfo.city}
									text="City"
									field="city"
									register={register}
								/>
							</form>
						</div>
					</>
				)}
			</div>
			{(!isUserLoading && !isCurrentLoading) && <LogOut />}
		</div>
	);
};
