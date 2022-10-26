const navbarTogglerButton = document.getElementsByClassName('navbar-toggler')[0];
const navbarTogglerIcon = document.getElementsByClassName('navbar-toggler-icon')[0].children[0];

navbarTogglerIcon.addEventListener("click",function (params) {
    if (navbarTogglerButton.getAttribute('aria-expanded') == 'true') {
        navbarTogglerIcon.setAttribute('src', 'assets/images/icon-menu-close.svg');
    } else {
        navbarTogglerIcon.setAttribute('src', 'assets/images/icon-menu.svg');
    }
});