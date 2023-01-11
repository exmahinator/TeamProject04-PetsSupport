import { NewsLink } from '../NewsLink/NewsLink';
import style from './NewsDetails.module.scss';

export const NewsDetails = ({ date, link }) => {
	return (
		<div className={style.details}>
			<span className={style.date}>{date}</span>
			<NewsLink link={link} />
		</div>
	);
};
