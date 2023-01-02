import React from 'react';

import s from './Input.module.scss';

export const Input = () => {
  return (
    <div className={s.wrap}>
      <input className={s.input} type="text" placeholder="Search" />
      <button className={s.btn}></button>
    </div>
  );
};
