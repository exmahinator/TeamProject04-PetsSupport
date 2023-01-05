import { useState } from 'react';
import { LogOut } from '../LogOut/LogOut';

// import { UserPhoto } from './UserPhoto/UserPhoto';
import { UserEmail } from './UserEmail/UserEmail';
import { UserPhone } from './UserPhone/UserPhone';
import { UserCityBirthday } from './UserCityBirthday/UserCityBirthday';

import s from './UserForm.module.scss';

export const UserForm = ({ userWithPets, handleLogOut }) => {
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

		e.currentTarget.disabled = false;
		console.log('currentTarget', e.currentTarget.disabled);
	};

	return (
		<div className={s.user}>
			<form className={s.user__form}>
				{/* <UserPhoto avtar={value} /> */}
				<div className={s.user__meta}>
					{Object.entries([])?.map(([key, value]) => {
						switch (key) {
							case 'email':
								return (
									<UserEmail
										heading={key}
										email={value}
										userInput={userInput}
										isDisabled={isDisabled}
										editUserData={editUserData}
										editet={edited}
										onChange={onChange}
									/>
								);
							case 'phone':
								return (
									<UserPhone
										heading={key}
										tel={value}
										isDisabled={isDisabled}
										edited={edited}
									/>
								);
							default:
								return (
									<UserCityBirthday
										heading={key}
										data={value}
										edited={edited}
										isDisabled={isDisabled}
									/>
								);
						}
					})}
				</div>
			</form>

			<LogOut handleLogOut={handleLogOut} />
		</div>
	);
};
