import { Button } from 'components/Reuse/Button/Button';
import { useDispatch } from 'react-redux';
import {
	addNoticeToFavorite,
	removeNoticeFromFavorite,
} from 'redux/notices/notices-operations';
import { Favorite } from '../Favorite/Favorite';

import LearnMore from '../learnMore/LearnMore';
import styles from './NoticesItems.module.scss';

const NoticesItems = ({
	favNotices,
	isFavLoading,
	category,
	id,
	title,
	name,
	birthday,
	breed,
	sex,
	location,
	price,
	imageURL,
	comments,
	owner,
	email,
	phone,
}) => {
	const dispatch = useDispatch();

	const onAddToFavorite = e => {
		const cardId = e.currentTarget.id;

		dispatch(addNoticeToFavorite(cardId));
	};

	const onRemoveFromFavorite = e => {
		const cardId = e.currentTarget.id;

		dispatch(removeNoticeFromFavorite(cardId));
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.pctWrap}>
				<img
					className={styles.pctWrap__pictures}
					src={imageURL}
					alt={title}
					title={title}
				/>

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

				<div>
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
							<p className={styles.list__span}>{birthday}</p>
						</li>
						<li className={styles.list__item}>
							<p className={styles.list__paragraph}>Price:</p>
							<p className={styles.list__span}>{price ?? '-'}</p>
						</li>
					</ul>
				</div>

				<ul className={styles.btnContainer}>
					<li>
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
					</li>
					<li>
						<Button text={'Delete'} type={'white'} />
					</li>
				</ul>
			</div>
		</div>
	);
};

export default NoticesItems;
