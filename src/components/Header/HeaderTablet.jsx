import React, { useState } from 'react';
import { Logo } from './Logo/Logo';
import { Nav } from './Nav/Nav';
import { UserNav } from './UserNav/UserNav';
import { AuthNav } from './AuthNav/AuthNav';
import style from './Header.module.scss';
import { ReactComponent as Strips } from 'shared/images/Burger/Strips.svg';
import { ReactComponent as Cross } from 'shared/images/Burger/Cross.svg';
import { useAuth } from 'shared/hooks/useAuth';

export const HeaderTablet = () => {
	const isAuth = useAuth();
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => {
		setIsOpen(isOpen => !isOpen);
	};
	return (
		<div className={style.wrapper}>
			<div className={style.btns}>
				<div className={style.logoLink}>
					<Logo />
				</div>
				<div className={style.logoBtn}>
					{!isOpen && (isAuth ? <UserNav /> : <AuthNav />)}
					{isOpen ? (
						<>
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
						</>
					) : (
						<>
							
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
						</>
					)}
				</div>
			</div>
			{isOpen && (
				<div className={style.open}>
					<Nav />
				</div>
			)}
		</div>
	);
};
