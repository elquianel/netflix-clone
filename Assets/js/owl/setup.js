$('.owl-carousel').owlCarousel({
    loop:true, //navegando de forma infinita no carrossel
    margin:10, 
    nav:false, 
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})