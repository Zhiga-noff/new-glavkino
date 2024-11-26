import { getTitleAndText } from './get-title-and-text.js';

export const initialChoosed = (array, index = 0) => {
	const choosedContainer = document.querySelector('.pavilioni__choosed');

	const { title, text } = getTitleAndText(array, index);

	choosedContainer.innerHTML = `
	    <h3 class="pavilioni__choosed-header">${title}</h3>
	    <p class="pavilioni__choosed-text">${text}</p>
	    `;
	choosedContainer.style.background = `url('img/pavilioni/${index + 1}.png') center center / cover no-repeat`;
	choosedContainer.style.backgroundBlendMode = 'multiply';
	choosedContainer.style.backgroundColor = 'rgba(28, 28, 28, 0.6)';
};
