import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { getUserData, removeUserPet } from 'redux/user/user-operations';
import {
	getUserAvatar,
	getUserInfo,
	getUserPets,
	getUserWithPets,
} from 'redux/user/user-selectors';
import { Card } from 'components/User/Card/Card';
import { Title } from 'components/User/Title/Title';
import { Modal } from 'components/Reuse/Modal/Modal';
import { UserForm } from 'components/User/UserForm/UserForm';
import { AddPetForm } from 'components/User/AddPetForm/AddPetForm';

import style from './UserPage.module.scss';

const UserPage = () => {
	const dispatch = useDispatch();

	useMemo(() => dispatch(getUserData()), [dispatch]);

	const onLogOut = () => {
		dispatch(logout());
		console.log('logout success');
	};

	const userWithPets = useSelector(getUserWithPets);
	const userInfo = useSelector(getUserInfo);
	const userAvatar = useSelector(getUserAvatar);
	const userPets = useSelector(getUserPets);

	const onDeletePet = e => {
		console.log(e.currentTarget.id);
		const petToRemove = e.currentTarget.id;
		dispatch(removeUserPet(petToRemove));
		console.log('success', petToRemove);
	};

	return (
		<div className={style.general}>
			<div>
				<Title title="My information:" className={style.titleUser} />
				<UserForm
					userWithPets={userWithPets}
					handleLogOut={onLogOut}
					userInfo={userInfo}
					userAvatar={userAvatar}
				/>
			</div>
			<div className={style.desktop}>
				<div className={style.tablet}>
					<Title title="My pets:" className={style.title} />
					<Modal textBtn={'Add pet'} btnType={'circle-info'}>
						<Title title={'Add pet'} className={style.titleUpload} />
						<AddPetForm />
					</Modal>
				</div>
				<Card userPets={userPets} onDeletePet={onDeletePet} />
			</div>
		</div>
	);
};

export default UserPage;
