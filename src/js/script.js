import { isWebp } from './utils/is-web.js';
import { smoothScroll } from './utils/smooth-scroll.js';
import { openBurger } from './utils/open-burger.js';
import { animation } from './animation/animation.js';
import { pageRun } from './page-logic/page-run.js';
import { screensaverOut } from './utils/screensaver-out.js';

export const runAppFunc = () => {
	isWebp();
	screensaverOut();
	smoothScroll();
	openBurger();
	animation();

	const locationPath = window.location.pathname;
	const pageMatch =
		locationPath.includes('pavilioni') || locationPath.includes('ploshadki');
	if (pageMatch) {
		pageRun();
	}
};
