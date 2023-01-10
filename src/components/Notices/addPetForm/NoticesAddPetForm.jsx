import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { FirstStep, SecondStep } from './steps';
import { addNotice } from 'redux/notices/notices-operations';
import { createFormData } from 'shared/functions/createFormData';

import styles from './NoticesAddPetForm.module.scss';

export const AddPetForm = ({ onClose }) => {
	const dispatch = useDispatch();
	const { handleSubmit, register, watch } = useForm();

	const [step, setStep] = useState(true);

	const onSubmit = data => {
		if (data) {
			const newNotice = createFormData(data);

			dispatch(addNotice(newNotice));
			onClose();
			toast.success('Notice added ');
		}
	};

	const onToggleStep = () => {
		setStep(prev => !prev);
	};

	return (
		<div className={styles.wrapper}>
			<form onSubmit={handleSubmit(onSubmit)}>
				{step ? (
					<FirstStep
						register={register}
						nextPage={onToggleStep}
						onCloseModal={() => onClose()}
					/>
				) : (
					<SecondStep
						register={register}
						downPage={onToggleStep}
						onSubmit={onSubmit}
						watch={watch}
					/>
				)}
			</form>
		</div>
	);
};
