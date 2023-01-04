import styles from './NoticesAddPet.module.scss';
import { Modal } from 'components/Reuse/Modal/Modal';
import { AddPetForm } from '../addPetForm/NoticesAddPetForm';

const NoticesAddPet = () => {

  return (
    <div className={styles.wrapper}>
        <Modal textBtn={'Add pet'} btnType={'circle'}>
        <h2>Add pet</h2>
        <AddPetForm/>
      </Modal>
    </div>
  )
}

export default NoticesAddPet