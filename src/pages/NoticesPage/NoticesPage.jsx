import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
	getIsAddedSuccess,
	getNoticesError,
} from 'redux/notices/notices-selectors';
import { resetIsAddedSuccess } from 'redux/notices/notices-slice';
import { Container } from 'components/Reuse/Container/Container';
import { NoticesHeading } from 'components/Notices/heading/NoticesHeading';
import { NoticesSearch } from 'components/Notices/search/NoticesSearch';
import { NoticesCategories } from 'components/Notices/categories/NoticesCategories';
import { NoticesAddPet } from 'components/Notices/addPet/NoticesAddPet';

import styles from './NoticesPage.module.scss';

const NoticesPage = () => {
	const dispatch = useDispatch();
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
		<section className={styles.section}>
			<Container>
				<NoticesHeading />
				<NoticesSearch />
				<div className={styles.categories}>
					<NoticesCategories />
					<NoticesAddPet />
				</div>
				<Outlet />
			</Container>
		</section>
	);
};

export default NoticesPage;
