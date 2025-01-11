import { animOnScroll } from './utils/anim-on-scroll.js';

export const animation = () => {
	// Данная функция позволяет создавать анимацю появления объектов при скролле сайта
	// Проверяем наличие класса у объекта который будем анимировать
	let animItems = document.querySelectorAll('.anim-items');
	// Если они есть то выполняется следущие условия
	if (animItems.length > 0) {
		window.addEventListener(
			'scroll',
			() => {
				animOnScroll(animItems);
			},
			true,
		);
		animOnScroll(animItems);
	}
};
