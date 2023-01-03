import React from 'react';
import styles from '../Authorization.module.scss';

import { useForm } from 'react-hook-form';

import { useState } from 'react';

export const RegisterForm = () => {
  const [nextStep, setNextStep] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = ({ name, age }) => {
    let res = {
      name,
      age,
    };
    console.log(res);
  };
  const handleNextBtn = () => {
    setNextStep(true);
    console.log(isValid);
  };

  return (
  <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {!nextStep && (
        <>
         <input
              className={styles.input}
            type="email"
          placeholder='Email'
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
          placeholder='Password'
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
          <button
            className={styles.btn}
            disabled={!isValid}
            onClick={handleNextBtn}>
            Next
          </button>
        </>
      )}
      {nextStep && (
        <>
          <input {...register('age', { required: true })} />
          <input
            type="password"
            {...register('exampleRequired', { required: true })}
          />

          {errors.example && <span>This field is required</span>}

          <button type="submit">Register</button>
        </>
      )}
    </form>
  );
};
