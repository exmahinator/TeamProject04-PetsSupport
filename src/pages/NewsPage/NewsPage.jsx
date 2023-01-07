import styles from './NewsPage.module.scss';

import { NewsList } from 'components/News/NewList/NewsList';
import { Container } from 'components/Reuse/Container/Container';
import { Title } from 'components/Reuse/Title/Title';



import {  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getFilteredNews,
  // getNewsError, getNewsLoading
} from '../../redux/news/news-selectors'
import { getAllNews } from '../../redux/news/news-operations'
import { Search } from 'components/News/Search/Search';


const NewsPage = () => {

  const dispatch = useDispatch()
  const news = useSelector(getFilteredNews)


  useEffect(() => {
  dispatch(getAllNews())
  }, [dispatch])
   
    

  // console.log(news)
  // console.log(isLoading)
  // console.log(error)

  return (
    <section className={styles.section}>
      <Container>
      <Title text='News' />
        <Search   />
        
        <NewsList data={ news.slice(0,6)} />
      </Container>
    </section>
  )
}

export default NewsPage