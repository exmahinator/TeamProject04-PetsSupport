import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addUserPet } from 'redux/user/user-operations';
import { Buttons } from './Buttons/Buttons';
import { AddPetFormFirstPage } from './FirstPage/AddPetFormFirstPage';
import { AddPetFormSecondPage } from './SecondPage/AddPetFormSecondPage';
import { createFormData } from 'shared/functions/createFormData';

import style from './AddPetForm.module.scss';

export const AddPetForm = ({ onCloseModal }) => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isValid },
	} = useForm({
		mode: 'onBlur',
		defaultValues: {
			birthday: '01.01.2023',
			avatar: '',
		},
	});
	const dispatch = useDispatch();
	const [isfirstPage, setIsFirstPage] = useState(true);

	const onTogglePage = () => {
		if (!isValid && isfirstPage) return;
		setIsFirstPage(prev => !prev);
	};

	const onSubmit = data => {
		if (data) {
			const newPet = createFormData(data);
			dispatch(addUserPet(newPet));
		}
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
				<AddPetFormSecondPage
					errors={errors}
					watch={watch}
					register={register}
				/>
			)}
			<Buttons
				onSubmit={onSubmit}
				isFirstPage={isfirstPage}
				onTogglePage={onTogglePage}
				onCloseModal={onCloseModal}
			/>
		</form>
	);
};
