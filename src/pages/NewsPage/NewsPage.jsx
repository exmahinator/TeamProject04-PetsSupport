import styles from './NewsPage.module.scss';

import { NewsList } from 'components/News/NewList/NewsList';
import { Container } from 'components/Reuse/Container/Container';
import { Title } from 'components/Reuse/Title/Title';

import {  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getNews, getQueryParams, getTotalPages,
  // getNewsError, getNewsLoading
} from '../../redux/news/news-selectors'
import { getAllNews } from '../../redux/news/news-operations'
import { Search } from 'components/News/Search/Search';
import { PaginationList } from 'components/Reuse/Pagination/PaginationList/PaginationList';


const NewsPage = () => {

  const dispatch = useDispatch()
  const news = useSelector(getNews)
  const totalPages = useSelector(getTotalPages)
  const queryParams = useSelector(getQueryParams)

  useEffect(() => {
    dispatch(getAllNews(queryParams))
     },[dispatch, queryParams])


  // console.log(news)
  // console.log(isLoading)
  // console.log(error)

  return (
    <section className={styles.section}>
      <Container>
      <Title text='News' />
        <Search />      
        <NewsList data={news} />
        {totalPages > 1 && <PaginationList pages={ totalPages} />}
      </Container>
    </section>
  )
}

export default NewsPage