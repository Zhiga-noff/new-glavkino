const choosedContainer = document.querySelector('.main__choosed');

const button1 = document.getElementById('b1');
const button2 = document.getElementById('b2');
const button3 = document.getElementById('b3');
const button4 = document.getElementById('b4');
const button5 = document.getElementById('b5');
const button6 = document.getElementById('b6');

const buttons = [button1, button2, button3, button4, button5, button6];

const texts = [
	document.getElementById('t1'),
	document.getElementById('t2'),
	document.getElementById('t3'),
	document.getElementById('t4'),
	document.getElementById('t5'),
	document.getElementById('t6'),
];

const initialChoosed = () => {
	choosedContainer.innerHTML = `
        <h3 class="main__choosed-header">Павильон 1</h3>
        <p class="main__choosed-text">${texts[0].textContent}</p>
        `;
	choosedContainer.style.background = `url('/img/pavilioni/1.png') center center / cover no-repeat`;
	choosedContainer.style.backgroundBlendMode = 'multiply';
	choosedContainer.style.backgroundColor = 'rgba(28, 28, 28, 0.6)';
};
initialChoosed();

buttons.forEach((button) => {
	if (document.documentElement.clientWidth > 992) {
		button.addEventListener('click', () => {
			choosedContainer.innerHTML = `
        <h3 class="main__choosed-header">Павильон ${button.id.slice(1)}</h3>
        <p class="main__choosed-text">${texts[button.id.slice(1) - 1].textContent}</p>
        `;
			choosedContainer.style.background = `url('/img/pavilioni/${button.id.slice(1)}.png') center center / cover no-repeat`;
			choosedContainer.style.backgroundBlendMode = 'multiply';
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
