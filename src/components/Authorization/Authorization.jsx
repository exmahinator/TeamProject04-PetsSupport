import React from 'react';
import style from './Authorization.module.scss';

import { Link } from 'react-router-dom';
import { Subtitle } from 'components/Reuse/Title/Subtitle';
import { LoginForm } from './LoginForm/LoginForm';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { useMediaQuery } from 'react-responsive'
import { getAuthFormContent } from 'shared/functions/getAuthFormContent';

export const Authorization = ({ type }) => {
  const isPortrait = useMediaQuery({ orientation: 'portrait' })
  const mobileLandscape = useMediaQuery({ maxHeight: 550 })
  const isTablet = useMediaQuery({ maxWidth: 550 })

  const isMobileLandscape = !isPortrait && mobileLandscape && !isTablet

  const content = getAuthFormContent(type)

  return (
    <section className={isMobileLandscape ? style.landscape: style.section }>

      <div className={style.container}>
        <div className={style.outer}>

              <div className={style.wrapper}>
                  
              <Subtitle text={content.title} />
              {type === 'login' ? <LoginForm /> : <RegisterForm />}
              <span className={style.linkText}>{ content.navigateMessage}</span>
              <Link className={style.link} to={content.navigatePath}>{ content.linkText}</Link>
              </div>
        </div>
      </div>
    </section>
  );
};
