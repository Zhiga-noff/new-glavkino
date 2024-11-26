const clickToBurger = () => {
	const burger = document.querySelectorAll('.header__burger');
	const burgerMenu = document.querySelector('.burger');
	burger.forEach((item) => {
		item.classList.toggle('active');
	});
	burgerMenu.classList.toggle('active');
};

const clickToElement = (e) => {
	const list = document.querySelectorAll('.burger__link');
	list.forEach((item) => {
		if (item === e.target) {
			clickToBurger();
		}
	});
};

export const openBurger = () => {
	const burger = document.querySelectorAll('.header__burger');
	const burgerMenu = document.querySelector('.burger');

	burger.forEach((item) => {
		item.addEventListener('click', clickToBurger);
	});

	burgerMenu.addEventListener('click', clickToElement, false);
};
