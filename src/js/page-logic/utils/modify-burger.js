export const modifyBurger = () => {
    const list = document.querySelectorAll('.header__list');
    list.forEach(item => {
        const header = item.parentElement;

        const btn = document.createElement('button');
        btn.classList.add('header__button', 'button');
        btn.innerText = 'Назад';

        const arrowBack = document.createElement('img');
        arrowBack.src = 'img/back-button-arrow.svg';

        btn.prepend(arrowBack);
        header.append(btn);
        item.remove();

        btn.addEventListener('click', () => {
            window.history.back();
        });
    })

};
