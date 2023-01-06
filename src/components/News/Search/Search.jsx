import { ReactComponent as SearchIcon } from 'shared/images/overused/NewsSearch.svg';
import styles from './Search.module.scss';

 
export const Search = () => {

  return (
    <div className={styles.wrapper}>
      <input className={styles.input} type="text" placeholder="Search" />
      <button className={styles.btn}><SearchIcon/></button>
    </div>
  )
}

