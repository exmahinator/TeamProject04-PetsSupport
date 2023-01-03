import React from 'react'
import styles from './NoticesPage.module.scss';
import NoticesItems from 'components/Notices/items/NoticesItems'
import NoticesHeading from 'components/Notices/heading/NoticesHeading';
import NoticesSearch from 'components/Notices/search/NoticesSearch';
import NoticesCategories from 'components/Notices/categories/NoticesCategories';
// import {ReactComponent as NoticesPlusSvg} from 'shared/images/Notices/Notices-plus.svg';
import NoticesAddPet from 'components/Notices/addPet/NoticesAddPet';


const NoticesPage = () => {

  return (
    <div className={styles.container}>
      <NoticesHeading/>
      <NoticesSearch/>
      <NoticesCategories/>
      <NoticesItems/>
      <NoticesItems/>
      <NoticesItems/>
      <NoticesItems/>
      <NoticesItems/>
      <NoticesItems/>
      <NoticesItems/>
      <NoticesItems/>
      <NoticesItems/>
      <NoticesItems/>
      <NoticesAddPet/>
    </div>
  )
}

export default NoticesPage

