import { UserForm } from 'components/User/UserForm/UserForm';
import { Modal } from 'components/Reuse/Modal/Modal';
import { AddPetForm } from 'components/User/AddPetForm/AddPetForm';
import { Card } from 'components/User/Card/Card';
import { Title } from 'components/User/Title/Title';

import style from './UserPage.module.scss';

const UserPage = () => {
	return (
		<div className={style.general}>
			<div>
				<Title title="My information:" className={style.titleUser} />
				<UserForm />
			</div>
			<div className={style.desktop}>
				<div className={style.tablet}>
					<Title title="My pets:" className={style.title} />
					<Modal textBtn={'Add pet'} btnType={'circle-info'}>
						<Title title={'Add pet'} className={style.titleUpload} />
						<AddPetForm />
					</Modal>
				</div>
				<Card />
			</div>
		</div>
	);
};

export default UserPage;
