import React, { useEffect, useState } from 'react';
import { Logo } from './Logo/Logo';
import { Nav } from './Nav/Nav';
import { UserNav } from './UserNav/UserNav';
import { AuthNav } from './AuthNav/AuthNav';
import style from './Header.module.scss';
import { ReactComponent as Strips } from 'shared/images/Burger/Strips.svg';
import { ReactComponent as Cross } from 'shared/images/Burger/Cross.svg';
import { useAuth } from 'shared/hooks/useAuth';

	import { toggleBodyHidden } from 'shared/functions/toggleBodyHidden';

export const HeaderPhone = () => {
	const isAuth = useAuth();
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(isOpen => !isOpen);
	};

	useEffect(() => {
	  toggleBodyHidden(isOpen)	
	}, [isOpen])


	return (
		<div className={style.wrapper}>
			<div className={style.btns}>
				<Logo setIsOpen={setIsOpen}/>
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
			{isOpen && (
				<div className={style.open}>
					<Nav setIsOpen={setIsOpen}/>
					{isAuth ? <UserNav setIsOpen={setIsOpen}/> : <AuthNav setIsOpen={setIsOpen}/>}
				</div>
			)}
		</div>
	);
};
