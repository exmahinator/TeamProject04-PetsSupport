
import { usePasswordBtn } from 'shared/hooks/auth/usePasswordBtn';
import { PasswordBtn } from '../PasswordBtn/PasswordBtn';
import styles from './Input.module.scss';

export const Input = ({ settings, register, errors }) => {
    
    const {name, type, placeholder,required, requiredMessage, pattern, patternMessage }= settings
    const { passwordBtnType, handlePasswordBtn } = usePasswordBtn();
    const inputType = type === 'password' ? passwordBtnType : type

    return (
        <div className={styles.inputWrapper}>
				<input
					id={name}
					className={styles.input}
					type={inputType}
					placeholder={placeholder}
					{...register(name, {
						required: {
							value: required,
							message: requiredMessage,
						},
						pattern: {
							value: pattern,
							message: patternMessage,
						},
					})}
                />
                {type === 'password' && <PasswordBtn type={passwordBtnType} onClickHandler={handlePasswordBtn}/>}
				<label className={styles.label} htmlFor={name}>
					{' '}
					{placeholder}
				</label>
				{errors[name] && (
					<p className={styles.error}>{errors[name]?.message}</p>
				)}
			</div>
    )
}