'use strict';
//Node类型
//结果是1（ELEMENT_NODE）
console.log('document.body.nodeType :', document.body.nodeType);

//结果是BODY
console.log('document.body.nodeName :', document.body.nodeName);

const body = document.body;
const bodyNodeList = body.childNodes;
console.log('bodyNodeList :', bodyNodeList);
console.log('bodyNodeList[0] :', bodyNodeList[0]);

//item是NodeList的方法
console.log('bodyNodeList.item(1) :', bodyNodeList.item(1));

//访问NodeList那一刻的node数量
console.log('bodyNodeList.length:', bodyNodeList.length);

//Array.from和Array.prototype.slice.call都可以将类数组对象转化为数组
console.log('Array.from(bodyNodeList) :', Array.from(bodyNodeList));
console.log('Array.prototype.slice.call(bodyNodeList, 0) :', Array.prototype.slice.call(bodyNodeList, 0));

//第一个node的previousSibling为null，最后一个node的nextSibling为null
//第一个节点firstChild，最后一个节点lastChild
// const firstNode = bodyNodeList[0];
// const lastNode = bodyNodeList[bodyNodeList.length - 1];
const firstNode = body.firstChild;
const lastNode = body.lastChild;

console.log('firstNode.previousSibling :', firstNode.previousSibling);
console.log('lastNode.nextSibling :', lastNode.nextSibling);
console.log('firstNode.parentNode :', firstNode.parentNode);

//插入成为最后一个节点
const newNode = document.createElement('p');
const returnedNode = body.insertBefore(newNode, null);
console.log('newNode === body.lastChild :', newNode === body.lastChild);

//插入到某个结点前面
const newNode2 = document.createElement('h2');
const returnedNode2 = body.insertBefore(newNode2, body.firstChild);
console.log('newNode2 === body.firstChild :', newNode2 === body.firstChild);

//用newNode2替换掉newNode
const returnedNode3 = body.replaceChild(newNode2, newNode);
console.log('body :', body);

//true深复制所有节点，false浅复制节点本身
const newNode3 = newNode2.cloneNode(false);
body.appendChild(newNode3);

//获取html元素
const html = document.documentElement;
const html2 = document.firstChild;
const html3 = document.childNodes[0];
console.log('html  :', html);
console.log('html2  :', html2);
console.log('html3  :', html3);

//有关文档的信息
//文档类型，和document.firstChild输出一致
const doctype = document.doctype;
console.log('html2 === doctype :', html2 === doctype);

const docTitle = document.title;
document.title = 'New Page';
const url = document.title;

//域，即主机名
const domain = document.domain;

//来源页面的url，即上一级的url
const referrer = document.referrer;
console.log('docTitle :', docTitle);
console.log('domain :', domain);
console.log('referrer :', referrer);

//getElementByTagName 返回的结果类似NodeList,是HTMLCollection的对像
const tagList = document.getElementsByTagName('h2');
const allTagList = document.getElementsByTagName('*');
console.log('tagList.item(0) :', tagList.item(0));
console.log('allTagList :', allTagList);

//HTMLCollectiond的namedItem方法，返回name属性的node
console.log('tagList.namedItem("wzc") :', tagList.namedItem("wzc"));
console.log('tagList["wzc"] :', tagList["wzc"]);

//返回HTMLCollectiond类型
const nameList = document.getElementsByName('wzc');
console.log('nameList :', nameList);

//所有带name的a元素
const aList = document.anchors;
console.log('aList :', aList);

//所有带href的a元素
const aHrefList = document.links;
console.log('aHrefList :', aHrefList);

//所有form元素
const formList = document.forms;
console.log('formList :', formList);

//所有img元素
const imageList = document.images;
console.log('imageList :', imageList);

const hasXmlDom = document.implementation.hasFeature('XML', '1.0');
const hasCore3 = document.implementation.hasFeature('Core', '3.0')
console.log('hasXmlDom :', hasXmlDom);
console.log('hasCore3 :', hasCore3);

//输出流写入到网页
document.write('<p>this is writtened by docuemnt.wirte<\/p>');

//html中node的tagName和nodeName大写， xml和源码一致
console.log('body.tagName :', body.tagName);
console.log('body.nodeName :', body.nodeName);

//有关特性的方法
const h3ele = document.getElementById('h3ele');
console.log('h3ele.getAttribute("lang") :', h3ele.getAttribute("lang"));

//添加特性
h3ele.setAttribute('name', 'h3ele');
console.log('h3ele.getAttribute("name") :', h3ele.getAttribute("name"));

//删除特性
h3ele.removeAttribute('name');
console.log('h3ele.getAttribute("name") :', h3ele.getAttribute("name"));

//自定义特性,不区分大小写
h3ele.setAttribute('data-mYDAta', '12.12');
console.log('h3ele.getAttribute("data-mydata") :', h3ele.getAttribute("data-mydata"));

//node的属性和getAttribute不同：style， onclick
//返回对象
console.log('h3ele.style :', h3ele.style);

//返回html中tyle特性值
console.log('h3ele.getAttribute("style") :', h3ele.getAttribute("style"));

