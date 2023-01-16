import { ReactComponent as SearchIcon } from 'shared/images/overused/NewsSearch.svg';

import style from './Search.module.scss';

export const SearchTooltip = () => {
	return (
		<p className={style.tooltip}>
			Enter the search word and press{' '}
			<SearchIcon className={style.searchTooltip} />
		</p>
	);
};
