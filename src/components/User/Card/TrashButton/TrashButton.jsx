import { ReactComponent as TrashIcon } from 'shared/images/user/trashIcon.svg';
import { useMediaQuery } from 'react-responsive';

import style from './TrashButton.module.scss';

export const TrashButton = () => {
	const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

	const onDeletePet = e => {
		e.preventDefault();
		console.log('first');
	};

	return (
		<>
			{isTablet ? (
				<button type="button" className={style.iconThumb} onClick={onDeletePet}>
					<TrashIcon
						className={style.trashIcon}
						fill="rgba(17, 17, 17, 0.6)"
						width={24}
						height={24}
					/>
				</button>
			) : (
				<button onClick={onDeletePet} type="button" className={style.iconThumb}>
					<TrashIcon
						className={style.trashIcon}
						fill="rgba(17, 17, 17, 0.6)"
						width={15}
						height={15}
					/>
				</button>
			)}
		</>
	);
};
