import React from 'react';
import styles from '../Authorization.module.scss';

import { useForm } from 'react-hook-form';
import { Input } from '../Input/Input';


const set = {
    name: 'email',
    type: 'email',
    placeholder: "Email",
    required: true,
    requiredMessage: 'Email is required',
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    patternMessage: 'Invalid email address',
}

const passwordSet = {
        name: 'password',
    type: 'password',
    placeholder: "Password",
    required: true,
    requiredMessage: 'Password is required',
    pattern: /^\S{7,32}$/i,
    patternMessage: 'Min 7 max 32 symbols'
}



export const LoginForm = () => {
  
	const {register,handleSubmit,formState: { errors, isValid },} = useForm({mode: 'onBlur',});

	const onSubmit = ({ email, password }) => {
		let res = {
			email,
			password,
		};
		console.log(res);
	};

	return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Input settings={set} register={register} errors={errors} />
            <Input settings={passwordSet} register={register} errors={errors} />
			<button className={styles.btn} disabled={!isValid} type="submit">
				Login
			</button>
		</form>
	);
};
