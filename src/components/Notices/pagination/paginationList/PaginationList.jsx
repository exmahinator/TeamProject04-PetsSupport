import { NoticesPaginationBtn } from '../paginationBtn/PaginationBtn';
import style from './PaginationList.module.scss';

export const NoticesPaginationList = ({ pages }) => {
	const arr = Array(pages).fill('*');

	return (
		<div className={style.wrapper}>
			<ul className={style.list}>
				{arr.map((el, index) => {
					return (
						<li key={index}>
							<NoticesPaginationBtn value={index + 1} />
						</li>
					);
				})}
			</ul>
		</div>
	);
};
