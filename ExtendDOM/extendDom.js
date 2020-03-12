'use strict';
const pElem = document.getElementById('pElem');
const coloredElem = pElem.querySelector('.bcolor');
console.log('coloredElem :', coloredElem);

//只会取第一个元素
const strongOfp = document.querySelector('p strong');
console.log('strongOfp :', strongOfp);

//没有元素为空
const strongOfp2 = document.querySelector('p p');
console.log('strongOfp2 :', strongOfp2);

//返回nodelist
const strongOfp_all = document.querySelectorAll('p strong');
console.log('strongOfp_all :', strongOfp_all);

//matchesSelector方法
//chrome matches webkitMatchesSelector
//firefox mozMatchesSelector
//IE msMatchesSelector
//实现matchesSelector的函数
function matchesSelector (element, selector) {  
  if (element.matchesSelector) {
    return element.matchesSelector(selector);
  } else if (element.matches) {
    return element.matches(selector);
  } else if (element.webkitMatchesSelector) {
    return element.webkitMatchesSelector(selector);
  } else if (element.mozMatchesSelector) {
    return element.mozMatchesSelector(selector);
  } else if (element.msMatchesSelector) {
    return element.msMatchesSelector(selector);
  } else {
    throw new Error("Not Supported.");
  }
}

const matchResult = matchesSelector(pElem, '#pElem');
console.log('matchResult :', matchResult);

//Element Traversal API
const pElemCount = pElem.childElementCount;
console.log('pElemCount :', pElemCount);

const pElemFirstChild = pElem.firstElementChild;
console.log('pElemFirstChild :', pElemFirstChild);

const pElemLastChild = pElem.lastElementChild;
console.log('pElemLastChild :', pElemLastChild);

const pElemPre = pElemLastChild.previousElementSibling;
console.log('pElemPre :', pElemPre);

const pElemNext = pElemFirstChild.nextElementSibling;
console.log('pElemNext :', pElemNext);

//HTML5 getElementsByClassName
const class_bcolor = document.getElementsByClassName('bcolor');
const class_bcolor_strongElem = document.getElementById('strongElem').getElementsByClassName('bcolor');
console.log('class_bcolor :', class_bcolor);
console.log('class_bcolor_strongElem :', class_bcolor_strongElem);

//HTML5 classList
const strongClassList = strongOfp.classList;
console.log('strongClassList.contains("bcolor") :', strongClassList.contains("bcolor"));
strongClassList.add("yback-color");
strongClassList.remove("yback-color");
console.log('strongClassList.toggle("yback-color") :', strongClassList.toggle("yback-color"));

//焦点管理
const uBtn = document.getElementById('uniqueBtn');
uBtn.focus();
console.log('uBtn === document.activeElement :', uBtn === document.activeElement);

//HTML5 HTMLDocument
//readyState loading正在加载 complete加载完成
console.log('document.readyState :', document.readyState);
window.onload = () => {   
  console.log('document.readyState :', document.readyState);
}

//compatMode css1compat标准模式  BackCompat混杂模式
console.log('document.compatMode :', document.compatMode);

//字符集
console.log('document.charset :', document.charset);
console.log('document.charset === document.defaultCharset :', document.charset === document.defaultCharset);

//自定义属性，在dataset属性中
console.log('strongOfp.dataset.appid :', strongOfp.dataset.appid);
strongOfp.dataset.appid = '2';
console.log('strongOfp.dataset.appid :', strongOfp.dataset.appid);
