// Функция для конвертации фотографий в формат webp
function isWebp() {
	function testWebP(callback) {
		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src =
			'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
	}

	testWebP(function (support) {
		if (support == true) {
			document.querySelector('body').classList.add('webp');
		} else {
			document.querySelector('body').classList.add('no-webp');
		}
	});
}

isWebp();

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
