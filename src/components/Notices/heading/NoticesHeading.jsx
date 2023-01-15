import { Title } from 'components/Reuse/Title/Title';
import styles from './NoticesHeading.module.scss';

export const NoticesHeading = () => {
	return (
		<div className={styles.wrapper}>
			<Title text="Find your favorite pet" />
		</div>
	);
};
