import { NewsList } from 'components/News/NewList/NewsList';
import NoticesSearch from 'components/Notices/search/NoticesSearch';
import { Container } from 'components/Reuse/Container/Container';
import { Title } from 'components/Reuse/Title/Title';
import React from 'react'
<<<<<<< HEAD
import styles from './NewsPage.module.scss';
=======
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNews, getNewsError, getNewsLoading } from '../../redux/news/news-selectors'
import { getAllNews } from '../../redux/news/news-operations'
>>>>>>> 128aadff120c147d00126d9b1d8b3675e4b310bb

const NewsPage = () => {
  const dispatch = useDispatch()
  const news = useSelector(getNews)
  const isLoading = useSelector(getNewsLoading)
  const error = useSelector(getNewsError)

  useEffect(() => {
  dispatch(getAllNews())
  }, [dispatch])
  
  console.log(news)
  console.log(isLoading)
  console.log(error)

  return (
    <section className={styles.section}>
      <Container>
      <Title text='News' />
      <NoticesSearch/>
      <NewsList/>
      </Container>
    </section>
  )
}

export default NewsPage