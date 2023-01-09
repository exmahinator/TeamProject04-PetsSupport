import { AddPetInput } from '../AddPetInput/AddPetInput';
import {
	petBirth,
	petBreed,
	petName,
} from 'components/Authorization/Input/inputOptions';

export const AddPetFormFirstPage = ({ register, errors }) => {
	return (
		<>
			<AddPetInput register={register} errors={errors} settings={petName} />
			<AddPetInput register={register} errors={errors} settings={petBirth} />
			<AddPetInput register={register} errors={errors} settings={petBreed} />
		</>
	);
};
