import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getFilteredNotices } from 'redux/notices/notices-selectors';
import { Container } from 'components/Reuse/Container/Container';
import NoticesHeading from 'components/Notices/heading/NoticesHeading';
import NoticesSearch from 'components/Notices/search/NoticesSearch';
import NoticesCategories from 'components/Notices/categories/NoticesCategories';
import NoticesAddPet from 'components/Notices/addPet/NoticesAddPet';
import styles from './NoticesPage.module.scss';

const NoticesPage = () => {
	const info = useSelector(getFilteredNotices);


	return (
		<section className={styles.section}>

		<Container>
			<NoticesHeading />
			<NoticesSearch />
			<div className={styles.wrapper}>
				<NoticesCategories />
				<NoticesAddPet />
			</div>
			<Outlet context={info} />
		</Container>
		</section>
	);
};

export default NoticesPage;
