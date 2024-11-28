export const modifyLinkBurger = () => {
	const burgerLink = document.querySelectorAll('.burger__link');
	burgerLink.forEach((link) => {
		const baseURL = link.attributes.href.value;
		link.href = 'index.html' + baseURL;
	});
};
