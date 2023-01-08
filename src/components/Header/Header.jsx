// import React, { useState } from 'react';
// import { Logo } from './Logo/Logo';
// import { Nav } from './Nav/Nav';
// import { UserNav } from './UserNav/UserNav';
// import { AuthNav } from './AuthNav/AuthNav';
// import style from './Header.module.scss';
import { Container } from 'components/Reuse/Container/Container';
// import { ReactComponent as Strips } from 'shared/images/Burger/Strips.svg';
// import { ReactComponent as Cross } from 'shared/images/Burger/Cross.svg';
import { useMediaQuery } from 'react-responsive';
import { HeaderPhone } from './HeaderPhone';
import { HeaderTablet } from './HeaderTablet';
import { HeaderDesktop } from './HeaderDesktop';

export const Header = () => {
	const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
	const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
	return (
		<section>
			<Container>
				{isDesktop ? (
					<HeaderDesktop />
				) : isTablet ? (
					<HeaderTablet />
				) : (
					<HeaderPhone />
				)}
			</Container>
		</section>
	);
};
