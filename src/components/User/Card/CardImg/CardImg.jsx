import { useMediaQuery } from 'react-responsive';

import catImg from 'shared/images/user/anonymousCat.png';
import style from './CardImg.module.scss';

export const CardImg = () => {
	const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

	return (
		<div className={style.card__imgThumb}>
			{isTablet ? (
				<img src={catImg} alt="cat" width={160} height={160} />
			) : (
				<img src={catImg} alt="cat" width={240} height={240} />
			)}
		</div>
	);
};
