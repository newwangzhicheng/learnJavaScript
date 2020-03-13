const body = document.body;
const block1 = document.getElementById('block1');
const block2 = document.getElementById('block2');
const block3 = document.getElementById('block3');

//先触发DOMNodeRemoved，后触发DOMNodeRemovedFromDocument
block1.addEventListener('DOMNodeRemoved', (event) => {
  console.log('block1 DOMNodeRemoved');
});

block1.addEventListener('DOMSubtreeModified', (event) => {
  console.log('block1 DOMSubtreeModified');
})

block2.addEventListener('DOMNodeRemovedFromDocument', (event) => {
  console.log('block2 DOMNodeRemovedFromDocument');
});

//当然也会触发子节点的DOMNodeRemovedFromDocument，但是不会冒泡
block3.addEventListener('DOMNodeRemovedFromDocument', (event) => {
  console.log('block3 DOMNodeRemovedFromDocument');
})

//最后按顺序从内到外触发DOMSubtreeModified
body.addEventListener('DOMSubtreeModified', (event) => {
  console.log('body DOMSubtreeModified');
})

block1.removeChild(block2);

//注：DOMNodeInserted DOMNodeInsertedFromDocument DOMSubtreeModified触发顺序和上面类似