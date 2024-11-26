export function animOnScroll() {
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
