export const openBurger = () => {
	const menu = document.querySelectorAll('.open');
	const menuClose = document.querySelectorAll('.close');
	const burger = document.querySelector('.burger');

	menu.forEach((item) => {
		item.addEventListener('click', () => {
			burger.classList.add('burger-active');
		});
	});
	menuClose.forEach((item) => {
		item.addEventListener('click', () => {
			burger.classList.remove('burger-active');
		});
	});
};
