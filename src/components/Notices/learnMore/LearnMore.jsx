import React, { useEffect, useState } from 'react';
import { Modal } from 'components/Reuse/Modal/Modal';
import styles from './LearnMore.module.scss';

const LearnMore = ({
	imageURL,
	title,
	comments,
	category,
	name,
	birthday,
	breed,
	location,
	sex,
  email,
  phone,
}) => {
	const [isShowModal, setIsShowModal] = useState(false);

	const onClose = () => {
		setIsShowModal(false);
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
				setIsShowModal={setIsShowModal}
				handleBackdropClick={handleBackdropClick}
			>
				<div className={styles.wrapper}>
					<div className={styles.flexBox}>
						<div className={styles.wrap}>
							<img
								className={styles.wrap__pictures}
								src={imageURL}
								alt={title}
								title={title}
							/>
							<div className={styles.catWrap}>
								<p className={styles.catWrap__categories}>{category}</p>
							</div>
						</div>
						<div>
							<div className={styles.heading}>
								<h2 className={styles.heading__title}>{title}</h2>
							</div>
							<div>
								<ul className={styles.list}>
									<li className={styles.list__item}>
										<p className={styles.desc}>Name:</p>
										<p className={styles.desc__paragraph}>{name}</p>
									</li>
									<li className={styles.list__item}>
										<p className={styles.desc}>Birthday:</p>
										<p className={styles.desc__paragraph}>{birthday}</p>
									</li>
									<li className={styles.list__item}>
										<p className={styles.desc}>Breed:</p>
										<p className={styles.desc__paragraph}>{breed}</p>
									</li>
									<li className={styles.list__item}>
										<p className={styles.desc}>Place:</p>
										<p className={styles.desc__paragraph}>{location}</p>
									</li>
									<li className={styles.list__item}>
										<p className={styles.desc}>The sex:</p>
										<p className={styles.desc__paragraph}>{sex}</p>
									</li>
									<li className={styles.list__item}>
										<p className={styles.desc}>Email:</p>
										<p className={styles.desc__paragraph}>{email ?? '-'}</p>
									</li>
									<li className={styles.list__item}>
										<p className={styles.desc}>Phone:</p>
										<p className={styles.desc__paragraph}>{phone ?? '-'}</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className={styles.commen}>
						<p className={styles.commen__paragraph}>
              <span className={styles.commen__span}>Comments: </span>{comments}
            </p>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default LearnMore;
