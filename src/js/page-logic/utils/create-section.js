import { initialChoosed } from './initial-choosed.js';

export const createSection = (buttonList) => {
	buttonList.forEach((button, index) => {
		const pavilionImagePath = `img/pavilioni/${index + 1}.png`;

		button.style.background = `url(${pavilionImagePath}) center center / cover no-repeat`;
		button.style.backgroundBlendMode = 'multiply';
		button.style.backgroundColor = 'rgba(28, 28, 28, 0.6)';

		if (window.innerWidth > 992) {
			button.addEventListener('click', () => {
				initialChoosed(buttonList, index);
			});
		} else {
			button.addEventListener('click', () => {
				if (button.classList.contains(`item-active`)) {
					button.classList.remove(`item-active`);
					button.querySelector('p').style.display = 'none';
				} else {
					button.classList.add(`item-active`);
					button.querySelector('p').style.display = 'block';
				}
			});
		}
	});
};
