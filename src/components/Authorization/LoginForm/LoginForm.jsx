import React, { useState } from 'react';
import styles from '../Authorization.module.scss';

import { useForm } from 'react-hook-form';
import { PasswordBtn } from '../PasswordBtn/PasswordBtn';

export const LoginForm = () => {
    const [passwordBtnType, setPasswordBtnType] = useState('password')

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		mode: 'onBlur',
	});

    const handlePasswordBtn = () => {
        setPasswordBtnType(prevState=>  prevState === 'password'? 'text': 'password')
    }


	const onSubmit = ({ email, password }) => {
		let res = {
			email,
			password,
		};
		console.log(res);
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.inputWrapper}>
				<input
					id="email"
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
				<label className={styles.label} htmlFor="email">
					{' '}
					Email
				</label>
				{errors.email && (
					<p className={styles.error}>{errors.email?.message}</p>
				)}
			</div>
			<div className={styles.inputWrapper}>
				<input
					id="password"
					className={styles.input}
					type={passwordBtnType}
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
                <PasswordBtn type={passwordBtnType} onClickHandler={handlePasswordBtn}/>
				<label className={styles.label} htmlFor="password">
					{' '}
					Password
				</label>
				{errors.password && (
					<p className={styles.error}>{errors.password?.message}</p>
				)}
			</div>
			<button className={styles.btn} disabled={!isValid} type="submit">
				Login
			</button>
		</form>
	);
};
