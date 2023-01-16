import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQueryParams } from 'redux/news/news-selectors';
import { setQueryParams } from 'redux/news/news-slice';
import { SearchTooltip } from './SearchTooltip';
import { SearchBtns } from './SearchBtns/SearchBtns';

import style from './Search.module.scss';

export const Search = () => {
	const { query } = useSelector(getQueryParams);
	const [isCloseIcon, setIsCloseIcon] = useState(!!query);

	const dispatch = useDispatch();
	const input = useRef();
	if (input.current) input.current.value = query ?? '';

	const handleClear = e => {
		e.preventDefault();
		setIsCloseIcon(prev => !prev);
		dispatch(setQueryParams({ query: '' }));
		return;
	};

	const handleSearch = e => {
		e.preventDefault();
		setIsCloseIcon(prev => !prev);
		dispatch(setQueryParams({ query: input.current.value }));
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
					isCloseIcon={isCloseIcon}
					handleClear={handleClear}
					handleSearch={handleSearch}
				/>
			</form>
		</div>
	);
};
