import { NewsLink } from '../NewsLink/NewsLink';
import styles from './NewsDetails.module.scss';

export const NewsDetails = ({ date, link }) => {
	return (
		<div className={styles.details}>
			<span className={styles.date}>{date}</span>
			<NewsLink link={link} />
		</div>
	);
};
