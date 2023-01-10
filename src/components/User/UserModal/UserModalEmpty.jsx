import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Title } from '../Title/Title';
import { Modal } from 'components/Reuse/Modal/Modal';
import { AddPetForm } from '../AddPetForm/AddPetForm';
import { BigSpinner } from 'components/Reuse/Loaders/Spinner/BigSpinner';

import style from 'pages/UserPage/UserPage.module.scss';

export const UserModalEmpty = ({ isPetsLoading }) => {
	const [isShowModal, setIsShowModal] = useState(false);
	const isBigScreen = useMediaQuery({ query: '(min-width: 768px)' });

	const showModal = () => {
		setIsShowModal(true);

		// Disables Background Scrolling whilst the SideDrawer/Modal is open
		if (typeof window != 'undefined' && window.document) {
			document.body.style.overflow = 'hidden';
		}
	};

	const onClose = () => {
		setIsShowModal(false);
		document.body.style.overflow = 'unset';
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
	return (
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
						setIsShowModal={showModal}
						handleBackdropClick={handleBackdropClick}
					>
						<Title title={'Add Pet'} className={style.titleUpload} />
						<AddPetForm onCloseModal={onClose} />
					</Modal>
				)}
			</div>
		</div>
	);
};
