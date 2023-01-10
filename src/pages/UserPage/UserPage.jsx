import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserForm } from 'components/User/UserForm/UserForm';

import { selectors } from './selectors';
import { getUserData, removeUserPet } from 'redux/user/user-operations';
import { Card } from 'components/User/Card/Card';
import { Title } from 'components/User/Title/Title';
import { getIsLoading } from 'redux/auth/auth-selectors';
import { UserModal } from 'components/User/UserModal/UserModal';

import style from './UserPage.module.scss';

const UserPage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUserData());
	}, [dispatch]);

	const userInfo = useSelector(selectors.getUserInfo);
	const userAvatar = useSelector(selectors.getUserAvatar);
	const userPets = useSelector(selectors.getUserPets);
	const isPetsLoading = useSelector(selectors.getPetsLoading);
	const isUserLoading = useSelector(selectors.getUserLoading);
	const isCurrentLoading = useSelector(getIsLoading);

	const isUserPets = !!userPets?.length;
	const onDeletePet = e => {
		const petToRemove = e.currentTarget.id;
		dispatch(removeUserPet(petToRemove));
	};
	const formData = { userInfo, userAvatar, isUserLoading, isCurrentLoading };
	const cardData = { userPets, onDeletePet, isPetsLoading };

	return (
		<div className={style.general}>
			<div className={style.user__wrapper}>
				<Title title="My information:" className={style.titleUser} />
				<UserForm formData={formData} />
			</div>
			<div className={style.desktop}>
				<UserModal isUserPets={isUserPets} isPetsLoading={isPetsLoading} />
				<Card cardData={cardData} />
			</div>
		</div>
	);
};

export default UserPage;
