import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FirstStep, SecondStep } from './steps';
import { useDispatch } from 'react-redux';
import { addNotice } from 'redux/notices/notices-operations';
import styles from './NoticesAddPetForm.module.scss';

export const AddPetForm = ({onClose}) => {
	const dispatch = useDispatch();

	const { handleSubmit, register, watch } = useForm();
	const [step, setStep] = useState(true);
	const [category, setCategory] = useState('')
	const [sex, setSex] = useState('')


	const handlCategory = (e) => {
		const choosenCategory =  e.currentTarget.value;
		setCategory(choosenCategory)
	}
	console.log('category', category)

	const handlSex = (e) => {
		const choosenSex =  e.currentTarget.value;
		setSex(choosenSex)
	}

	const onToggleStep = () => {
		setStep(prev => !prev);
	};


	const onSubmit = ({
		petName,
		petTitle,
		petBirth,
		petBreed,
		petLocation,
		petPrice,
		petImg,
		petComments,
	}) => {
		const newNotice = new FormData();
		newNotice.append('name', petName);
		newNotice.append('birthday', petBirth);
		newNotice.append('breed', petBreed);
		newNotice.append('comments', petComments);
		newNotice.append('category', category);
		newNotice.append('title', petTitle);
		newNotice.append('location', petLocation);
		newNotice.append('price', petPrice);
		newNotice.append('sex', sex);
		petImg && newNotice.append('avatar', petImg[0]);
		dispatch(addNotice(newNotice));
	};
	
	return (
		<div className={styles.wrapper}>
			<form onSubmit={handleSubmit(onSubmit)}>
			{step ? (
				<FirstStep
					register={register}
					nextPage={onToggleStep}
					onCloseModal={() => onClose()}
					handlCategory={(e) => handlCategory(e)}
				/>
			) : (
				<SecondStep
					register={register}
					downPage={onToggleStep}
					onSubmit={onSubmit}
					watch={watch}
					handlSex={(e) => handlSex(e)}
				/>
			)}
		</form>
		</div>
	);
};
