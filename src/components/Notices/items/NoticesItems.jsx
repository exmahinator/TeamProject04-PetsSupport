import styles from './NoticesItems.module.scss';

const posterBg = 'https://via.placeholder.com/350'
const placeholder = 'https://via.placeholder.com/150'

const NoticesItems = () => {

  return (
      <div className={styles.wrapper}>
        <img
          // className={styles.poster}
          src={posterBg ??  placeholder}
          alt='pictures dogs'
          title='title'
        />
        <div >
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
          <div className={styles.button}>
            <button>Learn more</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
  )
}

export default NoticesItems