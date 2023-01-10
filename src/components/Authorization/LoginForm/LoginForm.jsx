import React from 'react';
import styles from '../Authorization.module.scss';

import { useForm } from 'react-hook-form';
import { Input } from '../Input/Input';
import { emailOpt, passwordOpt } from '../Input/inputOptions';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/auth/auth-operations';
import { useFormSession } from 'shared/hooks/auth/useFormSession';
import { toast } from 'react-toastify';

const SESSION_STORAGE_NAME = 'loginFrom';

export const LoginForm = () => {
	const dispatch = useDispatch();
	const { getSessionData, setSessionData } =
		useFormSession(SESSION_STORAGE_NAME);
	const defaultValuesFromSessionStorage = getSessionData();

	const {
		watch,
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		mode: 'onBlur',
		defaultValues: defaultValuesFromSessionStorage,
	});

	watch(({ email }) => {
		setSessionData({ email });
	});

	const onSubmit = ({ email, password }) => {
		let res = {
			email,
			password,
		};

		dispatch(login(res))
			.unwrap()
			.then(() => toast('Welcome!'))
			.catch(() => toast('Invalid password or email'));
		setSessionData({});
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
