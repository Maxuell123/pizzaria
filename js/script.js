// NAVBAR
let navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}
// NAVBAR


// USER ACCOUNT
let account = document.querySelector('.user-account');

document.querySelector('#user-btn').onclick = () => {
    account.classList.add('active');
}

document.querySelector('#close-account').onclick = () => {
    account.classList.remove('active');
}
// USER ACCOUNT


// MY ORDERS
let myOrders = document.querySelector('.my-orders');

document.querySelector('#order-btn').onclick = () =>{
   myOrders.classList.add('active');
}

document.querySelector('#close-orders').onclick = () =>{
   myOrders.classList.remove('active');
}
// MY ORDERS


// SHOPPING-CART
let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
   cart.classList.add('active');
}

document.querySelector('#close-cart').onclick = () =>{
   cart.classList.remove('active');
}
// SHOPPING-CART


window.onscroll = () => {
    navbar.classList.remove('active');
    myOrders.classList.remove('active');
    cart.classList.remove('active');   
};


//HOME SLIDE
let slides = document.querySelectorAll('.home-bg .home .slide-container .slide');
let index = 0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}
//HOME SLIDE


//FAQ
let accordion = document.querySelectorAll('.faq .accordion-container .accordion');

accordion.forEach(acco =>{
    acco.onclick = () =>{
        accordion.forEach(remove => remove.classList.remove('active'));
        acco.classList.add('active');
    }
});
//FAQ

