import { Button } from 'components/Reuse/Button/Button';
import styles from './NoticesCategories.module.scss';

const NoticesCategories = ({categories}) => {

	switch (categories) {
		case 'short':
			return (
				<ul className={styles.wrapper}>
					<li>
						<Button text={'lost/found'} colorType={'white'} />
					</li>
					<li>
						<Button text={'in good hands'} colorType={'white'} />
					</li>
					<li>
						<Button text={'sell'} colorType={'white'} />
					</li>
				</ul>
			);
		case 'long':
			return (
				<ul className={styles.wrapper}>
					<li>
						<Button text={'lost/found'} colorType={'white'} />
					</li>
					<li>
						<Button text={'in good hands'} colorType={'white'} />
					</li>
					<li>
						<Button text={'sell'} colorType={'white'} />
					</li>
					<li>
						<Button text={'favorite ads'} colorType={'white'} />
					</li>
					<li>
						<Button text={'my ads'} colorType={'white'} />
					</li>
				</ul>
			);
		default:
			return;
	}
};

export default NoticesCategories;
