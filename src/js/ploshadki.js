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
		button.style.maxHeight = '8rem';
		//accordion
		button.addEventListener('click', () => {
			//check if containers height is already max height
			if (button.style.maxHeight != '8rem') {
				button.style.maxHeight = '8rem';
				button.style.height = '100%';
				texts[button.id.slice(1) - 1].style.display = 'none';
			} else {
				texts[button.id.slice(1) - 1].style.display = 'block';
				button.style.height = 'auto';
				button.style.maxHeight = '28.994375rem';
			}
		});
	}
});

document.querySelector('.headerL__back-link').addEventListener('click', () => {
	window.history.back();
});


const menu = document.querySelector('.open');
const menuClose = document.querySelector('.close');
const burger = document.querySelector('.burger');
const isOpened = false;

menu.addEventListener('click', () => {
	burger.classList.add('burger-active');
});
menuClose.addEventListener('click', () => {
	burger.classList.remove('burger-active');
});
