import { ReactComponent as NoticesHartSvg } from 'shared/images/Notices/Notices-hart.svg';

import style from './Favorite.module.scss';

export const Favorite = ({
	onAddToFavorite,
	onRemoveFromFavorite,
	id,
	favNotices,
}) => {
	// console.log(favNotices.includes(id));
	console.log('favNotices', favNotices);
	console.log('id', id);
	return (
		<>
			{favNotices.includes(id) ? (
				<button onClick={onRemoveFromFavorite} id={id}>
					remove
				</button>
			) : (
				<button
					className={style.likeWrap__button}
					onClick={onAddToFavorite}
					id={id}
				>
					<NoticesHartSvg className={style.likeWrap__svg} />
				</button>
			)}
		</>
	);
};
