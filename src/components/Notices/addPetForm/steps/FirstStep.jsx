import { Button } from 'components/Reuse/Button/Button';

export const FirstStep = ({ register, nextPage, onCloseModal }) => {
	return (
		<>
			<label htmlFor="petTitle">
				<p>Tittle of ad</p>
				<input
					{...register('petTitle')}
					type="text"
					id="petTitle"
					placeholder="Type name pet"
				/>
			</label>
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
					type="text"
					{...register('petBreed')}
					id="petBreed"
					placeholder="Type breed"
				/>
			</label>

			<div>
				<Button
					type={'button'}
					text={'Next'}
					colorType={'orange'}
					onClickFunc={nextPage}
				/>
				<Button
					type={'button'}
					text={'Cancel'}
					colorType={'white'}
					onClickFunc={onCloseModal}
				/>
			</div>
		</>
	);
};
