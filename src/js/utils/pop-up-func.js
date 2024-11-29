export const popUpFunc = () => {
	closePopUp();
};

const closePopUp = () => {
	const btnClose = document.querySelector('.pop-up__close');
	const popup = document.querySelector('.pop-up');

	btnClose.addEventListener('click', () => {
		popup.classList.toggle('active');
	});
};
