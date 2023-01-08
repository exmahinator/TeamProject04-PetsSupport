import NoticesHeading from 'components/Notices/heading/NoticesHeading';
import NoticesSearch from 'components/Notices/search/NoticesSearch';
import NoticesCategories from 'components/Notices/categories/NoticesCategories';
import NoticesAddPet from 'components/Notices/addPet/NoticesAddPet';
import { Container } from 'components/Reuse/Container/Container';
import styles from './NoticesPage.module.scss';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import {getFilteredNotices} from 'redux/notices/notices-selectors'

const NoticesPage = () => {
	// Пример как передавать пропсы в Outlet: пример того, что введут в инпут
	const info = useSelector(getFilteredNotices);
	const navigate = useNavigate();


	useEffect(() => {
		navigate('/notices/sell');
	}, [navigate]);

	return (
		<Container>
			<NoticesHeading />
			{/* если вы не придумаете переиспользованный инпут, просто сделайте здесь инпут втупую не компонентом, прилепите на него onChange и useState */}
			<NoticesSearch />
			<div className={styles.wrapper}>
				{/* Это нужно просто достилизовать */}
				<NoticesCategories />
				{/* сюда даже не лезла */}
				<NoticesAddPet />
			</div>
			{/* А здесь у нас отрисовывается нотис лист, на который мы кликнули */}
			<Outlet context={info} />
		</Container>
	);
};

export default NoticesPage;
