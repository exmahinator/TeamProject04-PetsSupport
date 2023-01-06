import { Container } from 'components/Reuse/Container/Container';
import React from 'react';
import style from './HomePage.module.scss';
import girlPhoneUrl from '../../shared/images/Home/phoneImg.png';

// import { Title } from 'components/Reuse/Title/Title';

const HomePage = () => {
	return (
		// <div className={style.heart}></div>
		<>
			{/* <div className={style.backImg}>
				<div className={style.img}></div>
				<Container>
					<h1 className={style.text}>Take good care of your small pets</h1>
				</Container>
			</div> */}
			<Container>
				<section className={style.headerSection}>
					<h1 className={style.text}>Take good care of your small pets</h1>
					{/* <div></div> */}
					{/* <div className={style.backImg}>
						<div className={style.img}></div>
					</div> */}
					<div className={style.headerImgBox}>
						<img
							className={style.img}
							src={girlPhoneUrl}
							alt={'Girl with her beloved pet'}
							width={320}
						/>
					</div>
					<div className={style.backImg}></div>
					{/* <picture>
						<source
							srcset="../../shared/images/Home/desktopFone.png 1x"
							media="(min-width: 320px)"
						/>
						<img
							src="../../shared/images/Home/desktopFone.png"
							alt="Girl with beloved animal"
							width="320"
						/>
					</picture> */}
				</section>
			</Container>
		</>
	);
};

export default HomePage;
