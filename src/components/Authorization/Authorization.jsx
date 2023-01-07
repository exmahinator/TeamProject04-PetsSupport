import React from 'react';
import styles from './Authorization.module.scss';

import { Link } from 'react-router-dom';
import { Subtitle } from 'components/Reuse/Title/Subtitle';
import { LoginForm } from './LoginForm/LoginForm';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { getAuthFormContent } from './getAuthFormContent';
import { useMediaQuery } from 'react-responsive'

export const Authorization = ({ type }) => {
  const isPortrait = useMediaQuery({ orientation: 'portrait' })
  const mobileLandscape = useMediaQuery({ maxHeight: 550 })
  const isTablet = useMediaQuery({ maxWidth: 550 })

  const isMobileLandscape = !isPortrait && mobileLandscape && !isTablet

  const content = getAuthFormContent(type)

  return (
    <section className={isMobileLandscape ? styles.landscape: styles.section }>

          <div className={styles.container}>
              <div className={styles.wrapper}>
                  
              <Subtitle text={content.title} />
              {type === 'login' ? <LoginForm /> : <RegisterForm />}
              <span className={styles.linkText}>{ content.navigateMessage}</span>
              <Link className={styles.link} to={content.navigatePath}>{ content.linkText}</Link>
              </div>
      </div>
    </section>
  );
};
