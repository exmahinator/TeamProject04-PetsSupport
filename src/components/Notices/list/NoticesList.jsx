import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useOutletContext } from 'react-router-dom';
import {
	getCurrentNotices,
	getFavoriteNotices,
	getNoticesLoading,
} from 'redux/notices/notices-selectors';
import { useAuth } from 'shared/hooks/useAuth';
import {
	getFavoriteNoticeByUser,
	getFavoriteNoticeForCategories,
	getNoticeByCategory,
	getUserNotices,
} from '../../../redux/notices/notices-operations';
import NoticesItems from '../items/NoticesItems';
import styles from './NoticesList.module.scss';

const NoticesList = ({ category }) => {
	const isLogin = useAuth();
	const dispatch = useDispatch();

	// тут мы получаем то, что передали пропсом Outlet в компоненте NoticesPage, то, что ввели в наш поисковой инпут
	const info = useOutletContext();
	console.log(info);

	// здесь будут лежать наши каррент нотисы, с которыми надо работать
	const notices = useSelector(getCurrentNotices);

	// здесь будут лежать наши фейвориты
	const favNotices = useSelector(getFavoriteNotices);

	const isFavLoading = useSelector(getNoticesLoading);

	useEffect(() => {
		// тут мы получаем каррент нотисы
		switch (category) {
			case 'favorite':
				dispatch(getFavoriteNoticeForCategories());
				break;

			case 'own':
				dispatch(getUserNotices());
				break;

			default:
				dispatch(getNoticeByCategory(category));
				break;
		}
		// тут мы получаем фейворит
		if (isLogin) {
			dispatch(getFavoriteNoticeByUser());
		}
	}, [category, dispatch, isLogin]);

	//ну и дальше пишите логику на удаление, добавление и тд по тз, вам осталось играться и сравнивать info, notices и favorite

	return (
		<ul className={styles.wrapper}>
			{notices.map(
				({
					_id: id,
					category,
					name,
					title,
					birthday,
					breed,
					sex,
					location,
					price,
					imageURL,
					comments,
					owner,
					email,
					phone,
				}) => (
					<li key={id}>
						<NoticesItems
							isFavLoading={isFavLoading}
							favNotices={favNotices}
							category={category}
							id={id}
							title={title}
							name={name}
							birthday={birthday}
							breed={breed}
							sex={sex}
							location={location}
							price={price}
							imageURL={imageURL}
							comments={comments}
							owner={owner}
							email={email}
							phone={phone}
						/>
					</li>
				)
			)}
		</ul>
	);
};

export default NoticesList;
