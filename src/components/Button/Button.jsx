import React from 'react';

import s from './Button.module.scss';

export const Button = ({ text, color }) => {
  switch (color) {
    case 'orange':
      return <button className={s.orange}>{text}</button>;
    case 'white':
      return <button className={s.white}>{text}</button>;
    case 'transparent':
      return <button className={s.transparent}>{text}</button>;
    case 'disabled':
      return (
        <button disabled={true} className={s.disabled}>
          {text}
        </button>
      );
  }
};

// !=============EXEMPLES==============

// <Button text={'TEST'} color={'white'} />
// <Button text={'TEST2'} color={'orange'} />
// <Button text={'TEST3'} color={'transparent'} />
// <Button text={'TEST4'} color={'disabled'} />
