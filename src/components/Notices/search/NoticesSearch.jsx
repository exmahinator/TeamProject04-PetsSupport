import React, { useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/notices/notices-slice';
import { ReactComponent as SearchIcon } from 'shared/images/overused/NewsSearch.svg';
import { ReactComponent as ClearIcon } from 'shared/images/overused/x-circle.svg';


import debounce from 'lodash.debounce';
import styles from './NoticesSearch.module.scss';


const NoticesSearch = () => {
  const dispatch = useDispatch();
	const input = useRef();

	const clearBtnHandler = () => {
		input.current.value = '';
		dispatch(setFilter(''));
	};

	const changeHandler = event => {
		dispatch(setFilter(event.target.value));
	};

	// eslint-disable-next-line
	const debouncedChangeHandler = useCallback(debounce(changeHandler, 600), []);

	return (
		<div className={styles.wrapper}>
			<input
				ref={input}
				onChange={debouncedChangeHandler}
				className={styles.input}
				type="text"
				placeholder="Search"
			/>
			{input.current?.value ? (
				<button className={styles.btn} onClick={clearBtnHandler}>
					<ClearIcon className={styles.clear} />
				</button>
			) : (
				<SearchIcon className={styles.search} />
			)}
		</div>
	);
}

export default NoticesSearch