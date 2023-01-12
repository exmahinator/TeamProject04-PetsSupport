import style from './ValidationError.module.scss';

export const ValidationError = ({ children, customStyle = {} }) => {
	return (
		<p className={style.error} style={customStyle}>
			{children}
		</p>
	);
};
