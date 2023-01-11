import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { FirstStep, SecondStep } from './steps';
import { addNotice } from 'redux/notices/notices-operations';
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
			birthday: '01.01.2020',
			avatar: '',
		},
	});
	// console.log('category', watch('category'));
	console.log(errors);

	const dispatch = useDispatch();
	const [isFirstPage, setIsFirstPage] = useState(true);
	const petName = watch('name');

	const onToggleStep = () => {
		if (!isValid && isFirstPage) return;
		setIsFirstPage(prev => !prev);
	};

	const onSubmit = data => {
		if (data) {
			const newNotice = createFormData(data);

			dispatch(addNotice(newNotice));

			toast.success(`${petName} added `);
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
