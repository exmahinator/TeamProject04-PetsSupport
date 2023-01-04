import style from './CardMarkUp.module.scss';

export const CardMarkUp = ({ cardData }) => {
	return (
		<ul className={style.card__meta}>
			{Object.entries(cardData)?.map(([key, value], idx) => (
				<li key={idx} className={style.card__metaInfo}>
					<p className={style.card__metaHeading}>{key} :</p>&nbsp;
					<p className={style.card__metaText}>{value}</p>
				</li>
			))}
		</ul>
	);
};
