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

  const onSubmit = ({ email, password, city, phone, name }) => {
    let res = {
      name,
      email,
      password,
      city,
      phone,
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
            placeholder="Email"
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
            placeholder="Password"
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
            onClick={handleNextBtn}
          >
            Next
          </button>
        </>
      )}
      {nextStep && (
        <>
          <input
            className={styles.input}
            type="text"
            placeholder="Name"
            {...register('name', {
              required: {
                value: true,
                message: 'Name is required',
              },
              pattern: {
                value: /^[a-zA-Z]+$/i,
                message: 'Invalid name',
              },
            })}
          />
          <input
            className={styles.input}
            type="text"
            placeholder="City, region"
            {...register('city', {
              required: {
                value: true,
                message: 'City and region are required',
              },
              pattern: {
                value: /^\s*(?:\w+\s*,\s*){1,}(?:\w+\s*)$/i,
                message: 'Brovary, Kyiv',
              },
            })}
          />
          <input
            className={styles.input}
            type="tel"
            placeholder="Phone"
            {...register('phone', {
              required: {
                value: true,
                message: 'Phone is required',
              },
              pattern: {
                value: /^\d{10}$/i,
                message: '0971234567',
              },
            })}
          />
          {errors.name && <span>name</span>}
          {errors.city && <span>city</span>}
          {errors.phone && <span>phone</span>}

          <button className={styles.btn} type="submit">
            Register
          </button>
        </>
      )}
    </form>
  );
};