//attributes返回NamedNodeMap，类似HTMLCollection
const nodeMap = h3ele.attributes;
console.log('nodeMap :', nodeMap);

//attributes的一些方法
//返回属性及值
const namedItemDir = h3ele.attributes.getNamedItem('dir');
console.log('namedItemDir :', namedItemDir);
console.log('typetypeof namedItemDir :', typeof namedItemDir);

//删除属性
h3ele.attributes.removeNamedItem('dir');

//添加属性节点
h3ele.attributes.setNamedItem(namedItemDir);
console.log('nodeMap :', nodeMap);

//返回指定索引的节点
const attr0 = h3ele.attributes.item(0);
console.log('attr0 :', attr0);

//指定值specified为true，否则为false
console.log('h3ele.attributes[0].specified :', h3ele.attributes[0].specified);

//有空格符和没空格符的区别
//换行符会被认为是text，处理时可以用nodeType识别
const list1 = document.getElementById('list1');
const list2 = document.getElementById('list2');
console.log('list1.childNodes :', list1.childNodes);
console.log('list2.childNodes :', list2.childNodes);

//下面两个node.childNodes不同
list1.childNodes.forEach(node => {
  //element类型的nodeValue为null,nodeName为标签名
  if (node.nodeType === 1) console.log('list1: ', node.nodeName);

  if (node.nodeType === 3) console.log('list1: ', node.nodeValue);

  if (node.nodeType === 8) console.log('list1: ', node.nodeValue);
});

list2.childNodes.forEach(node => {
  if (node.nodeType === 1) console.log('list2: ', node.nodeName);

  if (node.nodeType === 3) console.log('list2: ', node.nodeValue);
});

//text类型相关的方法
// h3ele.removeAttribute('dir');
const h3Text = h3ele.childNodes[0];
h3Text.appendData('?');

/**
 * 一个有趣的现象
 * deleteData的方向时从左到右计数的
 * 但是appendData添加的 ? 是第五个元素
 * 由于dir方向的原因，? 显示在最左侧
 * 所以字符的下缀为 [4,0,1,2,3]
*/
h3Text.deleteData(4, 1);

/**
 * dir rtl时插入的方式很诡异
 * 插0 从右向左计数
 * 插1 从左向右计数
 * 可以插在length的位置，在最左侧
 */
h3Text.insertData(3, '!');

/**
 * 此时可以发现它是从左向右计数
*/
h3Text.replaceData(4, 1, '0');


//创建文本节点
const textNode1 = document.createTextNode("hello");
const textNode2 = document.createTextNode("world");
list1.appendChild(textNode1);
list1.appendChild(textNode2);
console.log('list1 :', list1);

//合并两个textNode
list1.normalize();

//分割两个textNode
list1.lastChild.splitText(10);

//comment和text有同一个基类，方法相似，除了没有splitText

//CDATASection和text有同一个基类，方法相似，除了没有splitText
//CDATA只在xml中，html会误判为comment

//DocumentType chrome不支持

//DocumentFragment "轻量级"文档 可以保存一个html片段
const fragment = document.createDocumentFragment();
const ul = document.getElementById('list1');

for (let i = 0; i < 2; i++) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(`item ${i + 1}`));
  fragment.appendChild(li);
}

ul.appendChild(fragment);

//Attr类型,其对象有name,value,specified属性
//specified指定true，默认false
console.log('h3ele.attributes.item(1).nodeType :', h3ele.attributes.item(1).nodeType);

//动态插入脚本的方法
function loadScript(url) {
  const script = document.createElement('script');

  //这些算自定义属性吗，这样设置有用的呀
  script.type = 'text/javascript';
  script.src = url;

  document.body.appendChild(script);
}

loadScript('./alertHello.js');

//动态插入脚本方法，eval实现方法
//针对IE7优化，IE7不支持
function myEval (code) {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  try {
    script.appendChild(document.createTextNode(code));
  } catch (ex) {
    script.text = code;
  }
  document.body.appendChild(script);
}

myEval("console.log('this is my eval');");
eval("console.log('this is official eval');");

//动态加载外部样式
function  loadStyle (url) {
  const link = document.createElement('link');

  //可以了 哈
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = url;

  const head = document.head;
  head.appendChild(link);
}

loadStyle('./index.css')

//动态执行某种样式
function myLoadStyle (css) {
  const style = document.createElement('style');
  style.type = "text/css";

  try{
    style.appendChild(document.createTextNode(css));
  } catch (ex){
    style.styleSheet.cssText = css;
  }

  const head = document.head;
  head.appendChild(style);
}

myLoadStyle('body{background-color:yellow;}');

//利用table的方法创建一个table
const table = document.createElement('table');
table.border = 1;
table.width = '100%';

const tbody = document.createElement('tbody');
table.appendChild(tbody);

//插入并创建第一行
tbody.insertRow(0);
tbody.rows[0].insertCell(0);
tbody.rows[0].cells[0].appendChild(document.createTextNode('cell 1,1'));
tbody.rows[0].insertCell(1);
tbody.rows[0].cells[1].appendChild(document.createTextNode('cell 2,1'));

//第二行一样  不高兴写了
document.body.appendChild(table);

