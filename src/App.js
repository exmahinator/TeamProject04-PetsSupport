import { lazy, Suspense, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ToastContainer, Slide } from 'react-toastify';

import { getIsFirstQuery, getToken } from 'redux/auth/auth-selectors';
import { current } from 'redux/auth/auth-operations';

import { NoticesList } from 'components/Notices/list/NoticesList';
import { PrivateRoute } from 'components/Routes/PrivateRoute/PrivateRoute';
import { PublicRouter } from 'components/Routes/PublicRouter/PublicRouter';
import { SharedLayout } from './components/SharedLayout/SharedLayout';

import './shared/styles/style.scss';
import 'react-toastify/dist/ReactToastify.css';

const NewsPage = lazy(() => import('./pages/NewsPage/NewsPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const NoticesPage = lazy(() => import('./pages/NoticesPage/NoticesPage'));
const OurFriendsPage = lazy(() =>
	import('./pages/OurFriendsPage/OurFriendsPage')
);
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const UserPage = lazy(() => import('./pages/UserPage/UserPage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

function App() {
	const dispatch = useDispatch();
	const token = useSelector(getToken);
	const isFirstQuery = useSelector(getIsFirstQuery);

	useEffect(() => {
		if (token) {
			dispatch(current());
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (token && isFirstQuery) {
		return;
	}

	return (
		// удалить потом
		<>
			<Suspense>
				<Routes>
					<Route path="/" element={<SharedLayout />}>
						<Route index element={<HomePage />} />
						<Route
							path="news"
							element={
								<PublicRouter>
									<NewsPage />
								</PublicRouter>
							}
						/>

						<Route
							path="friends"
							element={
								<PublicRouter>
									<OurFriendsPage />
								</PublicRouter>
							}
						/>
						<Route
							path="register"
							element={
								<PublicRouter restricted redirect="/user">
									<RegisterPage />
								</PublicRouter>
							}
						/>
						<Route
							path="login"
							element={
								<PublicRouter restricted redirect="/user">
									<LoginPage />
								</PublicRouter>
							}
						/>
						<Route
							path="user"
							element={
								<PrivateRoute redirect="/login">
									<UserPage />
								</PrivateRoute>
							}
						/>

						<Route
							path="notices"
							element={
								<PublicRouter>
									<NoticesPage />
								</PublicRouter>
							}
						>
							<Route path="sell" element={<NoticesList category="sell" />} />
							<Route
								path="lost-found"
								element={<NoticesList category="lost" />}
							/>
							<Route
								path="for-free"
								element={<NoticesList category="goodhands" />}
							/>
							<Route
								path="favorite"
								element={<NoticesList category="favorite" />}
							/>
							<Route path="own" element={<NoticesList category="own" />} />
						</Route>

						<Route path="*" element={<Navigate to="/" />} />
					</Route>
				</Routes>
			</Suspense>

			<ToastContainer
				position="bottom-right"
				transition={Slide}
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
		</>
	);
}

export default App;
