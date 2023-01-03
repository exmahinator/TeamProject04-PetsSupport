import NoticesItems from '../items/NoticesItems';
import styles from './NoticesList.module.scss';

const NoticesList = () => {
  return (
    <div className={styles.wrapper}>
      <NoticesItems/>
      <NoticesItems/>
      <NoticesItems/>
      <NoticesItems/>
      <NoticesItems/>
      <NoticesItems/>
      <NoticesItems/>
      <NoticesItems/>
      <NoticesItems/>
      <NoticesItems/>
    </div>
  );
};

export default NoticesList;
