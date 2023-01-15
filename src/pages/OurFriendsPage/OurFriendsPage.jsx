import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getServices,
	getServicesLoading,
} from '../../redux/services/services-selectors';
import { getAllServices } from '../../redux/services/services-operations';
import { Container } from '@mui/material';
import { Title } from 'components/Reuse/Title/Title';
import { OurFriendsList } from '../../components/OurFriends/OurFriendsList/OurFriendsList';
import style from './OurFriendsPage.module.scss';
import { BigSpinner } from 'components/Reuse/Loaders/Spinner/BigSpinner';

const OurFriendsPage = () => {
	const dispatch = useDispatch();
	const services = useSelector(getServices);
	const isLoading = useSelector(getServicesLoading);

	useEffect(() => {
		dispatch(getAllServices());
	}, [dispatch]);

	return (
		<section className={style.friends_section}>
			<Container>
				<Title text={'Our friends'} />
				{isLoading && (
					<div className={style.spinner}>
						<BigSpinner />
					</div>
				)}
				<OurFriendsList data={services} />
			</Container>
		</section>
	);
};

export default OurFriendsPage;
