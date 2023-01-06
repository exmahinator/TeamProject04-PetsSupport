import { Container } from 'components/Reuse/Container/Container';
import React from 'react';
import style from './HomePage.module.scss';
import girlPhoneUrl from '../../shared/images/Home/phoneImg.png';

const HomePage = () => {
	return (
		<>
			<section className={style.headerSection}>
				<Container>
					<h1 className={style.text}>Take good care of your small pets</h1>
				</Container>
				<div className={style.headerImgBox}>
					<img
						className={style.headerImg}
						src={girlPhoneUrl}
						alt={'Girl with her beloved pet'}
						width={320}
					/>
				</div>
			</section>
		</>
	);
};

export default HomePage;
