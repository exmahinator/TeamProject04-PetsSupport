import React from 'react';
import styles from '../Authorization.module.scss';

import { useForm } from 'react-hook-form';

import { useState } from 'react';
import { Subtitle } from 'components/Reuse/Title/Subtitle';

export const RegisterForm = ({ login, registration }) => {

  const [nextStep, setNextStep] = useState(false)

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
    setNextStep(true)
    console.log(isValid)
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Subtitle text={content.title} />

        <form onSubmit={handleSubmit(onSubmit)}>
          {!nextStep &&
            <>
            <input
            defaultValue=""
            {...register('example')}
            />
              <input {...register('name', { required: true })} />
          {login ? <button type="submit">{content.title}</button> :
              <button
                disabled={!isValid}
                onClick={handleNextBtn}>next</button>
          
            }
            </>
          }
          {nextStep &&<>
       
          <input {...register('age', { required: true })} />
          <input
            type="password"
            {...register('exampleRequired', { required: true })}
          />

          {errors.example && <span>This field is required</span>}

          <button type="submit">{content.title}</button>
         </> }
        </form>
      </div>
    </section>
  );
};
