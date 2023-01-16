import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getUserData, removeUserPet } from 'redux/user/user-operations';
import { resetIsAddedPetSuccess } from 'redux/user/user-slice';
import { getIsAddedPetSuccess, getUserError } from 'redux/user/user-selectors';
import { selectors } from './selectors';

import { UserForm } from 'components/User/UserForm/UserForm';
import { Card } from 'components/User/Card/Card';
import { Title } from 'components/User/Title/Title';
import { getIsLoading } from 'redux/auth/auth-selectors';
import { UserModal } from 'components/User/UserModal/UserModal';

import style from './UserPage.module.scss';

const UserPage = () => {
	const dispatch = useDispatch();

	const userInfo = useSelector(selectors.getUserInfo);
	const userAvatar = useSelector(selectors.getUserAvatar);
	const userPets = useSelector(selectors.getUserPets);
	const isPetsLoading = useSelector(selectors.getPetsLoading);
	const isUserLoading = useSelector(selectors.getUserLoading);
	const isCurrentLoading = useSelector(getIsLoading);
	const error = useSelector(getUserError);
	const isAddedPetSuccess = useSelector(getIsAddedPetSuccess);

	useEffect(() => {
		dispatch(getUserData());
	}, [dispatch]);

	useEffect(() => {
		if (isAddedPetSuccess) {
			toast.success(`Your pet successfully added.`);
			dispatch(resetIsAddedPetSuccess());
		}

		if (error) {
			toast.error('Oops, something went wrong, please try again.');
		}
	}, [dispatch, isAddedPetSuccess, error]);

	const isUserPets = !!userPets?.length;
	const onDeletePet = e => {
		const petToRemove = e.currentTarget.id;
		dispatch(removeUserPet(petToRemove));
	};
	const formData = { userInfo, userAvatar, isUserLoading, isCurrentLoading };
	const cardData = { userPets, onDeletePet, isPetsLoading };

	return (
		<div className={style.section}>
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
