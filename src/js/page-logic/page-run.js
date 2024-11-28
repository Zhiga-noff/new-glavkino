import { initialChoosed } from './utils/initial-choosed.js';
import { createSection } from './utils/create-section.js';
import { modifyBurger } from './utils/modify-burger.js';
import { modifyLinkBurger } from './utils/modify-link-burger.js';

const buttonList = document.querySelectorAll('.spisok__item');

export const pageRun = () => {
	modifyBurger();
	modifyLinkBurger();
	initialChoosed(buttonList);
	createSection(buttonList);
};
