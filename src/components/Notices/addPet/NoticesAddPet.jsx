import styles from './NoticesAddPet.module.scss';
import {ReactComponent as NoticesPlusSvg} from 'shared/images/Notices/Notices-plus.svg';


const NoticesAddPet = () => {

  return (
    <button className={styles.wrapper}>
      <NoticesPlusSvg/>
      <span>qwe</span>
    </button>
  )
}

export default NoticesAddPet