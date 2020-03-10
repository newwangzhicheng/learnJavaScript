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