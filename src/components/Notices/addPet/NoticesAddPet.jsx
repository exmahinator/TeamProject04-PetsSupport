import React, { useEffect ,useState} from 'react';
import { Modal } from 'components/Reuse/Modal/Modal';
import { AddPetForm } from '../addPetForm/NoticesAddPetForm';
import styles from './NoticesAddPet.module.scss';

const NoticesAddPet = () => {
  const [isShowModal, setIsShowModal] = useState(false);

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

  return (
    <>
      <Modal 
        btnType={'circle'} 
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
        handleBackdropClick={handleBackdropClick}
      >
        <h2 className={styles.heading}>Add pet</h2>
        <AddPetForm onClose={onClose}/>
      </Modal>
    </>
  )
}

export default NoticesAddPet