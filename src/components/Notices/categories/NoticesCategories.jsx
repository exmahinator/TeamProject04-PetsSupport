import { Button } from 'components/Reuse/Button/Button';
import styles from './NoticesCategories.module.scss';

const NoticesCategories = () => {
  return (
    <ul className={styles.wrapper}>
      <li>
        <Button text={'lost/found'} type={'white'} />
      </li>
      <li>
        <Button text={'in good hands'} type={'white'} />
      </li>
      <li>
        <Button text={'sell'} type={'white'} />
      </li>
      <li>
        <Button text={'favorite ads'} type={'white'} />
      </li>
      <li>
        <Button text={'my ads'} type={'white'} />
      </li>
    </ul>
  );
};


export default NoticesCategories;

