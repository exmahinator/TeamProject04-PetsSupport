import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getServices,
	// getServicesError,
	// getServicesLoading,
} from '../../redux/services/services-selectors';
import { getAllServices } from '../../redux/services/services-operations';
import { Container } from '@mui/material';
import { Title } from 'components/Reuse/Title/Title';
import { OurFriendsList } from './OurFriendsList/OurFriendsList';

const OurFriendsPage = () => {
	const dispatch = useDispatch();
	const services = useSelector(getServices);
	// const isLoading = useSelector(getServicesLoading);
	// const error = useSelector(getServicesError);

	useEffect(() => {
		dispatch(getAllServices());
	}, [dispatch]);

	// console.log('services', services);
	// console.log('isLoading', isLoading);
	// console.log('error', error);

	return (
		<Container>
			<Title text={'Our friends'} />
			<OurFriendsList data={services} />
		</Container>
	);
};

export default OurFriendsPage;
