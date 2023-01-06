import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addNotice } from 'redux/notices/notices-operations';
import { FirstStep, SecondStep } from './steps';
import styles from './NoticesAddPetForm.module.scss';

export const AddPetForm = () => {
	const { handleSubmit, register } = useForm();
	const [step, setStep] = useState(true);

	const dispatch = useDispatch();

	const onToggleStep = () => {
		setStep(prev => !prev);
	};

	const onCloseModal = e => {
		console.log('close');
	};

	// const newNotices = new FormData();
	// newNotices.append('name', petName);
	// newNotices.append('birthday', petBirth);
	// newNotices.append('breed', petBreed);
	// newNotices.append('comments', petComment);
	// newNotices.append('avatar', petImg[0]);

	// dispatch(addNotice(newNotices));

	const onSubmit = ({
		petCategories,
		petName,
		petTitle,
		petBirth,
		petBreed,
		petMale,
		petFeMale,
		petLocation,
		petPrice,
		petImg,
		comments,
	}) => {
		let data = {
			petCategories,
			petTitle,
			petName,
			petBirth,
			petBreed,
			petMale,
			petFeMale,
			petLocation,
			petPrice,
			petImg,
			comments,
		};
		console.log('data', data);
	};


	
	return (
		<div className={styles.wrapper}>
			<form onSubmit={handleSubmit(onSubmit)}>
			{step ? (
				<FirstStep
					register={register}
					nextPage={onToggleStep}
					onCloseModal={onCloseModal}
				/>
			) : (
				<SecondStep
					register={register}
					downPage={onToggleStep}
					onSubmit={onSubmit}
				/>
			)}
		</form>
		</div>
	);
};
