const choosedContainer = document.querySelector('.main__choosed');

const button1 = document.getElementById('b1');
const button2 = document.getElementById('b2');
const button3 = document.getElementById('b3');
const button4 = document.getElementById('b4');
const button5 = document.getElementById('b5');
const button6 = document.getElementById('b6');

const buttons = [button1, button2, button3, button4, button5, button6];

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		choosedContainer.innerHTML = `
        <h3 class="main__choosed-header">Павильон ${button.id.slice(1)}</h3>
        <p class="main__choosed-text">Кино-телекомплекс включает в себя 9 съемочных павильонов от 133м2 до 3082м2. Павильоны отвечают всем требованиям индустрии кино и телевидения. Каждый павильон оборудован автономной системой кондиционирования.</p>
        `;
		choosedContainer.style.background = `url('/img/pavilioni/${button.id.slice(1)}.png') center center / cover no-repeat`;
		choosedContainer.style.backgroundBlendMode = 'multiply';
		choosedContainer.style.backgroundColor = 'rgba(28, 28, 28, 0.6)';
	});
});
document.querySelector('.headerL__back-link').addEventListener('click', () => {
	window.history.back();
});
