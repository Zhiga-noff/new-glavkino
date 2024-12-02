import { getTitleAndText } from './get-title-and-text.js';
import { openPop } from '../../utils/pop-up-func.js';

export const initialChoosed = (array, index = 0) => {
	const choosedContainer = document.querySelector('.pavilioni__choosed');
	const { title, text } = getTitleAndText(array, index);
	let btn = document.querySelector('.pop');

	if (btn) {
		btn.removeEventListener('click', () => {
			openPop();
		});
	}

	choosedContainer.innerHTML = `
	    <h3 class="pavilioni__choosed-header">${title}</h3>
	    <p class="pavilioni__choosed-text">${text}</p>
	    <button class="pavilioni__button pop desk button">
                Забронировать  <img src="../img/button_arrow.svg" alt="">
            </button>
	    `;
	choosedContainer.style.background = `url('img/pavilioni/${index + 1}.png') center center / cover no-repeat`;
	choosedContainer.style.backgroundBlendMode = 'multiply';
	choosedContainer.style.backgroundColor = 'rgba(28, 28, 28, 0.6)';

	btn = document.querySelector('.pop.desk');
	btn.addEventListener('click', () => {
		openPop();
	});
};
