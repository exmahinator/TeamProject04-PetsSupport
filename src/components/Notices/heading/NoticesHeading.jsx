import { Title } from 'components/Reuse/Title/Title';
import styles from './NoticesHeading.module.scss';


const NoticesHeading = () => {

  return (
    <div className={styles.wrapper}>
      <Title text='Find your favorite pet'/>
    </div>
  )
}

export default NoticesHeading;