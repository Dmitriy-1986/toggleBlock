'use strict';

const element = function(el) {
    return document.querySelector(`${el}`);
}

const body      = element('body');
const container = element('main');
const h1        = element('h1');
const h1after   = element('.h1');
const p         = element('p');
const span      = element('span');
const strong    = element('.strong');
const dots      = element('.dots');

const toggleBlock = function() {
    container.classList.toggle('bg-black');
    h1.classList.toggle('h1-yellow');
    h1after.classList.toggle('active');
    p.classList.toggle('p-blueviolet');
    p.classList.toggle('bg-black');
    span.classList.toggle('none');
}

h1.addEventListener('click',   toggleBlock);

dots.addEventListener('click', toggleBlock);
