export const setFolderImage = () => {
    const location = window.location.pathname
    if (location.includes('studia-zvukozapisi')) {
        return 'studia-zvukozapisi'
    }
    if (location.includes('pavilioni')) {
        return 'pavilioni'
    }
    if (location.includes('ploshadki')) {
        return 'ploshadki'
    }
}