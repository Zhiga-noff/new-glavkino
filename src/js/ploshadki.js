const choosedContainer = document.querySelector('.main__choosed');

const button1 = document.getElementById('b1');
const button2 = document.getElementById('b2');

const buttons = [button1, button2];

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		choosedContainer.innerHTML = `
        <h3 class="main__choosed-header">Натурная площадка ${button.id.slice(1)}</h3>
        <p class="main__choosed-text">Кино-телекомплекс включает в себя 9 съемочных павильонов от 133м2 до 3082м2. Павильоны отвечают всем требованиям индустрии кино и телевидения. Каждый павильон оборудован автономной системой кондиционирования.</p>
        `;
		choosedContainer.style.background = `url('/img/ploshadki/${button.id.slice(1)}.png') center center / cover no-repeat`;
		//затемнить фон
		choosedContainer.style.backgroundBlendMode = 'multiply';
		//прозрачность фона
		choosedContainer.style.backgroundColor = 'rgba(28, 28, 28, 0.6)';
	});
});

document.querySelector('.headerL__back-link').addEventListener('click', () => {
	window.history.back();
});
