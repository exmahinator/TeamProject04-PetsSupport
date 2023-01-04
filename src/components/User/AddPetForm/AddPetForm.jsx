import { Button } from 'components/Reuse/Button/Button';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export const AddPetForm = () => {
	const [firstPage, setFirstPage] = useState(true);
	const onClick = () => {
		setFirstPage(false);
	};
	const {
		handleSubmit,
		watch,
		register,
		// formState: { errors },
	} = useForm({
		defaultValues: {
			petName: '',
			petBirth: '',
			petBreed: '',
		},
	});
	const onSubmit = data => {
		console.log(data);
	};
	console.log('firstPage', firstPage);
	console.log(watch());
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{firstPage ? (
				<>
					<label htmlFor="petName">
						<p>Name pet</p>
						<input
							type="text"
							{...register('petName')}
							id="petName"
							placeholder="Type name pet"
						/>
					</label>
					<label htmlFor="petBirth">
						<p>Date of birthh</p>
						<input
							type="text"
							{...register('petBirth')}
							id="petBirth"
							placeholder="Type date of birth"
						/>
					</label>
					<label htmlFor="petname">
						<p>Breed</p>
						<input
							type="petBreed"
							{...register('petBreed')}
							id="petBreed"
							placeholder="Type breed"
						/>
					</label>
				</>
			) : (
				<>
					<label htmlFor="petName">
						<p>qwe</p>
						<input
							type="text"
							{...register('petName')}
							id="petName"
							placeholder="Type name pet"
						/>
					</label>
					<label htmlFor="petBirth">
						<p>Date of birth</p>
						<input
							type="text"
							{...register('petBirth')}
							id="petBirth"
							placeholder="Type date of birth"
						/>
					</label>
					<label htmlFor="petname">
						<p>Breed</p>
						<input
							type="petBreed"
							{...register('petBreed')}
							id="petBreed"
							placeholder="Type breed"
						/>
					</label>
				</>
			)}
			<button text={'next'} type="button" onClick={onClick}></button>
			<Button text={'cancel'} type={'white'}></Button>
		</form>
	);
};
