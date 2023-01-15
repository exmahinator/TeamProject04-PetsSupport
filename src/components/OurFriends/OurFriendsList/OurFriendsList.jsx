import { OurFriendsItem } from '../OurFriendsItem/OurFriendsItem';

import style from './OurFriendsList.module.scss';

export const OurFriendsList = ({ data }) => {
	return (
		<ul className={style.list}>
			{data.map(({ _id, ...info }) => {
				return <OurFriendsItem key={_id} data={info} />;
			})}
		</ul>
	);
};
