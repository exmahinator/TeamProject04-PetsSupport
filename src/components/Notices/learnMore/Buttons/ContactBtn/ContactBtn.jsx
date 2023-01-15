import style from '../Buttons.module.scss';

export const ContactBtn = ({ phone, onCloseModal }) => {
	return (
		<a
			href={`tel:${phone}`}
			// onClick={onCloseModal}
			className={style.infoModal__contact}
		>
			Contact
		</a>
	);
};
