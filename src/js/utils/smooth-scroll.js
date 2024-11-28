export const smoothScroll = () => {
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener('click', function (e) {
			const locationPath = window.location.pathname;
			const pageMatch =
				locationPath.includes('pavilioni') || locationPath.includes('ploshadki');
			if (!pageMatch) {
				e.preventDefault();
			}

			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth',
			});
		});
	});
};
