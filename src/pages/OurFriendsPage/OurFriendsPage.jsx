import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getServices } from '../../redux/services/services-selectors';
import { getAllServices } from '../../redux/services/services-operations';
import { Container } from '@mui/material';
import { Title } from 'components/Reuse/Title/Title';
import { OurFriendsList } from './OurFriendsList/OurFriendsList';
import style from './OurFriendsPage.module.scss';

const OurFriendsPage = () => {
	const dispatch = useDispatch();
	const services = useSelector(getServices);

	useEffect(() => {
		dispatch(getAllServices());
	}, [dispatch]);

	return (
		<section className={style.friends_section}>
			<Container>
				<Title text={'Our friends'} />
				<OurFriendsList data={services} />
			</Container>
		</section>
	);
};

export default OurFriendsPage;
