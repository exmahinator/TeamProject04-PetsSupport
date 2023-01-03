import React from 'react';
import styles from '../Authorization.module.scss';

import { useForm } from 'react-hook-form';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = ({ email, password }) => {
    let res = {
      email,
      password,
    };
    console.log(res);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <input
              className={styles.input}
        type="email"
        {...register('email', {
          required: {
            value: true,
            message: 'Email is required',
          },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address',
          },
        })}
      />
          <input
              className={styles.input}
        type="password"
        {...register('password', {
          required: {
            value: true,
            message: 'Password is required',
          },
          pattern: {
            value: /^\S{7,32}$/i,
            message: 'Invalid password',
          },
        })}
      />

      {errors.password && <span>{errors.password?.message}</span>}

      <button className={styles.btn} disabled={!isValid} type="submit">
        Login
      </button>
    </form>
  );
};
