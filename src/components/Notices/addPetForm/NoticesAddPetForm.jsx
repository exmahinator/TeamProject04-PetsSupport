import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FirstStep, SecondStep } from './steps';
import styles from './NoticesAddPetForm.module.scss';

export const AddPetForm = () => {
	const { handleSubmit, register } = useForm();
	const [step, setStep] = useState(true);


	const onToggleStep = () => {
		setStep(prev => !prev);
	};

	const onCloseModal = e => {
		console.log('close');
	};


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
