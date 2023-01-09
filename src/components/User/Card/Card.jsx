import { Container } from 'components/Reuse/Container/Container';
import { CardImg } from './CardImg/CardImg';
import { TrashButton } from './TrashButton/TrashButton';
import { CardMarkUp } from './CardMarkUp/CardMarkUp';

import style from './Card.module.scss';

export const Card = ({ userPets, onDeletePet, isUserLoading }) => {
	return (
		<Container>
			<ul className={style.card__list}>
				{userPets?.map(
					({ avatarURL, _id, owner, createdAt, updatedAt, ...userPets }) => (
						<li key={createdAt} className={style.card__item}>
							<CardImg petImg={avatarURL} />
							<TrashButton
								id={_id}
								onDeletePet={onDeletePet}
								isUserLoading={isUserLoading}
							/>
							<CardMarkUp cardData={userPets} id={_id} />
						</li>
					)
				)}
			</ul>
		</Container>
	);
};
