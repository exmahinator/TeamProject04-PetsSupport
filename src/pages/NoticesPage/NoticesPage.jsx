import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import {
	getIsAddedSuccess,
	getNoticesError,
	getNoticesLoading,
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
import { BigSpinner } from 'components/Reuse/Loaders/Spinner/BigSpinner';

const NoticesPage = () => {
	const dispatch = useDispatch();
	const error = useSelector(getNoticesError);
	const isAddedSuccess = useSelector(getIsAddedSuccess);
	const isLoading = useSelector(getNoticesLoading);

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
		<section className={styles.section}>
			<Container>
				<NoticesHeading />
				<NoticesSearch />
				<div className={styles.wrapper}>
					<NoticesCategories />
					<NoticesAddPet />
				</div>
				{isLoading && <BigSpinner />}
				<Outlet />
			</Container>
		</section>
	);
};

export default NoticesPage;
