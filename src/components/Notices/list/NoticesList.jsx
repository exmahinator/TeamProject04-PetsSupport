import { useEffect } from 'react';
import { useAuth } from 'shared/hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import {
	getCurrentNotices,
	getFavoriteNotices,
	getNoticesLoading,
	getFilteredNotices,
	getTotalPages,
	getQueryParams,
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
import { NoticesPaginationList } from '../pagination/paginationList/PaginationList';

export const NoticesList = ({ category }) => {
	const isLogin = useAuth();
	const dispatch = useDispatch();

	const ownerId = useSelector(getUserId);
	const notices = useSelector(getFilteredNotices || getCurrentNotices);

	const favNotices = useSelector(getFavoriteNotices);
	const isFavLoading = useSelector(getNoticesLoading);


	const totalPages = useSelector(getTotalPages);
	const queryParams = useSelector(getQueryParams);


	useEffect(() => {
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
		if (isLogin) {
			dispatch(getFavoriteNoticeByUser());
		}

		
	}, [category, dispatch, isLogin]);

	const onDeleteNotice = e => {
		const noticeId = e.currentTarget.id;
		dispatch(removeNotice(noticeId));
	};

	useEffect(() => {
		dispatch(getNoticeByCategory(queryParams));
	}, [dispatch, queryParams]);

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
								isLogin={isLogin}
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
			{totalPages > 1 && <NoticesPaginationList pages={totalPages} />}
		</div>
	);
};
