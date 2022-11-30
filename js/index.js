const toggleThemeButton = document.querySelector('.header__theme-button');
const header = document.querySelector('.header');
const dashboardItems = document.querySelectorAll('.dashboard__item');
const overviewItems = document.querySelectorAll('.overview__item');
const overviewTitle = document.querySelector('.overview__title');

function toggleTheme() {
    toggleThemeButton.classList.toggle('header__theme-button--dark-mode');
    document.body.classList.toggle('dark');
    header.classList.toggle('dark');
    dashboardItems.forEach(item => {
        item.classList.toggle('dark');
    });
    overviewTitle.classList.toggle('dark');
    overviewItems.forEach(item => {
        item.classList.toggle('dark');
    });
};

toggleThemeButton.addEventListener('click', toggleTheme);
