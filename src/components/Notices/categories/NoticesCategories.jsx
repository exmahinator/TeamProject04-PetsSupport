import styles from './NoticesCategories.module.scss';

const NoticesCategories = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.btnWrap}>
        <button className={styles.btn}>lost/found</button>
      </div>
      <div className={styles.btnWrap}>
        <button className={styles.btn}>in good hands</button>
      </div>
      <div className={styles.btnWrap}>
        <button className={styles.btn}>sell</button>
      </div>
      <div className={styles.btnWrap}>
        <button className={styles.btn}>favorite ads</button>
      </div>
      <div className={styles.btnWrap}>
        <button className={styles.btn}>my ads</button>
      </div>
    </div>
  );
};

export default NoticesCategories;
