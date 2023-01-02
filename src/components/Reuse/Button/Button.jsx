import React from 'react';

import s from './Button.module.scss';

export const Button = ({
  text,
  type,
  onClickFunc = () => {
    console.log('Your func!');
  },
}) => {
  switch (type) {
    case 'orange':
      return (
        <button onClick={() => onClickFunc()} className={s.orange}>
          {text}
        </button>
      );
    case 'white':
      return (
        <button onClick={() => onClickFunc()} className={s.white}>
          {text}
        </button>
      );
    case 'transparent':
      return (
        <button onClick={() => onClickFunc()} className={s.transparent}>
          {text}
        </button>
      );
    case 'disabled':
      return (
        <button disabled={true} className={s.disabled}>
          {text}
        </button>
      );
  }
};

// !=============EXEMPLES==============

//  <Button text={'TEST'} type={'white'} onClickFunc={yourFunction} />
//  <Button text={'TEST1'} type={'orange'} onClickFunc={yourFunction} />
//  <Button text={'TEST2'} type={'transparent'} onClickFunc={yourFunction} />
//  <Button text={'TEST3'} type={'disabled'} onClickFunc={yourFunction} />
