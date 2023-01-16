import style from './Button.module.scss';

export const Button = ({
	text,
	colorType,
	type = 'button',
	onClickFunc = () => {
		console.log('Your func!');
	},
}) => {
	switch (colorType) {
		case 'orange':
			return (
				<button
					type={type}
					onClick={() => onClickFunc()}
					className={style.orange}
				>
					{text}
				</button>
			);
		case 'white':
			return (
				<button
					type={type}
					onClick={() => onClickFunc()}
					className={style.white}
				>
					{text}
				</button>
			);
		case 'transparent':
			return (
				<button
					type={type}
					onClick={() => onClickFunc()}
					className={style.transparent}
				>
					{text}
				</button>
			);
		case 'disabled':
			return (
				<button type={type} disabled={true} className={style.disabled}>
					{text}
				</button>
			);
		default:
			return;
	}
};
