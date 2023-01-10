import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { FirstStep, SecondStep } from './steps';
import { addNotice } from 'redux/notices/notices-operations';
import { createFormData } from 'shared/functions/createFormData';

import styles from './NoticesAddPetForm.module.scss';

export const AddPetForm = ({ onClose }) => {
	const [uploadError, setUploadError] = useState(false);
	
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

	console.log(errors)
	
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
		}
		if (!data.avatar) {
			setUploadError(true);
			return;
		} else {
			setUploadError(false);
		}
		onClose();
		toast.success(`${petName} added `);
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
						uploadError={uploadError}
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
