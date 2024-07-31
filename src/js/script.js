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

const menu = document.querySelector('.open');
const burger = document.querySelector('.burger');
const isOpened = false;

menu.addEventListener('click', () => {
	if (!isOpened) {
		burger.style.display = 'flex';
		burger.style.position = 'absolute';
		burger.style.top = '0';
		burger.style.overflow = 'hidden';
		isOpened = true;
	} else {
		burger.style.display = 'none';
		burger.style.position = 'absolute';
		burger.style.top = '0';
		burger.style.overflow = 'inherit';
		isOpened = false;
	}
});
