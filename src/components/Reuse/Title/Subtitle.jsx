import React from 'react';

import style from './Subtitle.module.scss';

export const Subtitle = ({ text }) => {
  return <h3 className={style.title}>{text}</h3>;
};
