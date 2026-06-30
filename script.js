

//==================Skill Section===========//

const cards = document.querySelectorAll(".skill-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        const fills = card.querySelectorAll(".progress-fill");

        fills.forEach(fill => {

            fill.style.width = "0";

            setTimeout(() => {
                fill.style.width = fill.dataset.width + "%";
            }, 50);

        });

    });

});






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


//Project Section----Next Project------//
const projects = [

{
title:"Food Edition Tic Tac Toe",

description:"A fun and interactive Tic Tac Toe game - Food Edition with a modern twist on the classic Tic Tac Toe game.Players choose fun food-themed symbols instead of the traditional X and O, with smooth animations, hover effects, interactive popups, and a responsive user interface for an engaging gameplay experience.",

image:"./assets/tictactoe1.png",

live:"https://prachi-co.github.io/Tic-Tac-Toe/",

github:"https://github.com/Prachi-co/Tic-Tac-Toe"
},

{
title:"Personal Portfolio",

description:"Premium animated portfolio website.",

image:"./assets/portfolio.png",

live:"#",

github:"#"
}

];

let current = 0;

document.getElementById("nextProject").onclick = function(){

current++;

if(current>=projects.length){

current=0;

}

document.getElementById("projectTitle").textContent =
projects[current].title;

document.getElementById("projectDescription").textContent =
projects[current].description;

document.getElementById("projectImage").src =
projects[current].image;

document.getElementById("liveLink").href =
projects[current].live;

document.getElementById("githubLink").href =
projects[current].github;

}


//========About Me Right Section========//
const swipers = new Swiper(".certificateSwiper",{

    loop:true,

    speed:800,

    spaceBetween:20,

    autoplay:{

        delay:2500,

        disableOnInteraction:false,

    },

    pagination:{

        el:".swiper-pagination",

        clickable:true,

    },

    navigation:{

        nextEl:".swiper-button-next",

        prevEl:".swiper-button-prev",

    }

});

//---------Live Counter---------------//
const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter = entry.target;
            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 120;

            const update = ()=>{

                count += speed;

                if(count < target){

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(update);

                }else{

                    if(target >= 1000){
                        counter.innerText = target + "+";
                    }
                    else if(target > 1){
                        counter.innerText = target + "+";
                    }
                    else{
                        counter.innerText = target;
                    }

                }

            }

            update();

            observer.unobserve(counter);

        }

    })

},{
    threshold:.5
})

counters.forEach(counter=>observer.observe(counter));












