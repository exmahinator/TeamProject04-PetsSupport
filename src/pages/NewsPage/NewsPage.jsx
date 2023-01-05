import { Title } from 'components/Reuse/Title/Title';
import React from 'react'
import styles from './NewsPage.module.scss';

const NewsPage = () => {
  return (
    <section className={styles.section}>
      <Title text='News'/>
    </section>
  )
}

export default NewsPage