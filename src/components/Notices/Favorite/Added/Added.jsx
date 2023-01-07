import { ReactComponent as NoticesHartSvg } from 'shared/images/Notices/Notices-hart.svg';

import style from '../Favorite.module.scss';

export const Added = ({ onRemoveFromFavorite, id }) => {
	return (
		<button
			onClick={onRemoveFromFavorite}
			id={id}
			className={style.likeWrap__button}
		>
			<NoticesHartSvg fill="#F59256" className={style.likeWrap__svg} />
		</button>
	);
};
