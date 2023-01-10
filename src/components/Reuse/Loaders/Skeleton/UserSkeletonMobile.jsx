import ContentLoader from 'react-content-loader';
import { useMediaQuery } from 'react-responsive';

export const UserSkeletonMobile = props => {
	const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
	const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

	return (
		<>
			{isDesktop ? (
				<ContentLoader
					speed={1.5}
					width={411}
					height={470}
					viewBox="0 0 411 470"
					backgroundColor="#ffffff"
					foregroundColor="#f5935690"
					{...props}
				>
					<circle x="" y="" cx="210" cy="103" r="100" />
					<rect x="15" y="220" rx="10" ry="10" width="380" height="35" />
					<rect x="15" y="265" rx="10" ry="10" width="380" height="35" />
					<rect x="15" y="310" rx="10" ry="10" width="380" height="35" />
					<rect x="15" y="355" rx="10" ry="10" width="380" height="35" />
					<rect x="15" y="400" rx="10" ry="10" width="380" height="35" />
				</ContentLoader>
			) : isTablet ? (
				<ContentLoader
					speed={1.5}
					width={650}
					height={220}
					viewBox="0 0 2500 900"
					backgroundColor="#ffffff"
					foregroundColor="#f5935690"
					{...props}
				>
					<circle x="" y="" cx="2050" cy="410" r="370" />
					<rect x="100" y="50" rx="40" ry="40" width="1300" height="120" />
					<rect x="100" y="200" rx="40" ry="40" width="1300" height="120" />
					<rect x="100" y="350" rx="40" ry="40" width="1300" height="120" />
					<rect x="100" y="500" rx="40" ry="40" width="1300" height="120" />
					<rect x="100" y="650" rx="40" ry="40" width="1300" height="120" />
				</ContentLoader>
			) : (
				<ContentLoader
					speed={1.5}
					width={255}
					height={470}
					viewBox="0 0 476 900"
					backgroundColor="#ffffff"
					foregroundColor="#f5935690"
					{...props}
				>
					<circle x="90" y="" cx="250" cy="160" r="160" />
					<rect x="0" y="400" rx="20" ry="20" width="476" height="60" />
					<rect x="0" y="500" rx="20" ry="20" width="476" height="60" />
					<rect x="0" y="600" rx="20" ry="20" width="476" height="60" />
					<rect x="0" y="700" rx="20" ry="20" width="476" height="60" />
					<rect x="0" y="800" rx="20" ry="20" width="476" height="60" />
				</ContentLoader>
			)}
		</>
	);
};
