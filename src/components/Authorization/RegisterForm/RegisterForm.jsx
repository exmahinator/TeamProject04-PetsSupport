import React, { useRef } from 'react';
import styles from '../Authorization.module.scss';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Input } from '../Input/Input';
import { inputOptions } from '../Input/inputOptions';

export const RegisterForm = () => {
	const [nextStep, setNextStep] = useState(false);
	const {register, handleSubmit, watch, formState: { errors, isValid },} = useForm({ mode: 'onBlur',});
  const { emailOpt, passwordOpt, confirmPasswordOpt, nameOpt, cityOpt, phoneOpt} = inputOptions;

	const password = useRef({});
  password.current = watch('password', '');

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
  
  const toggleBackBtn = () => {
    setNextStep(prevState => !prevState)
  }

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			{!nextStep && (
        <>
          <Input settings={emailOpt} register={register} errors={errors} />
          <Input settings={passwordOpt} register={register} errors={errors} inputRef={password} />
					<Input settings={confirmPasswordOpt} register={register} errors={errors} inputRef={password} />
      
					<button	className={styles.btn}
						disabled={!isValid}
						onClick={toggleBackBtn}>
						Next
					</button>
				</>
			)}
			{nextStep && (
        <>
          <Input settings={nameOpt} register={register} errors={errors} />
          <Input settings={cityOpt} register={register} errors={errors} />
          <Input settings={phoneOpt} register={register} errors={errors} />

					<button className={styles.btn} type="submit">
						Register
					</button>
					<button
						onClick={toggleBackBtn}
						className={styles.lightBtn}
						type="button">
						Back
					</button>
				</>
			)}
		</form>
	);
};
