import { ReactComponent as NoticesHartSvg } from 'shared/images/Notices/Notices-hart.svg';

import style from '../Favorite.module.scss';

export const Button = ({ func, id, btnType = 'add' }) => {
	return (
		<button onClick={func} id={id} className={style.likeWrap__button}>
			<NoticesHartSvg
				fill={btnType === 'add' ? 'white' : '#F59256'}
				className={style.likeWrap__svg}
			/>
		</button>
	);
};
