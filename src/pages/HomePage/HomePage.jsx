import { Container } from 'components/Reuse/Container/Container';
import React from 'react';
import style from './HomePage.module.scss';
import girlPhoneUrl from '../../shared/images/Home/phoneImg.png';
import girlPhoneUrl2x from '../../shared/images/Home/phoneImg2x.png';
import girlTabletUrl from '../../shared/images/Home/tabletImg.png';
import girlTabletUrl2x from '../../shared/images/Home/tabletImg2x.png';
import girlDesktopUrl from '../../shared/images/Home/desktopImg.png';
import girlDesktopUrl2x from '../../shared/images/Home/desktopImg2x.png';
// import { Title } from 'components/Reuse/Title/Title';

const HomePage = () => {
	return (
		<>
			<section className={style.headerSection}>
				<Container>
					<div className={style.headerControlBox}>
						{/* <Title text="Take good care of your small pets" /> */}
						<h1 className={style.text}>Take good care of your small pets</h1>
						<div className={style.headerImgBox}>
							<picture>
								<source
									srcSet={`${girlDesktopUrl} 1x,
                                    ${girlDesktopUrl2x} 2x`}
									media="(min-width: 1280px)"
								/>
								<source
									srcSet={`${girlTabletUrl} 1x,
                                    ${girlTabletUrl2x} 2x`}
									media="(min-width: 768px)"
								/>

								<img
									className={style.headerImg}
									src={girlPhoneUrl}
									alt={'Girl with her beloved pet'}
									width={645}
								/>
							</picture>
						</div>
					</div>
				</Container>
				<div className={style.headerImgBoxMobile}>
					<picture>
						<source
							srcSet={`${girlPhoneUrl} 1x,
                                    ${girlPhoneUrl2x} 2x`}
							media="(min-width: 320px)"
						/>

						<img
							className={style.headerImg}
							src={girlPhoneUrl}
							alt={'Girl with her beloved pet'}
							width={320}
						/>
					</picture>
				</div>
			</section>
		</>
	);
};

export default HomePage;
