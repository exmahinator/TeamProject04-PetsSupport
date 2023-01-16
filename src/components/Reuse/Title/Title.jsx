import style from './Title.module.scss';

export const Title = ({ text }) => {
	return <h2 className={style.title}>{text}</h2>;
};
