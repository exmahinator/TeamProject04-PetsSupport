import React from 'react';
import styles from './Authorization.module.scss';

import { Link } from 'react-router-dom';
import { Subtitle } from 'components/Reuse/Title/Subtitle';
import { LoginForm } from './LoginForm/LoginForm';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { getAuthFormContent } from './getAuthFormContent';

export const Authorization = ({ type}) => {

  const content = getAuthFormContent(type)

  return (
    <section className={styles.section}>
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
