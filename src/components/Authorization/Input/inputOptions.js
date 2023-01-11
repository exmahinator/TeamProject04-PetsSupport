export const emailOpt = {
	name: 'email',
	type: 'email',
	placeholder: 'Email',
	required: true,
	requiredMessage: 'Email is required',
	pattern:
		/^(?=.{10,63}$)(([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1})@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/i,

	patternMessage: 'Invalid email address',
};
export const passwordOpt = {
	name: 'password',
	type: 'password',
	placeholder: 'Password',
	required: true,
	requiredMessage: 'Password is required',
	pattern: /^(?=.{7,32}$)([0-9A-Za-z])*$/i,
	patternMessage: 'Min 7 max 32 symbols, no spaces',
};
export const confirmPasswordOpt = {
	name: 'passwordConfirm',
	type: 'password',
	placeholder: 'Confirm Password',
	required: true,
	requiredMessage: 'Confirm your password',
	confirmPassword: true,
};
export const nameOpt = {
	name: 'name',
	type: 'text',
	placeholder: 'Name',
	required: true,
	requiredMessage: 'Enter your name, please',
	pattern: /^(?=.{2,16}$)([A-Za-z])*$/i,
	patternMessage: 'Latins only min 2, max 16 ',
};

export const cityOpt = {
	name: 'city',
	type: 'text',
	placeholder: 'City, Region',
	required: true,
	requiredMessage: 'Enter your city and region, please',
	pattern: /^([A-Za-z]+)([,][ ][A-Za-z]+)*$/i,
	patternMessage: 'Format: Brovary, Kyiv',
	label: 'Location',
	zero: true,
};

export const phoneOpt = {
	name: 'phone',
	type: 'tel',
	placeholder: 'Phone',
	required: true,
	requiredMessage: 'Enter your phone, please',
	pattern: /^(0[5-9][0-9]\d{7})$/i,
	patternMessage: 'Phone format: 0971234567',
};

// notice pets modal form
export const petName = {
	label: 'Name pet',
	name: 'name',
	type: 'text',
	placeholder: 'Type pet name',
	// required: true,
	// requiredMessage: "Enter your pet's name",
	pattern: /^(?=.{2,16}$)([A-Za-z])*$/,
	patternMessage: 'Latin only, min 2, max 16',
	maxLength: 16,
	minLength: 2,
};
export const petBirth = {
	label: 'Date of Birth',
	name: 'birthday',
	type: 'text',
	placeholder: 'Type date of birth',
	// required: true,
	// requiredMessage: 'Enter the date of birth',
	pattern:
		/^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/,
	patternMessage: '01.01.2020',
};
export const petBreed = {
	label: 'Breed',
	name: 'breed',
	type: 'text',
	placeholder: 'Type breed',
	// required: true,
	// requiredMessage: "Enter your pet's breed",
	pattern: /^(?=.{2,16}$)([A-Za-z])*$/,
	patternMessage: 'Latin only, min 2, max 16',
	maxLength: 16,
	minLength: 2,
};
export const petComment = {
	label: 'Comments',
	name: 'comments',
	type: 'text',
	placeholder: 'Type comments',
	// required: true,
	// requiredMessage: 'Enter your comment',
	// eslint-disable-next-line no-useless-escape
	pattern: /^[A-Za-z0-9\s!@#$%^&*()_+=-`~\\\]\[{}|';:/.,?><]*$/,
	patternMessage: 'Latin only, min 8, max 120',
	maxLength: 120,
	minLength: 8,
};
export const petAdTitle = {
	label: 'Tittle of ad',
	name: 'title',
	type: 'text',
	placeholder: 'Type name',
	required: true,
	requiredMessage: 'Enter your title name',
	// eslint-disable-next-line no-useless-escape
	pattern: /^[A-Za-z0-9\s!@#$%^&*()_+=-`~\\\]\[{}|';:/.,?><]*$/,
	patternMessage: 'Latin only, min 8, max 120',
	maxLength: 48,
	minLength: 2,
	zero: true,
};
export const petPrice = {
	label: 'Price',
	name: 'price',
	type: 'text',
	placeholder: 'Type price',
	required: true,
	requiredMessage: 'Enter the price',
	pattern: /^[1-9][0-9]*$/,

	zero: true,
	patternMessage: "Price can't start with 0",
};

export const petsLocation = {
	name: 'location',
	type: 'text',
	placeholder: 'City, Region',
	required: true,
	requiredMessage: 'Enter your city and region, please',
	pattern: /^([A-Za-z]+)([,][ ][A-Za-z]+)*$/,
	patternMessage: 'Format: Brovary, Kyiv',
	label: 'Location',
	zero: true,
};

// user pets modal form

export const petBirthUser = {
	label: 'Date of Birth',
	name: 'birthday',
	type: 'text',
	placeholder: 'Type date of birth',
	required: true,
	requiredMessage: 'Enter the date of birth',
	pattern:
		/^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/,
	patternMessage: '01.01.2020',
};

export const petNameUser = {
	label: 'Name pet',
	name: 'name',
	type: 'text',
	placeholder: 'Type pet name',
	required: true,
	requiredMessage: "Enter your pet's name",
	pattern: /^(?=.{2,16}$)([A-Za-z])*$/,
	patternMessage: 'Latin only, min 2, max 16',
	maxLength: 16,
	minLength: 2,
};

export const petBreedUser = {
	label: 'Breed',
	name: 'breed',
	type: 'text',
	placeholder: 'Type breed',
	required: true,
	requiredMessage: "Enter your pet's breed",
	pattern: /^(?=.{2,16}$)([A-Za-z])*$/,
	patternMessage: 'Latin only, min 2, max 16',
	maxLength: 16,
	minLength: 2,
};

export const petCommentUser = {
	label: 'Comments',
	name: 'comments',
	type: 'text',
	placeholder: 'Type comments',
	required: true,
	requiredMessage: 'Enter your comment',
	// eslint-disable-next-line no-useless-escape
	pattern: /^[A-Za-z0-9\s!@#$%^&*()_+=-`~\\\]\[{}|';:/.,?><]*$/,
	patternMessage: 'Latin only, min 8, max 120',
	maxLength: 120,
	minLength: 8,
};
