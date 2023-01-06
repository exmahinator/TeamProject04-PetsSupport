// import { PrivateRoute } from 'components/Routes/PrivateRoute/PrivateRoute';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { current } from 'redux/auth/auth-operations';
import { getToken } from 'redux/auth/auth-selectors';
import { SharedLayout } from './components/SharedLayout/SharedLayout';

import './shared/styles/style.scss';

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

	useEffect(() => {
		if (token) {
			dispatch(current());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Suspense fallback={<p>....Load page</p>}>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route index element={<HomePage />} />
					<Route path="news" element={<NewsPage />} />
					<Route path="notices" element={<NoticesPage />} />
					<Route path="friends" element={<OurFriendsPage />} />
					<Route path="register" element={<RegisterPage />} />
					<Route path="login" element={<LoginPage />} />
					<Route path="user" element={<UserPage />} />

					{/* <Route element={<PrivateRoute />}>
						<Route path="user" element={<UserPage />} />
					</Route> */}

					<Route path="*" element={<Navigate to="/" />} />
				</Route>
			</Routes>
		</Suspense>
	);
}

export default App;
