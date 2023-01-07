import style from './HeartLoader.module.scss';

export const HeartLoader = () => {
	return (
		<div className={style.container}>
			<div className={style.preloader}>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	);
};
