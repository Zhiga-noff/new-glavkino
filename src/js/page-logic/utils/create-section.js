import {initialChoosed} from './initial-choosed.js';
import {setHeight} from './set-height.js';
import {setFolderImage} from "./set-folder-image.js";

export const createSection = (buttonList) => {

    const folder = setFolderImage()

    buttonList.forEach((button, index) => {
        const pavilionImagePath = `img/${folder}/${index + 1}.png`;

        button.style.background = `url(${pavilionImagePath}) center center / cover no-repeat`;
        button.style.backgroundBlendMode = 'multiply';
        button.style.backgroundColor = 'rgba(28, 28, 28, 0.6)';

        const textP = button.querySelector('p');
        const btnForMobil = button.querySelector('.non-desk');

        if (window.innerWidth > 992) {
            button.addEventListener('click', () => {
                initialChoosed(buttonList, index);
            });
        } else {
            button.addEventListener(
                'click',
                (e) => {
                    setHeight(e, button, textP, btnForMobil);
                },
                true,
            );
        }
    });
};
