import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import {
	getFilteredNotices,
	getIsAddedSuccess,
	getNoticesError,
} from 'redux/notices/notices-selectors';
import { Container } from 'components/Reuse/Container/Container';
import NoticesHeading from 'components/Notices/heading/NoticesHeading';
import NoticesSearch from 'components/Notices/search/NoticesSearch';
import NoticesCategories from 'components/Notices/categories/NoticesCategories';
import NoticesAddPet from 'components/Notices/addPet/NoticesAddPet';
import styles from './NoticesPage.module.scss';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { resetIsAddedSuccess } from 'redux/notices/notices-slice';

const NoticesPage = () => {
	const dispatch = useDispatch();
	const info = useSelector(getFilteredNotices);
	const error = useSelector(getNoticesError);
	const isAddedSuccess = useSelector(getIsAddedSuccess);

	useEffect(() => {
		if (isAddedSuccess) {
			toast.success(`Ad successfully added.`);
			dispatch(resetIsAddedSuccess());
		}
	}, [dispatch, isAddedSuccess]);

	useEffect(() => {
		if (error) {
			toast.error('Oops, something went wrong, please try again.');
		}
	}, [error]);

	return (
		<Container>
			<NoticesHeading />
			<NoticesSearch />
			<div className={styles.wrapper}>
				<NoticesCategories />
				<NoticesAddPet />
			</div>
			<Outlet context={info} />
		</Container>
	);
};

export default NoticesPage;
