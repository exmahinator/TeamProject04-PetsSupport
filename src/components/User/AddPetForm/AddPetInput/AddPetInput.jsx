import { ValidationError } from 'components/Authorization/ValidationError/ValidationError';
import styles from './AddPetInput.module.scss'


export const AddPetInput = ({ register, errors, settings }) => {
    const {
        label, 
		name,
		type,
		placeholder,
		required,
		requiredMessage,
		pattern =null,
        patternMessage = null,
	
	} = settings;

    return (
        <label className={styles.label}>
            <p className={styles.label__text}>{label}</p>
				<input
					type={type}
                {...register(name)}
                
                {...register(name, {
					required: {
						value: required,
						message: requiredMessage,
					},
					pattern: pattern && {
						value: pattern,
						message: patternMessage,
                    }
                    
				})}
					placeholder={placeholder}
					className={styles.input}
            />
            {errors[name] && <ValidationError>{errors[name]?.message}</ValidationError>}
			</label>
    )
}