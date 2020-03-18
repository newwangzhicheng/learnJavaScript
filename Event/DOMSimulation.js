const btn1 = document.getElementById('btn1');

//模拟点击 触发内置事件
let clickTime = 0;
btn1.addEventListener('click', (e) => {
  clickTime++;
  console.log('clickTime :', clickTime);
});

const btnEvent = new Event('click', {
  cancelable: true,
  bubble: true,
});
for (let i = 0; i < 2; i++) {
  btn1.dispatchEvent(btnEvent);
}

//创建事件
const event = new Event('build');

//默认false，在冒泡阶段执行
document.addEventListener('build', (e) => {
  console.log('fire build');
}, false);

//元素可以侦听尚未创建的事件
const cusEvent = new CustomEvent('clicklocation', {
  detail: {
    date: new Date().getDate()
  },
  bubbles: true,
  cancelable: true,
});

//触发事件
document.addEventListener('click', (e) => {
  if (e.clientX <= 200 && e.clientY <= 200) {
    document.dispatchEvent(event);
  }

  console.log('e.clientX :', e.clientX);
  console.log('e.clientY :', e.clientY);
});

//某些情况下触发事件
document.addEventListener('click', (e) => {
  if (e.clientX <= 100 && e.clientY <= 100) {
    document.dispatchEvent(cusEvent);
  }
});

//添加事件
document.addEventListener('clicklocation', (e) => {
  console.log('e.detail.date', e.detail.date);
});