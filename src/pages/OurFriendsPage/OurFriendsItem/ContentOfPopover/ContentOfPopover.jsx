import styles from './ContentOfPopover.module.scss';
import { nanoid } from 'nanoid';

export const ContentOfPopover = ({ workDays }) => {
	console.log('workDays :>> ', workDays);

	const Item = workDays.map(({ isOpen, from, to }) => (
		<li>
			<p>MN </p>
			{isOpen ? (
				<p>
					{from} - {to}
				</p>
			) : (
				<p>------</p>
			)}
		</li>
	));

	return (
		<ul className={styles.content}>
			{Item}
			{/* <li>
				MN <span></span>
			</li>
			<li>TU</li>
			<li>WE</li>
			<li>TH</li>
			<li>FR</li>
			<li>SA</li>
			<li>SU</li> */}
		</ul>
	);
};
