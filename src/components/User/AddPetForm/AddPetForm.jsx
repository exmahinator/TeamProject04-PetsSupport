import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Buttons } from './Buttons/Buttons';
import { AddPetFormFirstPage } from './FirstPage/AddPetFormFirstPage';
import { AddPetFormSecondPage } from './SecondPage/AddPetFormSecondPage';

import style from './AddPetForm.module.scss';
import { useDispatch } from 'react-redux';
import { addUserPet } from 'redux/user/user-operations';

export const AddPetForm = ({ onCloseModal }) => {
	const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm({
		mode: 'onBlur',
		defaultValues: {
			petBirth: '01.01.2020',
			petUpload: '',
		},
	});
	const dispatch = useDispatch();
	const [isfirstPage, setIsFirstPage] = useState(true);

	const onTogglePage = () => {
		if (!isValid && isfirstPage) return;
		setIsFirstPage(prev => !prev);
	};

	const onSubmit = ({ petName, petBirth, petBreed, petUpload, petComment }) => {
		const newPet = new FormData();
		newPet.append('name', petName);
		newPet.append('birthday', petBirth);
		newPet.append('breed', petBreed);
		newPet.append('comments', petComment);
		petUpload && newPet.append('avatar', petUpload[0]);

		dispatch(addUserPet(newPet));

		onCloseModal();
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			autoComplete="off"
			className={style.form}
		>
			{isfirstPage ? (
				<AddPetFormFirstPage errors={errors} register={register} />
			) : (
				<AddPetFormSecondPage  errors={errors}  watch={watch} register={register} />
			)}
			<Buttons
				onTogglePage={onTogglePage}
				onSubmit={onSubmit}
				onCloseModal={onCloseModal}
				isFirstPage={isfirstPage}
			/>
		</form>
	);
};
