import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNotice } from 'redux/notices/notices-operations';
import { useForm } from 'react-hook-form';
import { FirstStep, SecondStep } from './steps';
import { createFormData } from 'shared/functions/createFormData';

import styles from './NoticesAddPetForm.module.scss';

export const AddPetForm = ({ onClose }) => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isValid },
	} = useForm({
		mode: 'onBlur',
		defaultValues: {
			category: 'sell',
			birthday: '01.01.2020',
			avatar: '',
		},
	});

	const [isFirstPage, setIsFirstPage] = useState(true);

	const dispatch = useDispatch();

	const onToggleStep = () => {
		if (!isValid && isFirstPage) return;
		setIsFirstPage(prev => !prev);
	};

	const onSubmit = data => {
		if (data) {
			const newNotice = createFormData(data);

			dispatch(addNotice(newNotice));
			onClose();
		}
	};

	return (
		<div className={styles.wrapper}>
			<form onSubmit={handleSubmit(onSubmit)}>
				{isFirstPage ? (
					<FirstStep
						errors={errors}
						register={register}
						nextPage={onToggleStep}
						onCloseModal={() => onClose()}
					/>
				) : (
					<SecondStep
						errors={errors}
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
