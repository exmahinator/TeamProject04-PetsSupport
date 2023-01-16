import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQueryParams } from 'redux/notices/notices-slice';
import { getFilter } from 'redux/notices/notices-selectors';
import { getNoticeByCategory } from 'redux/notices/notices-operations';
import { SearchTooltip } from 'components/News/Search/SearchTooltip';
import { SearchBtns } from 'components/News/Search/SearchBtns/SearchBtns';

import style from './NoticesSearch.module.scss';

export const NoticesSearch = () => {
	const filter = useSelector(getFilter);

	const dispatch = useDispatch();
	const input = useRef();
	if (input.current) input.current.value = filter ?? '';

	const handleClear = e => {
		e.preventDefault();

		dispatch(setQueryParams({ filter: '' }));

		dispatch(getNoticeByCategory());
		return;
	};

	const handleSearch = e => {
		e.preventDefault();

		dispatch(setQueryParams({ filter: input.current.value }));
		dispatch(getNoticeByCategory());
	};

	return (
		<div className={style.wrapper}>
			<form>
				<input
					ref={input}
					className={style.input}
					type="text"
					placeholder="Search"
				/>
				<SearchTooltip />
				<SearchBtns
					input={input}
					handleClear={handleClear}
					handleSearch={handleSearch}
				/>
			</form>
		</div>
	);
};
