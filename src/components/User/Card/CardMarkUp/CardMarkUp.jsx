import style from './CardMarkUp.module.scss';

export const CardMarkUp = ({ cardData }) => {
	return (
		<ul className={style.card__meta}>
			{Object.entries(cardData)?.map(([key, value]) => (
				<li key="test" className={style.card__metaInfo}>
					<p className={style.card__metaText}>
						<span className={style.card__metaHeading}>{key} :</span>&nbsp;
						{value}
					</p>
				</li>
			))}
		</ul>
	);
};
