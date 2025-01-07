document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 4000, 
        },
    });
});

function toggleMenu() {
        const menu = document.querySelector('.navbar ul');
        menu.classList.toggle('show');
    }
