// Your code goes here

// Mouse Click
const introImg = document.querySelector('.intro img');
introImg.addEventListener('click', () => {
    introImg.style.transform = "scale(1.2)"
});

// Nav-Links Mouse Enter
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(elem => elem.addEventListener('mouseenter', () => {
    elem.style.color = 'limegreen';
    elem.style.backgroundColor = 'yellow';

}));

//Nav-Links Mouse Leave
navLinks.forEach(elem => elem.addEventListener('mouseleave', () => {
    elem.style.color = 'black';
    elem.style.backgroundColor = 'white';
}));

// img1 Mouse Over
const img1 = document.querySelector('#img1');
img1.addEventListener('mouseover', () => {
    img1.src ='https://images.unsplash.com/photo-1559762740-77e772d4d6d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' ;
});

//img1 Double-Click
img1.addEventListener('dblclick', () => {
    img1.src = 'img/adventure.jpg';
});

//Intro <p> - mousemove
const introP = document.querySelector('.intro p');
introP.addEventListener('mousemove', () => {
    introP.style.color = 'hotpink';
});

//.text-content p - select
const textP = document.querySelector('.text-content p');
textP.addEventListener('contextmenu', () => {
    textP.style.backgroundColor = 'yellow';
});

//Window - Load
window.addEventListener('load', () => {
    alert('This Page Has Loaded Successfully')
});

// Window - Scroll
const body = document.querySelector('.body');
window.addEventListener('scroll', () => {
    body.style.backgroundColor = 'peachpuff';
});

//Keydown
const text = document.querySelector('body');
text.addEventListener('keydown', () => {
    text.style.color = 'hotpink';
});

// Keyup
text.addEventListener('keyup', () => {
    text.style.color = 'black';
});

// .stopPropagation()
const destination = document.querySelector('.content-destination');
const destinationH2 = document.querySelector('.content-destination h2');
destination.addEventListener('click', (e) => {
    destination.style.backgroundColor = 'salmon';
});
destinationH2.addEventListener('click', (e) => {
    destinationH2.style.color = "dodgerblue";
    e.stopPropagation();
});

//.preventDefault
const a = document.querySelectorAll('.nav a');
a.forEach(elem => elem.addEventListener('click', (e) => {
    e.preventDefault();
}));

// Greensock Animations

const destinationImg = document.querySelectorAll('img').forEach(elem => elem.addEventListener('click', () => {
    gsap.to('img',{
        duration: 5,
        rotateY: 180,
        ease: 'elastic(1, 0.75)',
        yoyo: true
    })
}));


