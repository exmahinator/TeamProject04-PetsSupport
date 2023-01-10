import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import {
	addNoticeToFavorite,
	removeNoticeFromFavorite,
} from 'redux/notices/notices-operations';
import { Favorite } from '../Favorite/Favorite';
import { getAge } from 'shared/functions/getAge';
import { numberToWord } from 'shared/functions/numberToWord';
import { ReactComponent as TrashIcon } from 'shared/images/user/trashIcon.svg';

import LearnMore from '../learnMore/LearnMore';
import styles from './NoticesItems.module.scss';

const NoticesItems = ({
	id,
	sex,
	name,
	price,
	breed,
	title,
	owner,
	email,
	phone,
	isLogin,
	ownerId,
	location,
	imageURL,
	comments,
	category,
	birthday,
	favNotices,
	isFavLoading,
	onDeleteNotice,
}) => {
	const dispatch = useDispatch();

	const onAddToFavorite = e => {
		const cardId = e.currentTarget.id;

		isLogin
			? dispatch(addNoticeToFavorite(cardId))
			: toast.error('Authorize please');
	};

	const onRemoveFromFavorite = e => {
		const cardId = e.currentTarget.id;

		dispatch(removeNoticeFromFavorite(cardId));
	};

	const born = getAge(birthday);
	const age = numberToWord(born);

	return (
		<div className={styles.wrapper}>
			<div className={styles.pctWrap}>
				<img className={styles.pctWrap__pictures} src={imageURL} alt={name} />

				<div className={styles.likeWrap}>
					<Favorite
						id={id}
						favNotices={favNotices}
						isFavLoading={isFavLoading}
						onAddToFavorite={onAddToFavorite}
						onRemoveFromFavorite={onRemoveFromFavorite}
					/>
				</div>

				<div className={styles.categor}>
					<p className={styles.categor__paragraph}>{category}</p>
				</div>
			</div>
			<div className={styles.boxWrap}>
				<div className={styles.heading}>
					<h2 className={styles.heading__title}>{title}</h2>
				</div>

				<ul className={styles.list}>
					<li className={styles.list__item}>
						<p className={styles.list__paragraph}>Breed:</p>
						<p className={styles.list__span}>{breed}</p>
					</li>
					<li className={styles.list__item}>
						<p className={styles.list__paragraph}>Place:</p>
						<p className={styles.list__span}>{location}</p>
					</li>
					<li className={styles.list__item}>
						<p className={styles.list__paragraph}>Age:</p>
						<p className={styles.list__span}>{age}</p>
					</li>
					{category === 'sell' && (
						<li className={styles.list__item}>
							<p className={styles.list__paragraph}>Price:</p>
							<p className={styles.list__span}>{price ?? '-'}</p>
						</li>
					)}
				</ul>

				<div className={styles.btnContainer}>
					<LearnMore
						id={id}
						sex={sex}
						name={name}
						phone={phone}
						breed={breed}
						price={price}
						title={title}
						email={email}
						imageURL={imageURL}
						birthday={birthday}
						category={category}
						comments={comments}
						location={location}
						favNotices={favNotices}
						isFavLoading={isFavLoading}
						onAddToFavorite={onAddToFavorite}
						onRemoveFromFavorite={onRemoveFromFavorite}
					/>

					{ownerId === owner && (
						<button
							id={id}
							type="button"
							onClick={e => onDeleteNotice(e)}
							className={styles.deleteOwnNotice}
						>
							Delete
							{
								<div className={styles.deleteOwnNotice__trash}>
									<TrashIcon fill="currentColor" width={16} height={17} />
								</div>
							}
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default NoticesItems;
