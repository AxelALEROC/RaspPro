const menu = document.querySelector('.nav__menu');
const menuList = document.querySelector('.nav__list');
const links = document.querySelectorAll('.nav__link');

menu.addEventListener('click', function() {
    menuList.classList.toggle('nav__list--show');
    // Bloquear el desplazamiento
    document.body.style.overflow = 'hidden';
});

links.forEach(function(link) {
    link.addEventListener('click', function() {
        menuList.classList.remove('nav__list--show');
        // Restaurar el desplazamiento
        document.body.style.overflow = 'auto';
    });
});


let index = 0;
let images = ['img1', 'img2', 'img3'];

function changeImage() {
    document.getElementById(images[index]).style.opacity = '0';
    document.getElementById(images[index]).style.display = 'none';
    index = (index + 1) % images.length;
    document.getElementById(images[index]).style.display = 'block';
    setTimeout(function() {
        document.getElementById(images[index]).style.opacity = '1';
    }, 50); // Pequeña demora para asegurar que la imagen está visible antes de aplicar la transición
}

setInterval(changeImage, 3000); // Cambia la imagen cada 3 segundos

