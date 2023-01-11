import { useEffect, useState } from 'react';

import { Title } from '../Title/Title';
import { Modal } from 'components/Reuse/Modal/Modal';
import { AddPetForm } from '../AddPetForm/AddPetForm';

import style from 'pages/UserPage/UserPage.module.scss';

export const UserModalWithPets = () => {
	const [isShowModal, setIsShowModal] = useState(false);

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
		<Modal
			btnType={'circle-info'}
			isShowModal={isShowModal}
			setIsShowModal={showModal}
			handleBackdropClick={handleBackdropClick}
		>
			<Title title={'Add Pet'} className={style.titleUpload} />
			<AddPetForm onCloseModal={onClose} />
		</Modal>
	);
};
