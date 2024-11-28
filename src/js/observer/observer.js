export const observer = new IntersectionObserver(
	(entries, observer) => {
		const screensaver = document.getElementById('screensaver');
		const mainBlock = document.getElementById('main');

		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				console.log('Элемент в зоне видимости');
				// Выполните действия, когда элемент становится видимым
				setTimeout(() => {
					mainBlock.scrollIntoView({ behavior: 'smooth' });
				}, 3000);
			} else {
				console.log('Элемент не в зоне видимости');
				screensaver.remove();
				// Выполните действия, когда элемент выходит из зоны видимости
			}
		});
	},
	{
		root: null, // Используем окно браузера в качестве корня
		rootMargin: '0px', // Маржин вокруг корня
		threshold: 0.1, // Порог видимости (0.1 означает, что элемент считается видимым, если 10% его площади видимы)
	},
);
