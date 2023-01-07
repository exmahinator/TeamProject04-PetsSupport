import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { LogOut } from '../LogOut/LogOut';
import { updateUserData } from 'redux/user/user-operations';
import { UserPhoto } from './UserPhoto/UserPhoto';
import { UserItem } from './UserItem/UserItem';

import style from './UserForm.module.scss';

export const UserForm = ({ userInfo, userAvatar }) => {
	const { register, handleSubmit, watch } = useForm({});

	const dispatch = useDispatch();

	const onSubmit = data => {
		if (data) {
			const key = Object.keys(data);
			const value = Object.values(data);
			const fieldToChange = new FormData();

			for (let index = 0; index < key.length; index++) {
				if (key[index] !== 'avatar') {
					if (value[index].trim()) {
						fieldToChange.append(key[index], value[index]);
					}
				} else {
					if (value[index][0] !== undefined) {
						fieldToChange.append(key[index], value[index][0]);
					}
				}
			}

			dispatch(updateUserData(fieldToChange));
		}
	};

	return (
		<div className={style.user}>
			<div className={style.user__form}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<UserPhoto watch={watch} avatar={userAvatar} register={register} />
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
			</div>
			<LogOut />
		</div>
	);
};
