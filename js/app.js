const buttonFollow = document.querySelectorAll('.animFollow');
const targets = document.querySelectorAll('[class*="reveal-"]');

buttonFollow.forEach(element => {
    element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
    
        element.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    });

    element.addEventListener('mouseleave', () => {
        element.style.transform = 'translate(0, 0)';
    });

    targets.forEach(function (target) {
        target.classList.add('reveal-visible')
    })
});



const burger = document.querySelector('.boxBurger');
const sidenav = document.getElementById("mySideNav");
let isBurgerActive;

const QA_item = document.querySelectorAll('.QA-item .questionTitle');

const projets = document.querySelectorAll('.projetDiv');

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    if(cursor){
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
});

const video = document.querySelector('#video');

// Actions

document.addEventListener('DOMContentLoaded', () => {

    video.addEventListener('click', () => {
        video.paused? video.play() : video.pause();
    })
/*
    projets.forEach((projet) => {
        projet.addEventListener('click', () => {
            let projetID = projet.id;
            console.log(projet);
            window.location.href = 'projets/' + projetID + '.html';
        })
    });
*/
    QA_item.forEach((question) => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
    });

    burger.addEventListener('click', e => {
        e.target.classList.toggle('active');
        isBurgerActive = e.target.classList.value
        if (isBurgerActive == 'boxBurger active'){
            sidenav.classList.add("active");
        }
        if (isBurgerActive == 'boxBurger'){
            sidenav.classList.remove("active");
        }
    })

})



