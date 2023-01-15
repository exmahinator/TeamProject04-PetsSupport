import { HeartLoader } from '../HeartLoader/HeartLoader';
import { Button } from './Button/Button';

export const Favorite = ({
	onAddToFavorite,
	onRemoveFromFavorite,
	id,
	favNotices,
	isFavLoading,
}) => {
	return (
		<>
			{isFavLoading ? (
				<HeartLoader />
			) : favNotices.includes(id) ? (
				<Button func={onRemoveFromFavorite} id={id} btnType={'remove'} />
			) : (
				<Button func={onAddToFavorite} id={id} />
			)}
		</>
	);
};
