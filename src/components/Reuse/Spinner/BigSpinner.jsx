import style from './Spinner.module.scss';

export const BigSpinner = () => {
	return (
		<div className={style.center_content}>
			<div className={style.loader}>
				<svg viewBox="0 0 20 20" width={130} height={130}>
					<circle id="Oval" fill="green" cx="10" cy="10" r="10"></circle>
				</svg>
			</div>
		</div>
	);
};
