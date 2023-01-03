import React from 'react';

import style from './Button.module.scss';

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
        <button onClick={() => onClickFunc()} className={style.orange}>
          {text}
        </button>
      );
    case 'white':
      return (
        <button onClick={() => onClickFunc()} className={style.white}>
          {text}
        </button>
      );
    case 'transparent':
      return (
        <button onClick={() => onClickFunc()} className={style.transparent}>
          {text}
        </button>
      );
    case 'disabled':
      return (
        <button disabled={true} className={style.disabled}>
          {text}
        </button>
      );
    default:
      return;
  }
};

// !=============EXEMPLES==============

//  <Button text={'TEST'} type={'white'} onClickFunc={yourFunction} />
//  <Button text={'TEST1'} type={'orange'} onClickFunc={yourFunction} />
//  <Button text={'TEST2'} type={'transparent'} onClickFunc={yourFunction} />
//  <Button text={'TEST3'} type={'disabled'} onClickFunc={yourFunction} />
