import { Title } from '../Title/Title';
import { UserModalEmpty } from './UserModalEmpty';
import { UserModalWithPets } from './UserModalWithPets';

import style from 'pages/UserPage/UserPage.module.scss';

export const UserModal = ({ isUserPets, isPetsLoading }) => {
	return (
		<div className={style.tablet}>
			{isUserPets && <Title title="My pets:" className={style.title} />}
			{isUserPets ? (
				<UserModalWithPets />
			) : (
				<UserModalEmpty isPetsLoading={isPetsLoading} />
			)}
		</div>
	);
};
