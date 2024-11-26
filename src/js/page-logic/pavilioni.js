import { initialChoosed } from './utils/initial-choosed.js';

const buttonList = document.querySelectorAll('.spisok__item');

export const pageRun = () => {
	initialChoosed(buttonList);
};

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
				// texts[button.id.slice(1) - 1].style.display = 'block';
				button.querySelector('p').style.display = 'block';
			}
		});
	}
});
//
// const menu = document.querySelectorAll('.open');
// const menuClose = document.querySelectorAll('.close');
// const burger = document.querySelector('.burger');
//
// menu.forEach((item) => {
// 	item.addEventListener('click', () => {
// 		burger.classList.add('burger-active');
// 	});
// });
// menuClose.forEach((item) => {
// 	item.addEventListener('click', () => {
// 		burger.classList.remove('burger-active');
// 	});
// });
//
// const links = document.querySelectorAll('.header__link');
//
// links.forEach((link) => {
// 	link.setAttribute('href', 'index.html' + link.getAttribute('href'));
// });
//
// // Данная функция позволяет создавать анимацю появления объектов при скролле сайта
// // Проверяем наличие класса у объекта который будем анимировать
// let animItems = document.querySelectorAll('.anim-items');
// // Если они есть то выполняется следущие условия
// if (animItems.length > 0) {
// 	window.addEventListener('scroll', animOnScroll, true);
//
// 	function animOnScroll() {
// 		for (let index = 0; index < animItems.length; index++) {
// 			const animItem = animItems[index];
// 			const animItemHeight = animItem.offsetHeight;
// 			const animItemOffset = offset(animItem).top;
// 			const animStart = 4;
//
// 			let animItemPoint = window.innerHeight - animItemHeight / animStart;
//
// 			if (animItemHeight > window.innerHeight) {
// 				animItemPoint = window.innerHeight - window.innerHeight / animStart;
// 			}
// 			if (
// 				window.scrollY > animItemOffset - animItemPoint &&
// 				window.scrollY < animItemOffset + animItemHeight
// 			) {
// 				animItem.classList.add('anim');
// 			} else {
// 				if (!animItem.classList.contains('no-anim-again')) {
// 					animItem.classList.remove('anim');
// 				}
// 			}
// 		}
// 	}
//
// 	function offset(el) {
// 		const rect = el.getBoundingClientRect();
// 		let scrollLeft = window.scrollY || document.documentElement.scrollLeft;
// 		let scrollTop = window.scrollY || document.documentElement.scrollTop;
//
// 		return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
// 	}
//
// 	animOnScroll();
// }
//
// const createButtonBack = () => {
// 	const list = document.getElementById('list-header');
// 	const header = list.parentElement;
//
// 	const btn = document.createElement('button');
// 	btn.classList.add('header__button', 'button');
// 	btn.innerText = 'Назад';
//
// 	const arrowBack = document.createElement('img');
// 	arrowBack.src = 'img/back-button-arrow.svg';
//
// 	btn.prepend(arrowBack);
// 	header.append(btn);
// 	list.remove();
// };
//
// const addButtonBack = () => {
// 	const locationPath = window.location.pathname;
// 	const pageMatch =
// 		locationPath.includes('pavilioni') || locationPath.includes('ploshadki');
//
// 	if (pageMatch) {
// 		createButtonBack();
// 	}
// };
//
// addButtonBack();
//
// document.querySelector('.header__button').addEventListener('click', () => {
// 	window.history.back();
// });
