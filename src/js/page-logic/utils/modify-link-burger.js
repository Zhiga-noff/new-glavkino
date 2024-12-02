export const modifyLinkBurger = () => {
    const burgerLink = document.querySelectorAll('.burger__link');
    burgerLink.forEach((link) => {
        const baseURL = link.attributes.href.value;
        if (baseURL.includes('#')) {
            link.href = 'index.html' + baseURL;
        }
    });
};
