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
const firstNode = bodyNodeList.firstChild;
const laseNode = bodyNodeList.lastChild;

console.log('firstNode.previousSibling :', firstNode);
console.log('lastNode.nextSibling :', lastNode.nextSibling);