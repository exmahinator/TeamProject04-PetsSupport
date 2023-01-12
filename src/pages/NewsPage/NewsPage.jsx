import styles from './NewsPage.module.scss';

import { NewsList } from 'components/News/NewList/NewsList';
import { Container } from 'components/Reuse/Container/Container';
import { Title } from 'components/Reuse/Title/Title';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getNews,
	getQueryParams,
	getTotalPages,
	getNewsLoading,
	// getNewsError,
} from '../../redux/news/news-selectors';
import { getAllNews } from '../../redux/news/news-operations';
import { Search } from 'components/News/Search/Search';
import { PaginationList } from 'components/Reuse/Pagination/PaginationList/PaginationList';
import { NewsEmpty } from 'components/News/NewsEmpty/NewsEmpty';
import { BigSpinner } from 'components/Reuse/Loaders/Spinner/BigSpinner';

const NewsPage = () => {
	const dispatch = useDispatch();
	const news = useSelector(getNews);
	const totalPages = useSelector(getTotalPages);
	const queryParams = useSelector(getQueryParams);
	const isLoading = useSelector(getNewsLoading);

	const noResults = !news.length && !isLoading;

	useEffect(() => {
		dispatch(getAllNews(queryParams));
	}, [dispatch, queryParams]);

	return (
		<section className={styles.section}>
			<Container>
				<Title text="News" />
				<Search />
				{isLoading ? (
					<div className={styles.spinner}>
						<BigSpinner />
					</div>
				) : (
					<NewsList data={news} />
				)}
				{noResults && <NewsEmpty />}

				{totalPages > 1 && <PaginationList pages={totalPages} />}
			</Container>
		</section>
	);
};

export default NewsPage;
