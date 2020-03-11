'use strict';
const pElem = document.getElementById('pElem');
const coloredElem = pElem.querySelector('.bcolor');
console.log('coloredElem :', coloredElem);

const strongOfp = document.querySelector('p strong');
console.log('strongOfp :', strongOfp);

//返回nodelist
const strongOfp_all = document.querySelectorAll('p strong');
console.log('strongOfp_all :', strongOfp_all);
