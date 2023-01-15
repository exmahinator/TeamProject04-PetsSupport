import { ReactComponent as NoticesHartSvg } from 'shared/images/Notices/Notices-hart.svg';
import style from '../Favorite.module.scss';

export const NotAdded = ({ onAddToFavorite, id }) => {
	return (
		<button
			className={style.likeWrap__button}
			onClick={onAddToFavorite}
			id={id}
		>
			<NoticesHartSvg fill="white" className={style.likeWrap__svg} />
		</button>
	);
};
