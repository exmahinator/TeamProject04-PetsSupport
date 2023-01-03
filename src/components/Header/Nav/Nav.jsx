import React from 'react';
import { Link } from 'react-router-dom';
import style from './Nav.module.scss';

export const Nav = () => {
  return (
    <ul className={style.menu}>
      <li className={style.item}>
        <Link className={style.link}>News</Link>
      </li>
      <li className={style.item}>
        <Link className={style.link}>Find pet</Link>
      </li>
      <li className={style.item}>
        <Link className={style.link}>Our friend</Link>
      </li>
    </ul>
  );
};
