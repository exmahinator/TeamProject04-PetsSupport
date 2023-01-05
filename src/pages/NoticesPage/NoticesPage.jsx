import NoticesHeading from 'components/Notices/heading/NoticesHeading';
import NoticesSearch from 'components/Notices/search/NoticesSearch';
import NoticesCategories from 'components/Notices/categories/NoticesCategories';
import NoticesAddPet from 'components/Notices/addPet/NoticesAddPet';
import NoticesList from 'components/Notices/list/NoticesList';
import { Container } from 'components/Reuse/Container/Container';
import styles from './NoticesPage.module.scss';


const NoticesPage = () => {

  return (
    <Container>
    <NoticesHeading/>
    <NoticesSearch/>
      <div className={styles.wrapper}>
        <NoticesCategories categories={'long'}/>
        <NoticesAddPet/>
      </div>
    <NoticesList/>
    </Container>
  )
}

export default NoticesPage

