import { Title } from 'components/Reuse/Title/Title';
import { UserForm } from 'components/User/UserForm/UserForm';

const UserPage = () => {
	return (
		<div>
			<Title text="My information:" />
			<UserForm />
		</div>
	);
};

export default UserPage;
