import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNoticeByCategory } from 'redux/notices/notices-operations';
import { getCurrentNotices } from 'redux/notices/notices-selectors';

import NoticesHeading from 'components/Notices/heading/NoticesHeading';
import NoticesSearch from 'components/Notices/search/NoticesSearch';
import NoticesCategories from 'components/Notices/categories/NoticesCategories';
import NoticesAddPet from 'components/Notices/addPet/NoticesAddPet';
import NoticesList from 'components/Notices/list/NoticesList';
import { Container } from 'components/Reuse/Container/Container';
import styles from './NoticesPage.module.scss';

const NoticesPage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			dispatch(getNoticeByCategory());
		})();
	}, [dispatch]);



	const notices = useSelector(getCurrentNotices);


	return (
		<Container>
			<NoticesHeading />
			<NoticesSearch />
			<div className={styles.wrapper}>
				<NoticesCategories categories={'long'} />
				<NoticesAddPet />
			</div>
			<NoticesList notices={notices} />
		</Container>
	);
};

export default NoticesPage;
