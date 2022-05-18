// NAVBAR
let navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

// USER ACCOUNT
let account = document.querySelector('.user-account');

document.querySelector('#user-btn').onclick = () => {
    account.classList.add('active');
}

document.querySelector('#close-account').onclick = () => {
    account.classList.remove('active');
}
// USER ACCOUNT

window.onscroll = () => {
    navbar.classList.remove('active');
};


