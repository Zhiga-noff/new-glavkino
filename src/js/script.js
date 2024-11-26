import { isWebp } from './utils/is-web.js';
import { smoothScroll } from './utils/smooth-scroll.js';
import { openBurger } from './utils/open-burger.js';
import { animation } from './animation/animation.js';

export const runAppFunc = () => {
	isWebp();
	smoothScroll();
	openBurger();
	animation();
};
