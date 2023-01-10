import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Buttons } from './Buttons/Buttons';
import { addUserPet } from 'redux/user/user-operations';
import { createFormData } from 'shared/functions/createFormData';
import { AddPetFormFirstPage } from './FirstPage/AddPetFormFirstPage';
import { AddPetFormSecondPage } from './SecondPage/AddPetFormSecondPage';

import style from './AddPetForm.module.scss';
// import { getAddPetError, getPetsLoading } from 'redux/user/user-selectors';

export const AddPetForm = ({ onCloseModal }) => {
	const [uploadError, setUploadError] = useState(false);
	// const isAddPetError = useSelector(getAddPetError);
	// const isPetsLoading = useSelector(getPetsLoading);
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
	const dispatch = useDispatch();
	const [isfirstPage, setIsFirstPage] = useState(true);
	const petName = watch('name');

	const onTogglePage = () => {
		if (!isValid && isfirstPage) return;
		setIsFirstPage(prev => !prev);
	};

	const onSubmit = data => {
		if (data) {
			const newPet = createFormData(data);
			dispatch(addUserPet(newPet));
		}
		if (!data.avatar) {
			setUploadError(true);
			return;
		} else {
			setUploadError(false);
		}
		onCloseModal();

		// isPetsLoading &&
		// (isAddPetError
		// ? toast.error('ooops an error occured please try again'):
		toast.success(`${petName} added `);
		// )
	};
	// isAddPetError && toast.error('ooops an error occured please try again');
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
					uploadError={uploadError}
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
