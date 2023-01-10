import { PaginationBtn } from '../PaginationBtn/PaginationBtn';
import style from './PaginationList.module.scss';

export const PaginationList = ({ pages }) => {
	const arr = Array(pages).fill('*')

	return (
		<div className={style.wrapper}>
			<ul className={style.list}>
				{arr.map((el, index) => {
                    return <li key={index}>
                        <PaginationBtn  value={index+1 } />
                    </li>;
				})}
			</ul>
		</div>
	);
};
