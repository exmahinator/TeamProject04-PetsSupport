import { ReactComponent as TrashIcon } from 'shared/images/user/trashIcon.svg';
import { useMediaQuery } from 'react-responsive';

import style from './TrashButton.module.scss';
import { Spinner } from 'components/Reuse/Loaders/Spinner/Spinner';

export const TrashButton = ({ id, onDeletePet, isPetsLoading }) => {
	const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

	return (
		<>
			{isTablet ? (
				<button
					id={id}
					type="button"
					className={style.iconThumb}
					onClick={id => onDeletePet(id)}
				>
					{isPetsLoading ? (
						<Spinner />
					) : (
						<TrashIcon
							className={style.trashIcon}
							fill="currentColor"
							width={24}
							height={24}
						/>
					)}
				</button>
			) : (
				<button
					id={id}
					onClick={id => onDeletePet(id)}
					type="button"
					className={style.iconThumb}
				>
					{isPetsLoading ? (
						<Spinner />
					) : (
						<TrashIcon
							className={style.trashIcon}
							fill="currentColor"
							width={15}
							height={15}
						/>
					)}
				</button>
			)}
		</>
	);
};
