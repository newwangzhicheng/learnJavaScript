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
  event.stopPropagation();
});

inner.addEventListener('mouseout', (event) => {
  console.log('触发了mouseout~~~~');
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