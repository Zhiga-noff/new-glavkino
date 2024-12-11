import {isWebp} from './utils/is-web.js';
import {smoothScroll} from './utils/smooth-scroll.js';
import {openBurger} from './utils/open-burger.js';
import {animation} from './animation/animation.js';
import {pageRun} from './page-logic/page-run.js';
import {popUpFunc} from './utils/pop-up-func.js';
import {modifyBurger} from './page-logic/utils/modify-burger.js';
import {modifyLinkBurger} from './page-logic/utils/modify-link-burger.js';

export const runAppFunc = () => {
    isWebp();
    openBurger();
    animation();

    const locationPath = window.location.pathname;
    const pageMatch =
        locationPath.includes('pavilioni') || locationPath.includes('ploshadki') || locationPath.includes('studia');
    if (pageMatch) {
        pageRun();
    } else if (locationPath.includes('about-us')) {
        modifyBurger();
        modifyLinkBurger();
    } else {
        // screensaverOut();
        smoothScroll();
    }
    popUpFunc();
};
