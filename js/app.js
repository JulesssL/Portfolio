const buttonFollow = document.querySelectorAll('.animFollow');

buttonFollow.forEach(element => {
    element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
    
        element.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    element.addEventListener('mouseleave', () => {
        element.style.transform = 'translate(0, 0)';
    });
});

const burger = document.querySelector('.boxBurger');
const sidenav = document.getElementById("mySideNav");
let isBurgerActive;

const QA_item = document.querySelectorAll('.QA-item .questionTitle');


// Actions

document.addEventListener('DOMContentLoaded', () => {

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


// Fonctions 

function getAge(dateString) {
    const today = new Date();
    const birthDate = new Date(dateString);
    const age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}