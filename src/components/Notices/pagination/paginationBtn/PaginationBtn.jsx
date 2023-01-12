import { useDispatch, useSelector } from 'react-redux';
import { getQueryParams } from 'redux/notices/notices-selectors';
import { setQueryParams } from 'redux/notices/notices-slice';
import { getNoticeByCategory } from 'redux/notices/notices-operations';
import style from './PaginationBtn.module.scss';
import { scrollTop } from 'shared/functions/scrollTop';

export const NoticesPaginationBtn = ({ value }) => {
	const dispatch = useDispatch();

	const { page } = useSelector(getQueryParams);

	const btnStyle = page === value ? style.btnActive : style.btn;

	const handleBtnClick = () => {
		dispatch(setQueryParams({ page: value }));
		dispatch(getNoticeByCategory());
		scrollTop();
	};

	return (
		<button className={btnStyle} onClick={handleBtnClick}>
			{value}
		</button>
	);
};
