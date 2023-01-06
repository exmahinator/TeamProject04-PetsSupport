import { Container } from 'components/Reuse/Container/Container';
import React from 'react';
import style from './HomePage.module.scss';

// import { Title } from 'components/Reuse/Title/Title';

const HomePage = () => {
	return (
		// <div className={style.heart}></div>
		<div className={style.backImg}>
			<div className={style.img}>
				<Container>
					<h1 className={style.text}>Take good care of your small pets</h1>
				</Container>
			</div>
		</div>
	);
};

export default HomePage;
