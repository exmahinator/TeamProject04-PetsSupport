import React, { useState } from 'react';
import { Logo } from './Logo/Logo';
import { Nav } from './Nav/Nav';
import { UserNav } from './UserNav/UserNav';
import { AuthNav } from './AuthNav/AuthNav';
import style from './Header.module.scss';
import { Container } from 'components/Reuse/Container/Container';
import { ReactComponent as Strips } from 'shared/images/Burger/Strips.svg';
import { ReactComponent as Cross } from 'shared/images/Burger/Cross.svg';

export const Header = () => {
	const isAuth = false;
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => {
		setIsOpen(isOpen => !isOpen);
	};
	return (
		<Container>
			<div className={style.wrapper}>
				<Logo />
				{isOpen ? (
					<div className={style.open}>
						<div className={style}>
							<Nav />
							{isAuth ? <UserNav /> : <AuthNav />}
						</div>
						<button
							type="button"
							className={style.btnBurger}
							onClick={toggleMenu}
						>
							<Cross
								width="20px"
								heigth="20px"
								aria-label="Меню"
								className={style.cross}
							></Cross>
						</button>
					</div>
				) : (
					<button
						type="button"
						className={style.btnBurger}
						onClick={toggleMenu}
					>
						<Strips
							width="30px"
							heigth="20px"
							aria-label="Меню"
							className={style.strips}
						></Strips>
					</button>
				)}
			</div>
		</Container>
	);
};
