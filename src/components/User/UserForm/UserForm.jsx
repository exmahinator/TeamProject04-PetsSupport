import { useState } from 'react';
import { LogOut } from '../LogOut/LogOut';

import { UserPhoto } from './UserPhoto/UserPhoto';
import { UserEmail } from './UserEmail/UserEmail';
import { UserPhone } from './UserPhone/UserPhone';
import { UserCityBirthday } from './UserCityBirthday/UserCityBirthday';

import s from './UserForm.module.scss';

export const UserForm = ({
	userWithPets,
	handleLogOut,
	userInfo,
	userAvatar,
}) => {
	const [userInput, setUserInput] = useState('');
	const [isDisabled, setIsDisabled] = useState(false);
	const [edited, setEdited] = useState(false);

	console.log('userWithPets', userWithPets);

	const onChange = e => {
		const data = e.target.value;
		setUserInput(data);
	};

	const editUserData = e => {
		setIsDisabled(!isDisabled);
		setEdited(prevValue => !prevValue);
	};

	return (
		<div className={s.user}>
			<form className={s.user__form}>
				<UserPhoto avtar={userAvatar} />
				<ul className={s.user__meta}>
					{Object.entries(userInfo)?.map(([key, value], idx) => {
						switch (key) {
							case 'email':
								return (
									<li key={idx}>
										<UserEmail
											heading={key}
											email={value}
											userInput={userInput}
											editUserData={editUserData}
											edited={edited}
											onChange={onChange}
										/>
									</li>
								);
							case 'phone':
								return (
									<li key={idx}>
										<UserPhone
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

			<LogOut handleLogOut={handleLogOut} />
		</div>
	);
};
