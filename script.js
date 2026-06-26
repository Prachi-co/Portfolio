





//Project Section----Swipper Effect----//
const swiper = new Swiper(".mySwiper",{

    effect:"coverflow",
    grabCursor:true,
    centeredSlides:true,
    slidesPerView:"auto",
    loop:true,

    coverflowEffect:{
        rotate:15,
        stretch:0,
        depth:220,
        modifier:1,
        slideShadows:false,
        scale:0.9
    },

    pagination:{
        el:".swiper-pagination",
        clickable:true
    },

    autoplay:{
        delay:2500,
        disableOnInteraction:false
    }
});