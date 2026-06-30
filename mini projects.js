//====================== SWIPER ======================//

const swiper = new Swiper(".mySwiper",{

    slidesPerView:3,

    spaceBetween:25,

    loop:true,

    speed:800,

    grabCursor:true,

    autoplay:{

        delay:3000,

        disableOnInteraction:false,

    },

    navigation:{

        nextEl:".swiper-button-next",

        prevEl:".swiper-button-prev",

    },

    pagination:{

        el:".swiper-pagination",

        clickable:true,

    },

    breakpoints:{

        0:{

            slidesPerView:1,

        },

        768:{

            slidesPerView:2,

        },

        1200:{

            slidesPerView:3,

        }

    }

});


const buttons=document.querySelectorAll(".filter-buttons button");

buttons.forEach(button=>{

    button.addEventListener("click",()=>{

        buttons.forEach(btn=>{

            btn.classList.remove("active");

        });

        button.classList.add("active");

    });

});


const search=document.querySelector(".search-box input");

const cards=document.querySelectorAll(".project-card");

search.addEventListener("keyup",()=>{

    const value=search.value.toLowerCase();

    cards.forEach(card=>{

        const title=card.querySelector("h3").textContent.toLowerCase();

        if(title.includes(value)){

            card.parentElement.style.display="block";

        }

        else{

            card.parentElement.style.display="none";

        }

    });

});

buttons.forEach(button=>{

    button.addEventListener("click",()=>{

        const filter=button.textContent.trim().toLowerCase();

        cards.forEach(card=>{

            const slide=card.parentElement;

            const category=slide.dataset.category;

            if(filter==="all projects"){

                slide.style.display="block";

            }

            else if(category===filter){

                slide.style.display="block";

            }

            else{

                slide.style.display="none";

            }

        });

        swiper.update();

    });

});