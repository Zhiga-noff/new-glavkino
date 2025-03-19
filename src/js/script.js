import {isWebp} from './utils/is-web.js';
import {smoothScroll} from './utils/smooth-scroll.js';
import {openBurger} from './utils/open-burger.js';
import {animation} from './animation/animation.js';
import {pageRun} from './page-logic/page-run.js';
import {popUpFunc} from './utils/pop-up-func.js';
import {modifyBurger} from './page-logic/utils/modify-burger.js';
import {modifyLinkBurger} from './page-logic/utils/modify-link-burger.js';
import videojs from "video.js";

export const runAppFunc = () => {

    const player = videojs('vid1', {
        controls: true,
        autoplay: false,
        preload: 'auto',
        loop: false,
        // aspectRatio: '16:9'
    });


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
