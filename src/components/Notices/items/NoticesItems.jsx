import styles from './NoticesItems.module.scss';
import {ReactComponent as NoticesHartSvg} from 'shared/images/Notices/Notices-hart.svg';

const posterBg = 'https://via.placeholder.com/350';
const placeholder = 'https://via.placeholder.com/150';

const NoticesItems = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.pctWrap}>
        <img
          className={styles.pictures}
          src={posterBg ?? placeholder}
          alt="pictures dogs"
          title="title"
        />
        <button className={styles.svgWrap}>
          <NoticesHartSvg/>
        </button>
        <div className={styles.categoriesWrap}>
          <p className={styles.categories}>In good hands</p>
        </div>
      </div>
      <div>
        <div className={styles.heading}>
          <h2>Сute dog looking for a home</h2>
        </div>
        <div className={styles.paragraph}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <p className={styles.desc}>Breed: </p>
              <p>Pomeranian</p>
            </li>
            <li className={styles.item}>
              <p className={styles.desc}>Place:</p>
              <p>Lviv</p>
            </li>
            <li className={styles.item}>
              <p className={styles.desc}>Age:</p>
              <span>&nbsp;&nbsp;&nbsp;</span>
              <p>one year</p>
            </li>
          </ul>
        </div>
        <div className={styles.btnContainer}>
          <div className={styles.btnWrap}>
            <button>Learn more</button>
          </div>
          <div className={styles.btnWrap}>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticesItems;
