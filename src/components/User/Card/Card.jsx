import { Container } from 'components/Reuse/Container/Container';
import { CardImg } from './CardImg/CardImg';
import { TrashButton } from './TrashButton/TrashButton';
import { CardMarkUp } from './CardMarkUp/CardMarkUp';

import style from './Card.module.scss';

const sapmle = [
	{
		name: 'Here can be your pet',
		birthday: '00.00.0000',
		breed: 'your pets breed',
		comments: 'Simply add your pet by clicking the button above ;) ',
	},
];

export const Card = ({ userPets, onDeletePet }) => {
	return (
		<Container>
			<ul className={style.card__list}>
				{(userPets?.length ? userPets : sapmle)?.map(
					({ avatarURL, _id, owner, createdAt, updatedAt, ...userPets }) => (
						<li key={_id} className={style.card__item}>
							<CardImg petImg={avatarURL} />
							<TrashButton id={_id} onDeletePet={onDeletePet} />
							<CardMarkUp cardData={userPets} id={_id} />
						</li>
					)
				)}
			</ul>
		</Container>
	);
};
