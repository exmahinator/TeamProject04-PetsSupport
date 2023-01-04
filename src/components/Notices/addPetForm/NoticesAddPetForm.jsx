import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FirstStep, SecondStep } from './steps';

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
	}) => {
		let data = {
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
		console.log('mydata', data);
	};

	return (
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
	);
};
