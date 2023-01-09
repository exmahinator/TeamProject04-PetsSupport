import styles from './NewsPage.module.scss';

import { NewsList } from 'components/News/NewList/NewsList';
import { Container } from 'components/Reuse/Container/Container';
import { Title } from 'components/Reuse/Title/Title';



import {  useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getNews,
  // getNewsError, getNewsLoading
} from '../../redux/news/news-selectors'
import { getAllNews } from '../../redux/news/news-operations'
import { Search } from 'components/News/Search/Search';


const NewsPage = () => {
  const [query, setQuery] = useState('')
    const [page, setPage] = useState(1)

  const dispatch = useDispatch()
  const news = useSelector(getNews)

  useEffect(() => {
  dispatch(getAllNews({page, query}))
  }, [dispatch, page, query])
   


    

  // console.log(news)
  // console.log(isLoading)
  // console.log(error)

  return (
    <section className={styles.section}>
      <Container>
      <Title text='News' />
        <Search setFilter={ setQuery} />
        
        <NewsList data={ news.slice(0)} />
      </Container>
    </section>
  )
}

export default NewsPage