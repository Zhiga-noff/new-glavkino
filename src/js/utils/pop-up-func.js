export const popUpFunc = () => {
	const btns = document.querySelectorAll('.pop');
	btns.forEach((btn) => {
		btn.addEventListener('click', () => {
			openPop();
		});
	});

	closePopUp();
};

const closePopUp = () => {
	const btnClose = document.querySelector('.pop-up__close');
	const popup = document.querySelector('.pop-up');

	btnClose.addEventListener('click', () => {
		popup.classList.toggle('active');
	});
};
export const openPop = () => {
	const popup = document.querySelector('.pop-up');
	popup.classList.toggle('active');
};
