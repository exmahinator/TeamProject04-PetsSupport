import styles from './OurFriendsInfo.module.scss';

import { OurFriendsPopover } from '../OurFriendPopover/OurFriendPopover';

export const OurFriendsInfo = ({
	addressUrl,
	address,
	email,
	phone,
	sliceAdress,
	workDays,
}) => {
	return (
		<div className={styles.info}>
			<div>
				{workDays?.length ? (
					<OurFriendsPopover workDays={workDays} />
				) : (
					<p className={styles.time}>
						Time: <br />
						_____________
					</p>
				)}
			</div>
			<div>
				<p>Address:</p>

				<a className={styles.links} href={addressUrl}>
					{address ? sliceAdress(address) : '_____________'}
				</a>
			</div>
			<p>Email:</p>

			<a className={styles.links} href={email}>
				{email ? `${email}` : '_____________'}
			</a>

			<p>Phone: </p>

			<a className={styles.links} href={phone}>
				{phone ? `${phone}` : '_____________'}
			</a>
		</div>
	);
};
