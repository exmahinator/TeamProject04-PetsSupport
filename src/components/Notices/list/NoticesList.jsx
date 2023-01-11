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
	const { page } = useSelector(getQueryParams);

	useEffect(() => {
		switch (category) {
			case 'favorite':
				dispatch(getFavoriteNoticeForCategories());
				break;

			case 'own':
				dispatch(getUserNotices());
				break;

			default:
				dispatch(getNoticeByCategory({ page, category }));
				break;
		}
		if (isLogin) {
			dispatch(getFavoriteNoticeByUser());
		}
	}, [category, dispatch, isLogin, page]);

	const onDeleteNotice = e => {
		const noticeId = e.currentTarget.id;
		dispatch(removeNotice(noticeId));
	};

	return (
		<div className={styles.wrapper}>
			<ul className={styles.galery}>
				{notices.map(data => (
					<li key={data._id}>
						<NoticesItems
							data={data}
							isLogin={isLogin}
							ownerId={ownerId}
							favNotices={favNotices}
							isFavLoading={isFavLoading}
							onDeleteNotice={onDeleteNotice}
						/>
					</li>
				))}
			</ul>
			<div>
			{totalPages && <NoticesPaginationList pages={totalPages} />}
			</div>
		</div>
	);
};
