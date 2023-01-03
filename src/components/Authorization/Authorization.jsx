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
        navigatePath: 'register',
        navigateMessage: "Don't have an account?",
      }
    : {
        title: 'Register',
        navigatePath: 'login',
        navigateMessage: 'Already have an account?',
      };
  // !!

  return (
    <section className={styles.section}>
      <div className={styles.container}>
              <Subtitle text={content.title} />
              {login ? <LoginForm/> : <RegisterForm/>}
              <Link to={content.navigatePath}>{ content.navigateMessage}</Link>
      </div>
    </section>
  );
};
