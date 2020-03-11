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
console.log('typetypeof namedItemDir :',typeof namedItemDir);

//删除属性
h3ele.attributes.removeNamedItem('dir');

//添加属性节点
h3ele.attributes.setNamedItem(namedItemDir);
console.log('nodeMap :', nodeMap);

//返回指定索引的节点
