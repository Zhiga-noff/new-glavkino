export const getTitleAndText = (element, index) => {
	return {
		title: element[index].querySelector('h3').textContent,
		text: element[index].querySelector('p').textContent,
	};
};
