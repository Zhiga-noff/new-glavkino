const choosedContainer = document.querySelector('.pavilioni__choosed');

const button1 = document.getElementById('b1');
const button2 = document.getElementById('b2');
const button3 = document.getElementById('b3');
const button4 = document.getElementById('b4');
const button5 = document.getElementById('b5');
const button6 = document.getElementById('b6');
const button7 = document.getElementById('b7');
const button8 = document.getElementById('b8');

const buttons = [button1, button2, button3, button4, button5, button6, button7, button8];

const texts = [
	document.getElementById('t1'),
	document.getElementById('t2'),
	document.getElementById('t3'),
	document.getElementById('t4'),
	document.getElementById('t5'),
	document.getElementById('t6'),
	document.getElementById('t7'),
	document.getElementById('t8'),
];

const initialChoosed = () => {
	choosedContainer.innerHTML = `
        <h3 class="main__choosed-header">Павильон 1</h3>
        <p class="main__choosed-text">${texts[0].textContent}</p>
        `;
	choosedContainer.style.background = `url('img/pavilioni/1.png') center center / cover no-repeat`;
	choosedContainer.style.backgroundBlendMode = 'multiply';
	choosedContainer.style.backgroundColor = 'rgba(28, 28, 28, 0.6)';
};
initialChoosed();

buttons.forEach((button) => {
	const pavilionNumber = button.id.slice(1);
	const pavilionImagePath = `img/pavilioni/${pavilionNumber}.png`;
	const accordionActiveClass = 'item-active';

	button.style.background = `url(${pavilionImagePath}) center center / cover no-repeat`;
	button.style.backgroundBlendMode = 'multiply';
	button.style.backgroundColor = 'rgba(28, 28, 28, 0.6)';

	if (window.innerWidth > 992) {
		button.addEventListener('click', () => {
			choosedContainer.innerHTML = `
				<h3 class="pavilioni__choosed-header">Павильон ${pavilionNumber}</h3>
				<p class="pavilioni__choosed-text">${texts[pavilionNumber - 1].textContent}</p>
			`;
			choosedContainer.style.background = `url(${pavilionImagePath}) center center / cover no-repeat`;
			choosedContainer.style.backgroundBlendMode = 'multiply';
			choosedContainer.style.backgroundColor = 'rgba(28, 28, 28, 0.4)';
		});
	} else {
		button.addEventListener('click', () => {
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

const createButtonBack = () => {
	const list = document.getElementById('list-header');
	const header = list.parentElement;

	const btn = document.createElement('button');
	btn.classList.add('header__button', 'button');
	btn.innerText = 'Назад';

	const arrowBack = document.createElement('img');
	arrowBack.src = 'img/back-button-arrow.svg';

	btn.prepend(arrowBack);
	header.append(btn);
	list.remove();
};

const addButtonBack = () => {
	const locationPath = window.location.pathname;
	const pageMatch =
		locationPath.includes('pavilioni') || locationPath.includes('ploshadki');

	if (pageMatch) {
		createButtonBack();
	}
};

addButtonBack();

document.querySelector('.header__button').addEventListener('click', () => {
	window.history.back();
});
