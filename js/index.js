const toggleThemeButton = document.querySelector('.header__theme-button');

const toggleTheme = () => {
    toggleThemeButton.classList.toggle('header__theme-button--dark-mode')
};

toggleThemeButton.addEventListener('click', toggleTheme);