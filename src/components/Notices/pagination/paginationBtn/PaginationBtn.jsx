import { useDispatch, useSelector } from 'react-redux';
import { getPage } from 'redux/notices/notices-selectors';
import { setPage } from 'redux/notices/notices-slice';
import { getNoticeByCategory } from 'redux/notices/notices-operations';
import style from './PaginationBtn.module.scss';

export const NoticesPaginationBtn = ({ value }) => {
	const dispatch = useDispatch();

	const page = useSelector(getPage);

	const btnStyle = page === value ? style.btnActive : style.btn;

	const handleBtnClick = () => {
		dispatch(setPage(value));
		dispatch(getNoticeByCategory());
	};

	return (
		<button className={btnStyle} onClick={handleBtnClick}>
			{value}
		</button>
	);
};
