import React from 'react';
import style from './PasswordBtn.module.scss';
import { ReactComponent as OpenedEyeIcon } from 'shared/images/auth/openedEye.svg';
import { ReactComponent as ClosedEyeIcon } from 'shared/images/auth/closedEye.svg';

export const PasswordBtn = ({ onClickHandler, type }) =>  <button className={style.btn} onClick={onClickHandler} type='button'> {type === 'password' ? <OpenedEyeIcon/> : <ClosedEyeIcon/> }</button>
