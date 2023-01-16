import style from './Input.module.scss';

export const Input = () => {
	return (
		<div className={style.wrap}>
			<input className={style.input} type="text" placeholder="Search" />
			<button className={style.btn}></button>
		</div>
	);
};
