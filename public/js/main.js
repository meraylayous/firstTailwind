$(document).ready(function (){
    $(".owl-carousel").owlCarousel({
        rtl:true,
        items:1,
        loop:true,
        nav:true,
        autoplay:true,
        autoplayHoverPause:true,
        responsive:{
            0: {
                nav:false
            },
            768:{
                nav:true
            }
        }

    });
    $('.color-mode').click(function(){
       $('body').toggleClass('dark-mode')
    });
});

// grab an element
var myElement = document.querySelector(".navbar");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement);
// initialise
headroom.init();