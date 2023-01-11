import { usePasswordBtn } from 'shared/hooks/auth/usePasswordBtn';
import { PasswordBtn } from '../PasswordBtn/PasswordBtn';
import { ValidationError } from '../ValidationError/ValidationError';
import style from './Input.module.scss';

export const Input = ({ settings, register, errors, inputRef = null }) => {
	const {
		name,
		type,
		placeholder,
		required,
		requiredMessage,
		pattern = null,
		patternMessage = null,
		confirmPassword = false,
	} = settings;

	const { passwordBtnType, handlePasswordBtn } = usePasswordBtn();
	const inputType = type === 'password' ? passwordBtnType : type;

	return (
		<div className={style.inputWrapper}>
            <input               
				id={name}
				className={type=== 'tel' ? style.inputTel: style.input}
				type={inputType}
				placeholder={placeholder}
				ref={inputRef}
				{...register(name, {
					required: {
						value: required,
						message: requiredMessage,
					},
					pattern: pattern && {
						value: pattern,
						message: patternMessage,
					},
					validate:
						confirmPassword &&
						(value => {
							return value === inputRef.current || 'Passwords do not match';
						}),
				})}
            />
            {name === 'phone' &&<span className={style.phoneCode}>+38</span>}
			{type === 'password' && (
				<PasswordBtn
					type={passwordBtnType}
					onClickHandler={handlePasswordBtn}
				/>
			)}
			<label className={style.label} htmlFor={name}>
				{' '}
				{placeholder}
			</label>
			{errors[name] && (
				<ValidationError>{errors[name]?.message}</ValidationError>
			)}
		</div>
	);
};
