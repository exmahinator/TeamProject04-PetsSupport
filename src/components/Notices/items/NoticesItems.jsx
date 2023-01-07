import styles from './NoticesItems.module.scss';
import { ReactComponent as NoticesHartSvg } from 'shared/images/Notices/Notices-hart.svg';
import { Button } from 'components/Reuse/Button/Button';
import LearnMore from '../learnMore/LearnMore';

const NoticesItems = ({
	category,
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
					<button className={styles.likeWrap__button}>
						<NoticesHartSvg className={styles.likeWrap__svg}/>
					</button>
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
							imageURL={imageURL}
							title={title}
							comments={comments}
							category={category}
							name={name}
							birthday={birthday}
							breed={breed}
							location={location}
							sex={sex}
							price={price}
							email={email}
							phone={phone}
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
