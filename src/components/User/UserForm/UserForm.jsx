import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LogOut } from '../LogOut/LogOut';
import { updateUserData } from 'redux/user/user-operations';

import { UserPhoto } from './UserPhoto/UserPhoto';
import { UserEmail } from './UserEmail/UserEmail';
import { UserPhone } from './UserPhone/UserPhone';
import { UserCityBirthday } from './UserCityBirthday/UserCityBirthday';

import s from './UserForm.module.scss';
import { UserItem } from './UserItem/UserItem';

export const UserForm = ({ handleLogOut, userInfo, userAvatar }) => {
	const { register, handleSubmit, watch } = useForm({
		// defaultValues: {
		// 	name: '',
		// 	email: '',
		// 	phone: '',
		// 	city: '',
		// 	avatar: '',
		// 	birthday: '',
		// },
	});

	console.log(userInfo);

	const dispatch = useDispatch();

	// const [uploadClicked, setUploadClicked] = useState(false);
	// const [edited, setEdited] = useState(false);

	// const onUploadClick = () => {
	// 	setUploadClicked(clicked => !clicked);
	// };

	// const editUserData = e => {
	// 	console.log(e.target);
	// 	if (!e.target) {
	// 		e.currentTarget.disabled = true;
	// 	}
	// 	console.log('editUserData clicked karandash');

	// 	setEdited(prevValue => !prevValue);
	// 	setUploadClicked(clicked => !clicked);
	// };

	const onSubmit = data => {
		console.log(data);

		if (data) {
			const key = Object.keys(data);
			const value = Object.values(data);
			const fieldToChange = new FormData();

			for (let index = 0; index < key.length; index++) {
				fieldToChange.append(key[index], value[index]);
			}

					dispatch(updateUserData(fieldToChange));
		}


	};

	return (
		<div className={s.user}>
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
			{/* <form className={s.user__form} onSubmit={handleSubmit(onSubmit)}>
				<UserPhoto
					watch={watch}
					avatar={userAvatar}
					register={register}
					uploadClicked={uploadClicked}
					onUploadSubmit={onSubmit}
					onUploadClick={onUploadClick}
				/>
				<ul className={s.user__meta}>
					{Object.entries(userInfo)?.map(([key, value], idx) => {
						switch (key) {
							case 'email':
								return (
									<li key={idx}>
										<UserEmail
											register={register}
											onUploadSubmit={onSubmit}
											heading={key}
											email={value}
											editUserData={editUserData}
											edited={edited}
										/>
									</li>
								);
							case 'phone':
								return (
									<li key={idx}>
										<UserPhone
											register={register}
											onUploadSubmit={onSubmit}
											heading={key}
											editUserData={editUserData}
											tel={value}
											edited={edited}
										/>
									</li>
								);
							default:
								return (
									<li key={idx}>
										<UserCityBirthday
											register={register}
											onUploadSubmit={onSubmit}
											heading={key}
											editUserData={editUserData}
											data={value}
											edited={edited}
										/>
									</li>
								);
						}
					})}
				</ul>
			</form>
			<button type="button" onClick={editUserData}>
				X
			</button> */}
			<LogOut handleLogOut={handleLogOut} />
		</div>
	);
};
