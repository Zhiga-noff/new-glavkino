import { isWebp } from './utils/is-web.js';
import { smoothScroll } from './utils/smooth-scroll.js';

export const runAppFunc = () => {
	isWebp();
	smoothScroll();
};

// Данная функция позволяет создавать анимацю появления объектов при скролле сайта
// Проверяем наличие класса у объекта который будем анимировать
let animItems = document.querySelectorAll('.anim-items');
// Если они есть то выполняется следущие условия
if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll, true);

	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}
			if (
				window.scrollY > animItemOffset - animItemPoint &&
				window.scrollY < animItemOffset + animItemHeight
			) {
				animItem.classList.add('anim');
			} else {
				if (!animItem.classList.contains('no-anim-again')) {
					animItem.classList.remove('anim');
				}
			}
		}
	}

	function offset(el) {
		const rect = el.getBoundingClientRect();
		let scrollLeft = window.scrollY || document.documentElement.scrollLeft;
		let scrollTop = window.scrollY || document.documentElement.scrollTop;

		return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
	}

	animOnScroll();
}
