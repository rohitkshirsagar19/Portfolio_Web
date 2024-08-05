document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.querySelector('.theme-switch input');
    const icons = document.querySelectorAll('.icon'); // Adjust the selector to match your icon class

    function toggleDarkThemeIcons() {
        if (document.body.classList.contains('dark-theme')) {
            icons.forEach(icon => icon.classList.add('dark-theme-icon'));
        } else {
            icons.forEach(icon => icon.classList.remove('dark-theme-icon'));
        }
    }

    // Run on initial load
    toggleDarkThemeIcons();

    // Toggle dark theme and dark-theme-icon class
    themeSwitch.addEventListener('change', function() {
        document.body.classList.toggle('dark-theme');
        toggleDarkThemeIcons();
    });

    // Hamburger menu functionality
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menuLinks = document.querySelector('.menu-links');
    const hamburgerIcon = document.querySelector('.hamburger-icon');

    hamburgerMenu.addEventListener('click', function() {
        menuLinks.classList.toggle('open');
        hamburgerIcon.classList.toggle('open');
    });
});
