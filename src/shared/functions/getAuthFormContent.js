export const getAuthFormContent = type => {
	return type === 'login'
		? {
				title: 'Login',
				navigatePath: '/register',
				navigateMessage: "Don't have an account?",
				linkText: 'Register',
		  }
		: {
				title: 'Registration',
				navigatePath: '/login',
				navigateMessage: 'Already have an account?',
				linkText: 'Login',
		  };
};
