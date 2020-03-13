/**
 * mouseleave和mouseout的区别
 * mouseleave在光标移动到后代元素不会触发 mouseout会触发
 * mouseout绑定在父元素，子元素也会触发事件（被捕获？）
 * mouseleave mouseout都不会冒泡
 */
const outer = document.getElementById('outer');
const inner = document.getElementById('inner');
outer.addEventListener('mouseleave', () => {
  console.log('触发了mouseleave');
});

//子元素也会触发该事件
outer.addEventListener('mouseout', (event) => {
  console.log('触发了mouseout');
  if (event.target === outer) {
    console.log('event.relatedTarget :', event.relatedTarget);
  }
});

inner.addEventListener('mouseout', (event) => {
  console.log('触发了mouseout~~inner');

  //相关元素是什么?
  //对于mouseout是指针进入的节点
  console.log('event.relatedTarget :', event.relatedTarget);
});

outer.onclick = (event) => {
  //只能阻止事件冒泡，不能阻止其向子元素扩散
  event.stopPropagation();

  //成功阻止不让子元素触发语句
  if (event.target === outer) {
    console.log('step3 click');
  }
}

outer.onmousedown = (event) => {
  console.log('step1 mousedown');
  event.stopPropagation();
}

outer.onmouseover = (event) => {
  if (event.target === outer) {
    console.log('触发了mouseover');

    //对于mouseover relatedTarget是离开的那个元素
    console.log('outer mouseover event.relatedTarget :', event.relatedTarget);
  }
}

outer.onmouseup = (event) => {
  console.log('step2 mouseup');
  event.stopPropagation();
  console.log('event.clientX :', event.clientX);
  console.log('event.clientY :', event.clientY);

  //没有滚动的时候两者是相同的，page代表到页面顶部和左侧的距离
  console.log('event.pageX :', event.pageX);
  console.log('event.pageY :', event.pageY);

  console.log('event.screenX :', event.screenX);
  console.log('event.screenY :', event.screenY);
}

//修改键 shiftKey ctrlKey metaKey altKey
const forKey = document.getElementById('forKey');
forKey.onclick = (event) => {
  const keysArr = [];
  if (event.shiftKey) {
    keysArr.push('shift');
  }

  if (event.ctrlKey) {
    keysArr.push('ctrl');
  }

  if(event.metaKey) {
    keysArr.push('meta');
  }

  if (event.altKey) {
    keysArr.push('alt');
  }

  const keys = keysArr.join(',');
  console.log(`this click contains ${keys}`);

  //detail记录给定位置发生了多少次连击
  //下一次点击会重置
  console.log('event.detail :', event.detail);
};

forKey.onmousedown = (event) => {
  //检测点下的鼠标类型，0左键 1滚轮键 2右键
  //对于有特殊按钮的鼠标，event.button可能会有3，4等值
  console.log('event.button :', event.button);

}

//鼠标滚轮事件
document.body.onmousewheel = (event) => {
  //向上是+120 向下是-120
  //firefox类似的事件叫DOMMouseWheel会有一个detail属性，向上-3 向下+3
  console.log('event.wheelDelta :', event.wheelDelta);

}