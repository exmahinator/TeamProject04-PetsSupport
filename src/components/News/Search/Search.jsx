import React, { useRef, useCallback } from 'react';
import { ReactComponent as SearchIcon } from 'shared/images/overused/NewsSearch.svg';
import { ReactComponent as ClearIcon } from 'shared/images/overused/x-circle.svg';

import debounce from 'lodash.debounce';
import styles from './Search.module.scss';

export const Search = ({setFilter}) => {
	const input = useRef();

	const clearBtnHandler = () => {
		input.current.value = '';
		setFilter('');
	};

	const changeHandler = event => {
		setFilter(event.target.value)

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
};
