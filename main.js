document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
}); //seleccionamos el elemento nav-menu y cn el metodo toggle c/vez q hacemos un click quitamos o agregamos la clase show. (sidebar)

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { deley:500});
ScrollReveal().reveal('.cards-banner-one', { deley:500});
ScrollReveal().reveal('.cards-banner-two', { deley:500});



