let burger = document.querySelector('#burger')
let hamDiv = document.querySelector('.menu');
let image = document.querySelector('.image');
let btns = document.querySelectorAll('button');
let thumb = document.querySelector('.thumbnails');
let lists = document.querySelector('#list').querySelectorAll('a');
let homePage = document.querySelector('.logo');



// for burger menu ------------>

burger.addEventListener('click',(e) => {
    e.stopPropagation();
    hamDiv.style.display = 'block';
})
image.addEventListener('click',(e) => {
    e.stopPropagation();
    hamDiv.style.display = 'none';
})

// for burger menu ------------>


// for goto shopping page ----->
homePage.style.cursor = 'pointer';
homePage.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'index.html'
});

// for goto shopping page
let bag = document.querySelector('#bag');
bag.addEventListener('click',(e) => {
    window.location.href = 'cart.html'
})
// for goto shopping page