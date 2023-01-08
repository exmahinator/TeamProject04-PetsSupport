import { OurFriendsItem } from '../OurFriendsItem/OurFriendsItem';

import styles from './OurFriendsList.module.scss';

export const OurFriendsList = ({ data }) => {
	// console.log('data :>> ', data);
	return (
		<ul className={styles.list}>
			{data.map(({ _id, ...info }) => {
				return <OurFriendsItem key={_id} data={info} />;
			})}
		</ul>
	);
};
