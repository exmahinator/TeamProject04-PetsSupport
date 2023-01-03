import React from 'react';
import styles from './Authorization.module.scss';

import { Link } from 'react-router-dom';
import { Subtitle } from 'components/Reuse/Title/Subtitle';
import { LoginForm } from './LoginForm/LoginForm';
import { RegisterForm } from './RegisterForm/RegisterForm';

export const Authorization = ({ login, registration }) => {

  // !to make a hook
  const content = login
    ? {
        title: 'Login',
        navigatePath: '/register',
        navigateMessage: "Don't have an account?",
        linkText: 'Register',
      }
    : {
        title: 'Register',
        navigatePath: '/login',
          navigateMessage: 'Already have an account?',
         linkText: 'Login',
      };
  // !!

  return (
    <section className={styles.section}>
          <div className={styles.container}>
              <div className={styles.wrapper}>
                  
              <Subtitle text={content.title} />
              {login ? <LoginForm /> : <RegisterForm />}
              <span className={styles.linkText}>{ content.navigateMessage}</span>
              <Link className={styles.link} to={content.navigatePath}>{ content.linkText}</Link>
              </div>
      </div>
    </section>
  );
};
