import { NavLink } from 'react-router-dom';
import { useAuth } from 'shared/hooks/useAuth';
import styles from './NoticesCategories.module.scss';

const NoticesCategories = () => {


	const isLogin = useAuth()

	return (
		<ul className={styles.wrapper}>
			<li>
				<NavLink to="/notices/sell">sell</NavLink>
			</li>
			<li>
				<NavLink to="/notices/lost-found">lost/found</NavLink>
			</li>
			<li>
				<NavLink to="/notices/for-free">in good hands</NavLink>
			</li>
			{isLogin && (
				<>
					<li>
						<NavLink to="/notices/favorite">favorite</NavLink>
					</li>
					<li>
						<NavLink to="/notices/own">my ads</NavLink>
					</li>
				</>
			)}
		</ul>
	);
};

export default NoticesCategories;
