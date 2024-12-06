$(document).ready(function(){
    $(".hero-carousel").owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout:4000,
        dots:false
    });
    $(".bestseller-slider").owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000
    });
});

window.addEventListener('load', function() {
    setTimeout(function() {
        // Hide preloader after 3 seconds
        document.querySelector('.loader').style.display = 'none';
        document.querySelector('.wrapper').style.display = 'block';
    }, 3000); // adjust time as necessary
});