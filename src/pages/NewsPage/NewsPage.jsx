import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNews, getNewsError, getNewsLoading } from '../../redux/news/news-selectors'
import { getAllNews } from '../../redux/news/news-operations'

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
    <div>NewsPage</div>
  )
}

export default NewsPage