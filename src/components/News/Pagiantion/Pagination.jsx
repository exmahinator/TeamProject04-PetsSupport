import { PaginationBtn } from '../PaginationBtn/PaginationBtn';
import style from './Pagination.module.scss';

export const Pagination = ({ pages, setPage }) => {
	const arr = Array(pages).fill('*')

	return (
		<div className={style.wrapper}>
			<ul className={style.list}>
				{arr.map((el, index) => {
                    return <li key={index}>
                        <PaginationBtn setPage={setPage} value={index+1 } />
                    </li>;
				})}
			</ul>
		</div>
	);
};
