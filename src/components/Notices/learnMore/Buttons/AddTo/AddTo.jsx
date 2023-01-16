import { HeartLoader } from 'components/Notices/HeartLoader/HeartLoader';
import { ReactComponent as AddToIcon } from 'shared/images/Notices/AddToIcon.svg';

import style from '../Buttons.module.scss';

export const AddTo = ({ id, onAddToFavorite, isFavLoading }) => {
	return (
		<button
			id={id}
			type="button"
			onClick={onAddToFavorite}
			className={style.infoModal__addTo}
		>
			{isFavLoading ? (
				<>
					<p>Wait...</p>
					<HeartLoader />
				</>
			) : (
				<>
					<p>Add to</p>

					<AddToIcon
						width={18}
						height={18}
						className={style.infoModal__addToIcon}
					/>
				</>
			)}
		</button>
	);
};
