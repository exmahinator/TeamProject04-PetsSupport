import styles from './NoticesAddPet.module.scss';
import {ReactComponent as NoticesPlusSvg} from 'shared/images/Notices/Notices-plus.svg';


const NoticesAddPet = () => {

  return (
    <div className={styles.addPetWrap}>
      <button className={styles.addPetBtn}>
        <NoticesPlusSvg/>
        <span className={styles.paragraph}>Add pet</span>
      </button>
    </div>
  )
}

export default NoticesAddPet