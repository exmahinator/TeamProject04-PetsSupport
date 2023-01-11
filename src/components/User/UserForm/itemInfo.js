export const itemInfo = [
	{
		text: 'Name',
		field: 'name',
		pattern: {
			pattern: /^(?=.{2,16}$)([A-Za-z])*$/,
			patternMessage: 'Invalid name',
		},
	},
	{
		text: 'Email',
		type: 'email',
		field: 'email',
		pattern: {
			pattern:
				// eslint-disable-next-line no-useless-escape
				/^(?=.{10,63}$)(([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/,
			patternMessage: 'Invalid email',
		},
	},
	{
		text: 'Birthday',
		field: 'birthday',
		pattern: {
			pattern:
				/^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/,
			patternMessage: 'Invalid date',
		},
	},
	{
		text: 'Phone',
		field: 'phone',
		pattern: {
			pattern: /^\+38(0\d{9})$/,
			patternMessage: 'Invalid phone',
		},
	},
	{
		text: 'City',
		field: 'city',
		pattern: {
			pattern: /^([A-Za-z]+)([,][ ][A-Za-z]+)*$/,
			patternMessage: 'Example: City, Region',
		},
	},
];
