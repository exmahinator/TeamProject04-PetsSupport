import { Container } from 'components/Reuse/Container/Container';
import { CardImg } from './CardImg/CardImg';
import { TrashButton } from './TrashButton/TrashButton';

import style from './Card.module.scss';
import { CardMarkUp } from './CardMarkUp/CardMarkUp';

const data = [
	{
		name: 'Vasilek',
		birthday: '25.06.1979',
		breed: 'Kitaiskaya Gonchaya',
		comments: 'Lubit lizat yaica, a potom hozyaina ',
	},
	{
		name: 'Petya',
		birthday: '25.06.2021',
		breed: 'Drakonopodobnii',
		comments: 'Smotrit anime i igraet v doty s drygimi sobakami ',
	},
];

export const Card = ({ onDeletePet }) => {
	return (
		<Container>
			<ul className={style.card__list}>
				{data?.map((petInfo, idx) => (
					<li key={idx} className={style.card__item}>
						<CardImg />
						<TrashButton onClick={{ onDeletePet }} />
						<CardMarkUp cardData={petInfo} />
					</li>
				))}
			</ul>
		</Container>
	);
};
