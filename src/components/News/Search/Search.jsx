import React, { useRef, useState } from 'react';
import { ReactComponent as SearchIcon } from 'shared/images/overused/NewsSearch.svg';
import { ReactComponent as ClearIcon } from 'shared/images/overused/x-circle.svg';


import style from './Search.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getQueryParams } from 'redux/news/news-selectors';
import { setQueryParams } from 'redux/news/news-slice';

export const Search = () => {
	const {query} = useSelector(getQueryParams);
	const [isCloseIcon, setIsCloseIcon] = useState(!!query)

	const dispatch = useDispatch();
	const input = useRef();
	if (input.current) input.current.value = query ?? '';

	const btnHandler = () => {
		setIsCloseIcon(prev => !prev)
		if (isCloseIcon) {
			dispatch(setQueryParams({ query: '' }));
			return;
		}
		dispatch(setQueryParams({query: input.current.value}));
	};

	return (
		<div className={style.wrapper}>
			<input
				ref={input}
				className={style.input}
				type="text"
				placeholder="Search"
			/>		
			<p className={style.tooltip}>Enter the search word and press <SearchIcon className={style.searchTooltip} /></p>
				<button className={style.btn} onClick={btnHandler}>
					{isCloseIcon ? <ClearIcon className={style.clear} />:<SearchIcon className={style.search} /> }
				</button>		
		</div>
	);
};
