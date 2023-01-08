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
	// console.log('workDays :>> ', workDays);
	return (
		<div className={styles.info}>
			<div>
				{workDays?.length ? (
					<OurFriendsPopover workDays={workDays} />
				) : (
					<p>
						Time: <br />
						_____________
					</p>
				)}
			</div>
			<div>
				<p>Address:</p>

				<a href={addressUrl}>
					{address ? sliceAdress(address) : '_____________'}
				</a>
			</div>
			<p>
				Email:
				<br />
				{email ? `${email}` : '_____________'}
			</p>
			<p>
				Phone:
				<br /> {phone ? `${phone}` : '_____________'}
			</p>
		</div>
	);
};
