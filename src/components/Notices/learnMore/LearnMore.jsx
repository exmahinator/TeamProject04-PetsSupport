import React, { useEffect, useState } from 'react';
import { Modal } from 'components/Reuse/Modal/Modal';
import styles from './LearnMore.module.scss';

const LearnMore = ({ imageURL, title, comments, category }) => {
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
					<div className={styles.pctWrap}>
						<img
							className={styles.pictures}
							src={imageURL}
							alt={title}
							title={title}
						/>
						<div className={styles.categoriesWrap}>
							<p className={styles.categories}>{category}</p>
						</div>
					</div>
					<div>
						<div className={styles.heading}>
							<h2>{title}</h2>
						</div>
						<div>
							<ul className={styles.list}>
								<li className={styles.item}>
									<p className={styles.desc}>Name:</p>
									<p>name</p>
								</li>
								<li className={styles.item}>
									<p className={styles.desc}>Birthday:</p>
									<p>birthday</p>
								</li>
								<li className={styles.item}>
									<p className={styles.desc}>Breed:</p>
									<p>breed</p>
								</li>
								<li className={styles.item}>
									<p className={styles.desc}>Place:</p>
									<p>location</p>
								</li>
								<li className={styles.item}>
									<p className={styles.desc}>The sex:</p>
									<p>sex</p>
								</li>
								<li className={styles.item}>
									<p className={styles.desc}>Email:</p>
									<p>price</p>
								</li>
								<li className={styles.item}>
									<p className={styles.desc}>Phone:</p>
									<p>price</p>
								</li>
							</ul>
						</div>
					</div>
				<div className={styles.commen}>
          <h2>`Comments: ${comments}`</h2>
        </div>
				</div>
        </div>
			</Modal>
		</>
	);
};

export default LearnMore;
