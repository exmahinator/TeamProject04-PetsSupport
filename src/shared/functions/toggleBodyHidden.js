export const toggleBodyHidden = isOpen => {
	if (isOpen) {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = 'auto';
	}
};
