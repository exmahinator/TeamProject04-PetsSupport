import { OurFriendsInfo } from './OurFriendsInfo/OurFriendsInfo';
import styles from './OurFriendsItem.module.scss';

import picture from '../../../shared/images/Friends/hands.png';

export const OurFriendsItem = ({ data }) => {
	const { title, address, addressUrl, email, imageUrl, phone, url, workDays } =
		data;

	const sliceAdress = address => {
		if (address.length > 25) {
			return address.slice(0, 25) + '...';
		} else {
			return address;
		}
	};

	return (
		<li className={styles.item}>
			<a className={styles.item__title} href={url}>
				{title}
			</a>
			<div className={styles.item__wrap}>
				<div className={styles.item__img_wrap}>
					{imageUrl ? (
						<img
							className={styles.item__img}
							src={imageUrl}
							alt="Partner Logo"
						/>
					) : (
						<img
							className={styles.item__img}
							src={picture}
							alt="Partner Logo"
						/>
					)}
				</div>
				<OurFriendsInfo
					addressUrl={addressUrl}
					address={address}
					email={email}
					phone={phone}
					sliceAdress={sliceAdress}
					workDays={workDays}
				/>
			</div>
		</li>
	);
};
