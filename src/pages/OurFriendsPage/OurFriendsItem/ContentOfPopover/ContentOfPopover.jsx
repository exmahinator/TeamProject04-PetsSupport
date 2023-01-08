import styles from './ContentOfPopover.module.scss';
import { nanoid } from 'nanoid';

export const ContentOfPopover = ({ workDays }) => {
	const Item = workDays.map(({ isOpen, from, to, weekday }) => (
		<li key={nanoid()} className={styles.content__item}>
			<p className={styles.content__day}> {weekday}</p>

			{isOpen ? (
				<p className={styles.content__time}>
					{from} - {to}
				</p>
			) : (
				<p className={styles.content__time}>------------</p>
			)}
		</li>
	));

	return <ul className={styles.content}>{Item}</ul>;
};
