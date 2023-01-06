import { useSelector } from 'react-redux';

import { isAuth } from '../../redux/auth/auth-selectors';

export const useAuth = () => {
	const result = useSelector(isAuth);

	return result;
};
