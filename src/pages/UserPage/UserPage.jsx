import { Subtitle } from 'components/Reuse/Title/Subtitle';
import { UserForm } from 'components/User/UserForm/UserForm';
import { Modal } from 'components/Reuse/Modal/Modal';
import { AddPetForm } from 'components/User/AddPetForm/AddPetForm';
import { Card } from 'components/User/Card/Card';

import style from './UserPage.module.scss';

const UserPage = () => {
	return (
		<div className={style.general}>
			<div>
				<Subtitle text="My information:" />
				<UserForm />
			</div>
			<div className={style.desktop}>
				<div className={style.tablet}>
					<Subtitle text="My pets:" />
					<Modal textBtn={'Add pet'} btnType={'circle'}>
						<AddPetForm />
					</Modal>
				</div>
				<Card />
			</div>
		</div>
	);
};

export default UserPage;
