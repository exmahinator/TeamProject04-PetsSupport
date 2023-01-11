import style from '../Authorization.module.scss';

import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
 import { toast } from 'react-toastify';

import { Input } from '../Input/Input';
import {
	emailOpt,
	passwordOpt,
	confirmPasswordOpt,
	nameOpt,
	cityOpt,
	phoneOpt,
} from '../Input/inputOptions';
import { register as reg } from '../../../redux/auth/auth-operations';
import { useFormSession } from 'shared/hooks/auth/useFormSession';


const SESSION_STORAGE_NAME = 'registerFrom'

export const RegisterForm = () => {
	const [nextStep, setNextStep] = useState(false);
	const { getSessionData, setSessionData } = useFormSession(SESSION_STORAGE_NAME);
	const defaultValuesFromSessionStorage = getSessionData();

	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isValid },
	} = useForm({mode: 'onBlur',defaultValues: defaultValuesFromSessionStorage,});

	const password = useRef({});
	password.current = watch('password', '');

  watch(({email, city, name, phone})=> {
		setSessionData({ email, city, name, phone });
	});

	const onSubmit = ({ email, password, city, phone, name }) => {
		phone = '+38' + phone;
		let res = {
			name,
			email,
			password,
			city,
			phone,
		};
		console.log(res);
		dispatch(reg(res)).unwrap()
			.then((res) => {
			const {name}= res.user
			return toast.success(`Welcome, ${name} !`) })
			.catch((e) => {
			const errorMessage = e.status === 409 ? 'This email is already in use' : 'Oops, something went wrong... Try again, please'
			return toast.error(errorMessage)
		});
		setSessionData({});
	};

	const toggleBackBtn = () => {
		if(!nextStep && !isValid)return
		setNextStep(prevState => !prevState);
	};

	return (
		<form className={style.form} onSubmit={handleSubmit(onSubmit)}>
			{!nextStep && (
				<>
					<Input settings={emailOpt} register={register} errors={errors} />
					<Input
						settings={passwordOpt}
						register={register}
						errors={errors}
						inputRef={password}
					/>
					<Input
						settings={confirmPasswordOpt}
						register={register}
						errors={errors}
						inputRef={password}
					/>

					<button
						className={style.btn}
						onClick={toggleBackBtn}
					>
						Next
					</button>
				</>
			)}
			{nextStep && (
				<>
					<Input settings={nameOpt} register={register} errors={errors} />
					<Input settings={cityOpt} register={register} errors={errors} />
					<Input settings={phoneOpt} register={register} errors={errors} />

					<button className={style.btn} type="submit">
						Register
					</button>
					<button
						onClick={toggleBackBtn}
						className={style.lightBtn}
						type="button"
					>
						Back
					</button>
				</>
			)}
		</form>
	);
};
