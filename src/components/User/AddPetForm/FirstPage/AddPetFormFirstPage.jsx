import { AddPetInput } from '../AddPetInput/AddPetInput';
import {
	petBirthUser,
	petBreedUser,
	petNameUser,
} from 'components/Authorization/Input/inputOptions';

export const AddPetFormFirstPage = ({ register, errors }) => {
	return (
		<>
			<AddPetInput register={register} errors={errors} settings={petNameUser} />
			<AddPetInput
				register={register}
				errors={errors}
				settings={petBirthUser}
			/>
			<AddPetInput
				register={register}
				errors={errors}
				settings={petBreedUser}
			/>
		</>
	);
};
