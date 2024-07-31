const choosedContainer = document.querySelector('.main__choosed');

const button1 = document.getElementById('b1');
const button2 = document.getElementById('b2');

const buttons = [button1, button2];

const texts = [document.getElementById('t1'), document.getElementById('t2')];

const initialChoosed = () => {
	choosedContainer.innerHTML = `
        <h3 class="main__choosed-header">Натурная площадка 1</h3>
        <p class="main__choosed-text">${texts[0].textContent}</p>
        `;
	choosedContainer.style.background = `url('/img/ploshadki/1.png') center center / cover no-repeat`;
	choosedContainer.style.backgroundBlendMode = 'multiply';
	choosedContainer.style.backgroundColor = 'rgba(28, 28, 28, 0.6)';
};
initialChoosed();

buttons.forEach((button) => {
	if (window.innerWidth > 992) {
		button.addEventListener('click', () => {
			choosedContainer.innerHTML = `
        <h3 class="main__choosed-header">Натурная площадка ${button.id.slice(1)}</h3>
        <p class="main__choosed-text">${texts[button.id.slice(1) - 1].textContent}</p>
        `;
			choosedContainer.style.background = `url('/img/ploshadki/${button.id.slice(1)}.png') center center / cover no-repeat`;
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

document.querySelector('.headerL__back-link').addEventListener('click', () => {
	window.history.back();
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
