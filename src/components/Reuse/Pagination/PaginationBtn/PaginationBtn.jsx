import { useDispatch, useSelector } from 'react-redux';
import { getQueryParams } from 'redux/news/news-selectors';
import { setQueryParams } from 'redux/news/news-slice';
import { scrollTop } from 'shared/functions/scrollTop';

import style from './PaginationBtn.module.scss';

export const PaginationBtn = ({ value }) => {
	const dispatch = useDispatch();
	const { page, query } = useSelector(getQueryParams);
	const btnStyle = page === value ? style.btnActive : style.btn;
	const handleBtnClick = () => {
		dispatch(setQueryParams({ page: value, query }));
		scrollTop();
	};

	return (
		<button className={btnStyle} onClick={handleBtnClick}>
			{value}
		</button>
	);
};
