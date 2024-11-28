import { observer } from '../observer/observer.js';

export const screensaverOut = () => {
	const screensaver = document.getElementById('screensaver');

	observer.observe(screensaver);
};
