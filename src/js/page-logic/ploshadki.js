const choosedContainer = document.querySelector('.main__choosed');

const button1 = document.getElementById('b1');
const button2 = document.getElementById('b2');

const buttons = [button1, button2];

const texts = [document.getElementById('t1'), document.getElementById('t2')];

// const initialChoosed = () => {
// 	choosedContainer.innerHTML = `
//         <h3 class="main__choosed-header">Натурная площадка 1</h3>
//         <p class="main__choosed-text">${texts[0].textContent}</p>
//         `;
// 	choosedContainer.style.background = `url('img/ploshadki/1.png') center center / cover no-repeat`;
// 	choosedContainer.style.backgroundBlendMode = 'multiply';
// 	choosedContainer.style.backgroundColor = 'rgba(28, 28, 28, 0.6)';
// };
// initialChoosed();

buttons.forEach((button) => {
	button.style.background = `url('img/ploshadki/${button.id.slice(1)}.png') center center / cover no-repeat`;
	button.style.backgroundBlendMode = 'multiply';
	button.style.backgroundColor = 'rgba(28, 28, 28, 0.6)';
	if (document.documentElement.clientWidth > 992) {
		button.addEventListener('click', () => {
			choosedContainer.innerHTML = `
        <h3 class="pavilioni__choosed-header">Натурная площадка ${button.id.slice(1)}</h3>
        <p class="pavilioni__choosed-text">${texts[button.id.slice(1) - 1].textContent}</p>
        `;
			choosedContainer.style.background = `url('img/ploshadki/${button.id.slice(1)}.png') center center / cover no-repeat`;
			//затемнить фон
			choosedContainer.style.backgroundBlendMode = 'multiply';
			//прозрачность фона
			choosedContainer.style.backgroundColor = 'rgba(28, 28, 28, 0.6)';
		});
	} else {
		//accordion
		button.addEventListener('click', () => {
			//check if containers height is already max height
			if (button.classList.contains(`item-active`)) {
				button.classList.remove(`item-active`);
				texts[button.id.slice(1) - 1].style.display = 'none';
			} else {
				button.classList.add(`item-active`);
				texts[button.id.slice(1) - 1].style.display = 'block';
			}
		});
	}
});

// document.querySelector('.headerL__back-link').addEventListener('click', () => {
// 	window.history.back();
// });

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

const links = document.querySelectorAll('.header__link');

links.forEach((link) => {
	link.setAttribute('href', 'index.html' + link.getAttribute('href'));
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
