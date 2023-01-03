import styles from './NoticesAddPet.module.scss';
import { Modal } from 'components/Reuse/Modal/Modal';


const NoticesAddPet = () => {

  return (
    <div className={styles.wrapper}>
        <Modal textBtn={'Add pet'} btnType={'circle'}>
        <h2>Heloooooo</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          expedita in ratione dolores. Recusandae, nesciunt fugit ipsum,
          molestiae totam sed nam at blanditiis quidem dolorem obcaecati cum
          nobis, sapiente nostrum.
        </p>
      </Modal>
    </div>
  )
}

export default NoticesAddPet