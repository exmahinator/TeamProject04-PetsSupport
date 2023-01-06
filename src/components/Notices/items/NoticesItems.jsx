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
					className={styles.pictures}
					src={imageURL}
					alt={title}
					title={title}
				/>
				<button className={styles.svgWrap}>
					<NoticesHartSvg />
				</button>
				<div className={styles.categoriesWrap}>
					<p className={styles.categories}>{category}</p>
				</div>
			</div>
			<div>
				<div className={styles.heading}>
					<h2>{title}</h2>
				</div>
				<div className={styles.paragraph}>
					<ul className={styles.list}>
						<li className={styles.item}>
							<p className={styles.desc}>Breed:</p>
							<p>{breed}</p>
						</li>
						<li className={styles.item}>
							<p className={styles.desc}>Place:</p>
							<p>{location}</p>
						</li>
						<li className={styles.item}>
							<p className={styles.desc}>Age:</p>
							<span>&nbsp;&nbsp;&nbsp;</span>
							<p>{birthday}</p>
						</li>
						<li className={styles.item}>
							<p className={styles.desc}>Price:</p>
							<span>&nbsp;</span>
							<p>{price}</p>
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
