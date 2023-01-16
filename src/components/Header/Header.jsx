import { useMediaQuery } from 'react-responsive';

import { Container } from 'components/Reuse/Container/Container';
import { HeaderPhone } from './HeaderPhone';
import { HeaderTablet } from './HeaderTablet';
import { HeaderDesktop } from './HeaderDesktop';

export const Header = () => {
	const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
	const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
	return (
		<Container>
			{isDesktop ? (
				<HeaderDesktop />
			) : isTablet ? (
				<HeaderTablet />
			) : (
				<HeaderPhone />
			)}
		</Container>
	);
};
