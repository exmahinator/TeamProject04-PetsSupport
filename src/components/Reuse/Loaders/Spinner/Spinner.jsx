import style from './Spinner.module.scss';

export const Spinner = ({ customStyle = {} }) => {
	return (
		<div className={style.center_content} style={customStyle}>
			<div className={style.loader}>
				<svg viewBox="0 0 20 20" width={30} height={30}>
					<circle id="Oval" fill="green" cx="10" cy="10" r="10"></circle>
				</svg>
			</div>
		</div>
	);
};
