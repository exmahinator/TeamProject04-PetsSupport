import React from 'react';
import style from '../Authorization.module.scss';

import { useForm } from 'react-hook-form';
import { Input } from '../Input/Input';
import { emailOpt, passwordOpt } from '../Input/inputOptions';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/auth/auth-operations';
import { toast } from 'react-toastify';


export const LoginForm = () => {
	const dispatch = useDispatch();


	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		mode: 'onBlur',
		defaultValues:{email: '', password: ''},
	});

	const onSubmit = ({ email, password }) => {
		if (!isValid) return;
		let res = {
			email,
			password,
		};

		dispatch(login(res))
			.unwrap()
			.then((res) => {
				const {name}= res.user
			return toast.success(`Welcome, ${name} !`) })
			.catch(() => toast.error('Invalid password or email'));
	};

	return (
		<form className={style.form} onSubmit={handleSubmit(onSubmit)}>
			<Input settings={emailOpt} register={register} errors={errors} />
			<Input settings={passwordOpt} register={register} errors={errors} />
			<button className={style.btn}  type="submit">
				Login
			</button>
		</form>
	);
};
