import { useEffect } from 'react';
import { useAuth } from 'shared/hooks/useAuth';
import { useOutletContext } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	getCurrentNotices,
	getFavoriteNotices,
	getNoticesLoading,
	getFilteredNotices,
} from 'redux/notices/notices-selectors';
import { getUserId } from 'redux/auth/auth-selectors';
import {
	getFavoriteNoticeByUser,
	getFavoriteNoticeForCategories,
	getNoticeByCategory,
	getUserNotices,
	removeNotice,
} from 'redux/notices/notices-operations';

import NoticesItems from '../items/NoticesItems';
import styles from './NoticesList.module.scss';

export const NoticesList = ({ category }) => {
	const isLogin = useAuth();
	const dispatch = useDispatch();

	// тут мы получаем то, что передали пропсом Outlet в компоненте NoticesPage, то, что ввели в наш поисковой инпут
	const info = useOutletContext();
	console.log(info);

	const ownerId = useSelector(getUserId);

	// здесь будут лежать наши каррент нотисы, с которыми надо работать
	const notices = useSelector(getFilteredNotices || getCurrentNotices);

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

	const onDeleteNotice = e => {
		const noticeId = e.currentTarget.id;

		dispatch(removeNotice(noticeId));
	};
	//ну и дальше пишите логику на удаление, добавление и тд по тз, вам осталось играться и сравнивать info, notices и favorite

	return (
		<div className={styles.wrapper}>
			<ul className={styles.galery}>
				{notices.map(
					({
						sex,
						name,
						price,
						breed,
						title,
						owner,
						email,
						phone,
						_id: id,
						category,
						birthday,
						location,
						imageURL,
						comments,
					}) => (
						<li key={id}>
							<NoticesItems
								id={id}
								sex={sex}
								name={name}
								owner={owner}
								email={email}
								phone={phone}
								price={price}
								breed={breed}
								title={title}
								ownerId={ownerId}
								category={category}
								birthday={birthday}
								location={location}
								imageURL={imageURL}
								comments={comments}
								favNotices={favNotices}
								isFavLoading={isFavLoading}
								onDeleteNotice={onDeleteNotice}
							/>
						</li>
					)
				)}
			</ul>
		</div>
	);
};
