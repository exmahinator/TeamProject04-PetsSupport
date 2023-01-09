import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData, removeUserPet } from 'redux/user/user-operations';
import {
	getUserPets,
	getUserInfo,
	getUserAvatar,
	getPetsLoading,
	getUserLoading,
} from 'redux/user/user-selectors';
import { Card } from 'components/User/Card/Card';
import { Title } from 'components/User/Title/Title';
import { Modal } from 'components/Reuse/Modal/Modal';
import { getIsLoading } from 'redux/auth/auth-selectors';
import { UserForm } from 'components/User/UserForm/UserForm';
import { BigSpinner } from 'components/Reuse/Loaders/Spinner/BigSpinner';
import { AddPetForm } from 'components/User/AddPetForm/AddPetForm';

import style from './UserPage.module.scss';

const UserPage = () => {
	const [isShowModal, setIsShowModal] = useState(false);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUserData());
	}, [dispatch]);

	const onClose = () => {
		setIsShowModal(false);
	};

	useEffect(() => {
		const handeleClickDown = e => {
			if (e.code === 'Escape') {
				onClose();
			}
		};
		window.addEventListener('keydown', handeleClickDown);

		return () => {
			window.removeEventListener('keydown', handeleClickDown);
		};
		// eslint-disable-next-line
	}, []);

	const handleBackdropClick = e => {
		if (e.currentTarget === e.target) {
			onClose();
		}
	};

	const isBigScreen = useMediaQuery({ query: '(min-width: 768px)' });

	const userInfo = useSelector(getUserInfo);
	const userAvatar = useSelector(getUserAvatar);
	const userPets = useSelector(getUserPets);
	const isPetsLoading = useSelector(getPetsLoading);
	const isUserLoading = useSelector(getUserLoading);
	const isCurrentLoading = useSelector(getIsLoading);

	const isUserPets = !!userPets?.length;
	const onDeletePet = e => {
		const petToRemove = e.currentTarget.id;

		dispatch(removeUserPet(petToRemove));
	};

	return (
		<div className={style.general}>
			<div className={style.user__wrapper}>
				<Title title="My information:" className={style.titleUser} />
				<UserForm
					userInfo={userInfo}
					userAvatar={userAvatar}
					isUserLoading={isUserLoading}
					isCurrentLoading={isCurrentLoading}
				/>
			</div>
			<div className={style.desktop}>
				<div className={style.tablet}>
					{isUserPets && <Title title="My pets:" className={style.title} />}
					{isUserPets ? (
						<Modal
							btnType={'circle-info'}
							isShowModal={isShowModal}
							setIsShowModal={setIsShowModal}
							handleBackdropClick={handleBackdropClick}
						>
							<Title title={'Add Pet'} className={style.titleUpload} />
							<AddPetForm onCloseModal={onClose} />
						</Modal>
					) : (
						<div className={style.addPetModalCard}>
							{isBigScreen && (
								<p className={style.addPetModalSuggestion}>
									You don't have any pets yet
								</p>
							)}

							<div className={style.addPetModalWrapper}>
								{isPetsLoading ? (
									<BigSpinner />
								) : (
									<Modal
										btnType={'empty'}
										isShowModal={isShowModal}
										setIsShowModal={setIsShowModal}
										handleBackdropClick={handleBackdropClick}
									>
										<Title title={'Add Pet'} className={style.titleUpload} />
										<AddPetForm onCloseModal={onClose} />
									</Modal>
								)}
							</div>
						</div>
					)}
				</div>
				<Card
					userPets={userPets}
					onDeletePet={onDeletePet}
					isPetsLoading={isPetsLoading}
				/>
			</div>
		</div>
	);
};

export default UserPage;
