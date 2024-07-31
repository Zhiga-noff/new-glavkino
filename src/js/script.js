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
const menuClose = document.querySelector('.close');
const burger = document.querySelector('.burger');

menu.forEach((item) => {
	item.addEventListener('click', () => {
		burger.classList.add('burger-active');
	});
});
menuClose.addEventListener('click', () => {
	burger.classList.remove('burger-active');
});
