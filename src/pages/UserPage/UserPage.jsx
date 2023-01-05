import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from 'redux/user/user-operations';
import { getUserWithPets } from 'redux/user/user-selectors';
import { Card } from 'components/User/Card/Card';
import { Title } from 'components/User/Title/Title';
import { Modal } from 'components/Reuse/Modal/Modal';
import { UserForm } from 'components/User/UserForm/UserForm';
import { AddPetForm } from 'components/User/AddPetForm/AddPetForm';

import style from './UserPage.module.scss';
import { logout } from 'redux/auth/auth-operations';
import { isAuth } from 'redux/auth/auth-selectors';

const UserPage = () => {
	const dispatch = useDispatch();

	useMemo(() => dispatch(getUserData()), [dispatch]);

	const onLogOut = () => {
		dispatch(logout());
		console.log('logout success');
	};

	const userWithPets = useSelector(getUserWithPets);
	const isLogIn = useSelector(isAuth);
	console.log(isLogIn);
	return (
		<div className={style.general}>
			<div>
				<Title title="My information:" className={style.titleUser} />
				<UserForm userWithPets={userWithPets} handleLogOut={onLogOut} />
			</div>
			<div className={style.desktop}>
				<div className={style.tablet}>
					<Title title="My pets:" className={style.title} />
					<Modal textBtn={'Add pet'} btnType={'circle-info'}>
						<Title title={'Add pet'} className={style.titleUpload} />
						<AddPetForm />
					</Modal>
				</div>
				<Card />
			</div>
		</div>
	);
};

export default UserPage;
