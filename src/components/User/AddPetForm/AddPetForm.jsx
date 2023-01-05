import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Buttons } from './Buttons/Buttons';
import { AddPetFormFirstPage } from './FirstPage/AddPetFormFirstPage';
import { AddPetFormSecondPage } from './SecondPage/AddPetFormSecondPage';

import style from './AddPetForm.module.scss';
import { useDispatch } from 'react-redux';
import { addUserPet } from 'redux/user/user-operations';

export const AddPetForm = () => {
	const { register, handleSubmit } = useForm();
	const dispatch = useDispatch();
	const [isfirstPage, setIsFirstPage] = useState(true);

	const onTogglePage = () => {
		setIsFirstPage(prev => !prev);
	};

	const onCloseModal = () => {
		console.log('nado global state zakritie modalki');
	};

	const onSubmit = ({ petName, petBirth, petBreed, petUpload, petComment }) => {
		const newPet = new FormData();
		newPet.append('name', petName);
		newPet.append('birthday', petBirth);
		console.log('newPet', newPet);
		newPet.append('breed', petBreed);
		newPet.append('comments', petComment);
		newPet.append('avatarURL', petUpload[0]);
		console.log(petName, petBirth, petBreed, petUpload, petComment);
		dispatch(addUserPet(newPet));
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			autoComplete="off"
			className={style.form}
		>
			{isfirstPage ? (
				<AddPetFormFirstPage register={register} />
			) : (
				<AddPetFormSecondPage register={register} />
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
