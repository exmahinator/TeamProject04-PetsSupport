import React from 'react'
import styles from './NoticesPage.module.scss';
import NoticesItems from 'components/Notices/items/NoticesItems'
import NoticesHeading from 'components/Notices/heading/NoticesHeading';


const NoticesPage = () => {

  return (
    <div className={styles.container}>
      <NoticesHeading/>
      <NoticesItems/>
    </div>
  )
}

export default NoticesPage

