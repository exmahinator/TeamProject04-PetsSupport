import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getNoticeByCategory } from 'redux/notices/notices-operations';
import { Buttons } from './Buttons/Buttons';
import { Modal } from 'components/Reuse/Modal/Modal';

import styles from './LearnMore.module.scss';

export const LearnMore = ({
	data,
	favNotices,
	isFavLoading,
	onAddToFavorite,
	onRemoveFromFavorite,
	isShowModal,
	setIsShowModal,
	listCategory,
}) => {
	const {
		_id: id,
		sex,
		name,
		breed,
		email,
		phone,
		title,
		location,
		imageURL,
		birthday,
		comments,
		category,
	} = data;

	const dispatch = useDispatch();

	const showModal = () => {
		setIsShowModal(true);
		if (typeof window != 'undefined' && window.document) {
			document.body.style.overflow = 'hidden';
		}
	};

	const onClose = () => {
		if (listCategory === 'favorite') {
			dispatch(getNoticeByCategory());
		}
		setIsShowModal(false);
		document.body.style.overflow = 'unset';
	};

	useEffect(() => {
		const handeleClickDown = e => {
			if (e.code === 'Escape') {
				onClose();
			}
		};
		window.addEventListener('keydown', handeleClickDown);
		return () => {
			window.removeEventListener('keydown', handeleClickDown);
		};
		// eslint-disable-next-line
	}, []);

	const handleBackdropClick = e => {
		if (e.currentTarget === e.target) {
			onClose();
		}
	};

	return (
		<>
			<Modal
				btnType={'long'}
				isShowModal={isShowModal}
				setIsShowModal={showModal}
				handleBackdropClick={handleBackdropClick}
			>
				<div className={styles.box}>
					<div className={styles.box__flexBox}>
						<div className={styles.wrap}>
							<img
								className={styles.wrap__pictures}
								src={imageURL}
								alt={name}
							/>
							<div className={styles.wrapCategories}>
								<p className={styles.wrapCategories__categories}>{category}</p>
							</div>
						</div>
						<div>
							<div className={styles.heading}>
								<h2 className={styles.heading__title}>{title}</h2>
							</div>
							<div>
								<ul className={styles.list}>
									{name !== '' && (
										<li className={styles.list__item}>
											<p className={styles.desc}>Name:</p>
											<p className={styles.desc__paragraph}>{name}</p>
										</li>
									)}
									{birthday !== '' && (
										<li className={styles.list__item}>
											<p className={styles.desc}>Birthday:</p>
											<p className={styles.desc__paragraph}>{birthday}</p>
										</li>
									)}

									{breed !== '' && (
										<li className={styles.list__item}>
											<p className={styles.desc}>Breed:</p>
											<p className={styles.desc__paragraph}>{breed}</p>
										</li>
									)}
									{location !== '' && (
										<li className={styles.list__item}>
											<p className={styles.desc}>Place:</p>
											<p className={styles.desc__paragraph}>{location}</p>
										</li>
									)}
									{sex !== '' && (
										<li className={styles.list__item}>
											<p className={styles.desc}>The sex:</p>
											<p className={styles.desc__paragraph}>{sex}</p>
										</li>
									)}
									{email !== '' && (
										<li className={styles.list__item}>
											<p className={styles.desc}>Email:</p>
											<a
												href="mailto:email"
												className={styles.desc__paragraph__contact}
											>
												{email}
											</a>
										</li>
									)}
									{phone !== '' && (
										<li className={styles.list__item}>
											<p className={styles.desc}>Phone:</p>
											<a
												href="tel:phone"
												className={styles.desc__paragraph__contact}
											>
												{phone}
											</a>
										</li>
									)}
								</ul>
							</div>
						</div>
					</div>
					<div className={styles.commen}>
						{comments !== '' && (
							<p className={styles.commen__paragraph}>
								<span className={styles.commen__span}>Comments: </span>
								{comments}
							</p>
						)}
					</div>

					<Buttons
						id={id}
						phone={phone}
						onCloseModal={onClose}
						favNotices={favNotices}
						isFavLoading={isFavLoading}
						onAddToFavorite={onAddToFavorite}
						onRemoveFromFavorite={onRemoveFromFavorite}
					/>
				</div>
			</Modal>
		</>
	);
};
