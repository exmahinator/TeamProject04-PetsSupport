import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {   setQueryParams } from 'redux/notices/notices-slice';
import style from './NoticesSearch.module.scss';
import { SearchTooltip } from 'components/News/Search/SearchTooltip';
import { SearchBtns } from 'components/News/Search/SearchBtns/SearchBtns';
import { getNoticeByCategory } from 'redux/notices/notices-operations';
import { getQueryParams } from 'redux/notices/notices-selectors';


const NoticesSearch = () => {
	const { filter } = useSelector(getQueryParams);

    const dispatch = useDispatch();
	const input = useRef();
	if (input.current) input.current.value = filter ?? '';
	// const isInputValue = input.current ? !!input.current.value : false
	// const [isCloseIcon, setIsCloseIcon] = useState(isInputValue);



	const handleClear = e => {
		e.preventDefault();
		// setIsCloseIcon(prev => !prev);
		dispatch(setQueryParams({ filter: '' }));

				dispatch(getNoticeByCategory());
		return;
	};

	const handleSearch = e => {
		e.preventDefault();
		// setIsCloseIcon(prev => !prev);
			dispatch(setQueryParams({filter: input.current.value}));
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
				<SearchBtns input={input}  handleClear={ handleClear} handleSearch ={handleSearch} />
			</form>
		</div>
	);
};


export default NoticesSearch