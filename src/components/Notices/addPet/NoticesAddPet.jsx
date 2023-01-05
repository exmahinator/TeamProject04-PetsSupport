import { Modal } from 'components/Reuse/Modal/Modal';
import { AddPetForm } from '../addPetForm/NoticesAddPetForm';
import styles from './NoticesAddPet.module.scss';

const NoticesAddPet = () => {

  return (
    <>
      <Modal textBtn={'Add pet'} btnType={'circle'}>
        <h2 className={styles.heading}>Add pet</h2>
        <AddPetForm/>
      </Modal>
    </>
  )
}

export default NoticesAddPet