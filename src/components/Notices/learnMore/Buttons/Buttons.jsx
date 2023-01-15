import { AddTo } from './AddTo/AddTo';
import { RemoveFrom } from './RemoveFrom/RemoveFrom';

import { ContactBtn } from './ContactBtn/ContactBtn';
import style from './Buttons.module.scss';

export const Buttons = ({
	id,
	phone,
	favNotices,
	isFavLoading,
	onCloseModal,
	onAddToFavorite,
	onRemoveFromFavorite,
}) => {
	return (
		<div className={style.infoModal__buttons}>
			<ContactBtn phone={phone} onCloseModal={onCloseModal} />

			{favNotices.includes(id) ? (
				<RemoveFrom
					id={id}
					isFavLoading={isFavLoading}
					onRemoveFromFavorite={onRemoveFromFavorite}
				/>
			) : (
				<AddTo
					id={id}
					isFavLoading={isFavLoading}
					onAddToFavorite={onAddToFavorite}
				/>
			)}
		</div>
	);
};
