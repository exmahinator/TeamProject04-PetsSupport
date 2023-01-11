import style from './Search.module.scss';
import { ReactComponent as SearchIcon } from 'shared/images/overused/NewsSearch.svg';
export const SearchTooltip = () => {
	return (
		<p className={style.tooltip}>
			Enter the search word and press{' '}
			<SearchIcon className={style.searchTooltip} />
		</p>
	);
};
