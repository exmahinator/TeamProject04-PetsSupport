// import React, { useState } from 'react';
import { Logo } from './Logo/Logo';
import { Nav } from './Nav/Nav';
import { UserNav } from './UserNav/UserNav';
import { AuthNav } from './AuthNav/AuthNav';
import style from './Header.module.scss';

export const Header = () => {
  const isAuth = false;
  return (
    <div className={style.container}>
      <div className={style.mainNav}>
        <Logo />
        <Nav />
      </div>
      {isAuth ? <UserNav /> : <AuthNav />}
    </div>
  );
};
