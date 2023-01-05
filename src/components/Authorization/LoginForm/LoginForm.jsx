import React from 'react';
import styles from '../Authorization.module.scss';

import { useForm } from 'react-hook-form';
import { Input } from '../Input/Input';
import  { emailOpt, passwordOpt} from '../Input/inputOptions';
import { useDispatch } from 'react-redux';
import { login } from "../../../redux/auth/auth-operations";


export const LoginForm = () => {
    const { register, handleSubmit, formState: { errors, isValid }, } = useForm({ mode: 'onBlur', });

	const dispatch = useDispatch();

	const onSubmit = ({ email, password }) => {
		let res = {
			email,
			password,
		};
		console.log(res);
		dispatch(login(res))

	};

	return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Input settings={emailOpt} register={register} errors={errors} />
            <Input settings={passwordOpt} register={register} errors={errors} />
			<button className={styles.btn} disabled={!isValid} type="submit">
				Login
			</button>
		</form>
	);
};
