import { NewsList } from 'components/News/NewList/NewsList';
import NoticesSearch from 'components/Notices/search/NoticesSearch';
import { Container } from 'components/Reuse/Container/Container';
import { Title } from 'components/Reuse/Title/Title';
import React from 'react'
import styles from './NewsPage.module.scss';

const NewsPage = () => {
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