import React, { useEffect, useState } from 'react';
import { Modal } from 'components/Reuse/Modal/Modal';
import styles from './LearnMore.module.scss';

const LearnMore = ({ imageURL, title }) => {
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
				<div>
        <div className={styles.pctWrap}>
				<img
					className={styles.pictures}
					src={imageURL}
					alt={title}
					title={title}
				/>
				<button className={styles.svgWrap}>
					{/* <NoticesHartSvg /> */}
				</button>
				<div className={styles.categoriesWrap}>
					{/* <p className={styles.categories}>{category}</p> */}
				</div>
			</div>
					<div>
						<div className={styles.heading}>
							<h2>{title}</h2>
						</div>
						<div>
							{/* <ul className={styles.list}>
              <li className={styles.item}>
									<p className={styles.desc}>Name:</p>
									<p>{name}</p>
								</li>
								<li className={styles.item}>
									<p className={styles.desc}>Birthday:</p>
									<p>{birthday}</p>
								</li>
								<li className={styles.item}>
									<p className={styles.desc}>Breed:</p>
									<p>{breed}</p>
								</li>
								<li className={styles.item}>
									<p className={styles.desc}>Place:</p>
									<span>&nbsp;&nbsp;&nbsp;</span>
									<p>{location}</p>
								</li>
								<li className={styles.item}>
									<p className={styles.desc}>The sex:</p>
									<span>&nbsp;</span>
									<p>{sex}</p>
								</li>
                <li className={styles.item}>
									<p className={styles.desc}>Email:</p>
									<span>&nbsp;</span>
									<p>{price}</p>
								</li>
                <li className={styles.item}>
									<p className={styles.desc}>Phone:</p>
									<span>&nbsp;</span>
									<p>{price}</p>
								</li>
							</ul> */}
						</div>
					</div>
				</div>
				<h2>
					`Comments: rjvt`
				</h2>
			</Modal>
		</>
	);
};

export default LearnMore;
