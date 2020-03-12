'use strict';
const pElem = document.getElementById('pElem');
const coloredElem = pElem.querySelector('.bcolor');
console.log('coloredElem :', coloredElem);

const strongOfp = document.querySelector('p strong');
console.log('strongOfp :', strongOfp);

//返回nodelist
const strongOfp_all = document.querySelectorAll('p strong');
console.log('strongOfp_all :', strongOfp_all);

//innerHTML 设置或获取位于对象起始和结束标签内的HTML
//大多数浏览器不支持script标签
//IE8之前需要指定script为defer并在前面添加“有作用域的标签”,可以是文本或无结束符的元素
//IE8的window.toStaticHTML(String)输出无害版HTML字符串
const IEdiv = document.createElement('div');
const htmlString = '<input type="hidden"><script defer>alert("hi");<\/script>';

// IEdiv.innerHTML = window.toStaticHTML(htmlString);
IEdiv.innerHTML = htmlString;

//outerHTML 置或获取对象及其内容的HTML形式
const outerHTMLString = IEdiv.outerHTML;
console.log('outerHTMLString :', outerHTMLString);

//beforbegin 在当前元素之前插入紧邻的同辈元素
//afterbegin 插入位置为firstChild的子元素
//beforend 插入位置为lastChild的子元素
//afterend 在当前元素之后插入紧邻的同辈元素
//insertAdjacentElement同理，接收一个element插入
const insertHTML = '<p>这是插入的HTML字符串</p>'
pElem.insertAdjacentHTML('beforeBegin', insertHTML);
pElem.insertAdjacentHTML('afterBegin', insertHTML);
pElem.insertAdjacentHTML('beforeEnd', insertHTML);
pElem.insertAdjacentHTML('afterEnd', insertHTML);

//滚动页面,让当前元素滚动到浏览器可视区域
function viewP () {
  const viewableElem = document.getElementById('viewable');

  //element.scrollIntoView() == element.scrollIntoView(true)
  // viewableElem.scrollIntoView(true);

  /**
   * behavior定义过渡动画 auto smooth
   * block定义垂直方向的对齐 start center end nearest
   * inline 定义水平方向的对齐 nearest start center end
   */
  viewableElem.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'center'
  });
}
