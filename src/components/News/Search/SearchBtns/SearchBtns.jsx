import { ReactComponent as SearchIcon } from 'shared/images/overused/NewsSearch.svg';
import { ReactComponent as ClearIcon } from 'shared/images/overused/x-circle.svg';

import style from './SearchBtns.module.scss';

export const SearchBtns = ({
	input,
	isCloseIcon,
	handleClear,
	handleSearch,
}) => {
	const showClose = input ? !!input.current?.value : isCloseIcon;

	return showClose ? (
		<button type="button" className={style.btn} onClick={e => handleClear(e)}>
			<ClearIcon className={style.clear} />
		</button>
	) : (
		<button type="submit" className={style.btn} onClick={e => handleSearch(e)}>
			<SearchIcon className={style.search} />
		</button>
	);
};
