export const setHeight = (e, element, text, btn) => {
	const heightElem = element.offsetHeight;

	console.log(e.target);
	if (e.target === btn) {
		return;
	}
	if (element.classList.contains(`item-active`)) {
		element.classList.remove(`item-active`);
		text.style.display = 'none';
		btn.style.display = 'none';
		element.style.height = '8rem';
		element.style.maxHeight = 'none';
	} else {
		element.classList.add(`item-active`);
		text.style.display = 'block';
		btn.style.display = 'flex';
		element.style.height = heightElem + text.offsetHeight + btn.offsetHeight + 16 + 'px';
		element.style.maxHeight =
			heightElem + text.offsetHeight + btn.offsetHeight + 16 + 'px';
	}
};
