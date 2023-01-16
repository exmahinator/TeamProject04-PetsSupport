import style from '../Buttons.module.scss';

export const ContactBtn = ({ phone }) => {
	return (
		<a href={`tel:${phone}`} className={style.infoModal__contact}>
			Contact
		</a>
	);
};
