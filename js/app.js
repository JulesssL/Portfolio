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

const loadingPage = document.querySelector('.loadingPage');

// Actions

document.addEventListener('DOMContentLoaded', () => {

    
    loadingPage.classList.add("active");
    setTimeout(() => {
        loadingPage.classList.remove("active");
        loadingPage.classList.add("inactive");
    }, 400);

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