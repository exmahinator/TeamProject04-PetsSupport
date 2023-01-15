import { HeartLoader } from '../HeartLoader/HeartLoader';
import { Added } from './Added/Added';
import { NotAdded } from './NotAdded/NotAdded';

export const Favorite = ({
	onAddToFavorite,
	onRemoveFromFavorite,
	id,
	favNotices,
	isFavLoading,
}) => {
	// console.log(favNotices)
	return (
		<>
			{isFavLoading ? (
				<HeartLoader />
			) : favNotices.includes(id) ? (
				<Added onRemoveFromFavorite={onRemoveFromFavorite} id={id} />
			) : (
				<NotAdded onAddToFavorite={onAddToFavorite} id={id} />
			)}
		</>
	);
};
