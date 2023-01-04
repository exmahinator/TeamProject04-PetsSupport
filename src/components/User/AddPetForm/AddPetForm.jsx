import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Buttons } from './Buttons/Buttons';
import { AddPetFormFirstPage } from './FirstPage/AddPetFormFirstPage';
import { AddPetFormSecondPage } from './SecondPage/AddPetFormSecondPage';

import style from './AddPetForm.module.scss';

export const AddPetForm = () => {
	const { register, handleSubmit } = useForm();

	const [isfirstPage, setIsFirstPage] = useState(true);

	const onTogglePage = () => {
		setIsFirstPage(prev => !prev);
	};

	const onCloseModal = e => {
		console.log('nado global state zakritie modalki');
	};
	const onSubmit = ({ petName, petBirth, petBreed, petUpload, petComment }) => {
		let data = { petName, petBirth, petBreed, petUpload, petComment };
		console.log('mydata', data);
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
