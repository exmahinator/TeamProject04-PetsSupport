import React from 'react';
import styles from './AuthForm.module.scss';

import { useForm } from 'react-hook-form';
import { Title } from 'components/Reuse/Title/Title';
import { useState } from 'react';

export const AuthForm = ({ isLogin, isRegister }) => {

  const [isNextStep, setIsNextStep] = useState(true)
  const content = isLogin
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
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ name, age }) => {
    let res = {
      name,
      age,
    };
    console.log(res);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Title text={content.title} />

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            defaultValue=""
            {...register('example')}
          />
          {isLogin ? <button type="submit">{content.title}</button> :
          <button>next</button>
          
          }
          <input {...register('name', { required: true })} />
          <input {...register('age', { required: true })} />
          <input
            type="password"
            {...register('exampleRequired', { required: true })}
          />

          {errors.example && <span>This field is required</span>}

          <button type="submit">{content.title}</button>
        </form>
      </div>
    </section>
  );
};
