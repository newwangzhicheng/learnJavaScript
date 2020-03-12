function returnValue() {
  return "clickByfunc";
}

//DOM0级事件处理程序
const dom0btn = document.getElementById('dom0btn');
dom0btn.onclick = () => {
  console.log('dom0btn.value :', dom0btn.value);
  dom0btn.onclick = null;
}

//DOM2级事件处理程序
//true捕获阶段执行，false冒泡阶段执行
const dom2btn = document.getElementById('dom2btn');

const dom2btnHandler = function() {
  console.log('dom2btn.value :', this.value);
  this.removeEventListener('click', dom2btnHandler)
}

dom2btn.addEventListener('click', dom2btnHandler, false);
console.log('window.dom2btnHandler===dom2btnHandler:', window.dom2btnHandler===dom2btnHandler);

//创建一个跨浏览器的事件处理类
class EventUtil {
  static addHandler(element, type, handler) {
    if (element.addEventListener) {
      element.addEventListener(type, handler);
    } else if (element.attachEvent) {
      element.attachEvent(`on${type}`, handler);
    } else {
      element[`on${type}`] = handler;
    }
  }

  static removeHandler(element, type, handler) {
    if (element.removeEventListener) {
      element.removeEventListener(type, handler);
    } else if (element.detachEvent) {
      element.detachEvent(type, handler);
    } else {
      element[`on${type}`] = null;
    }
  }
}

//只运行一次的事件
const dombtn = document.getElementById('dombtn');
const returnHello = function(event) {
  event.stopPropagation();
  console.log('event.currentTarget :', event.currentTarget);
  console.log('event.target :', event.target);
  console.log('hello');
  EventUtil.removeHandler(this, 'click', returnHello);
}

EventUtil.addHandler(dombtn , 'click', returnHello);

//一个函数处理多个事件
const changeColor = (event) => {
  event.stopPropagation();
  switch(event.type) {
    case 'mousedown':
      event.target.style.backgroundColor = 'green';
      break;
    case 'mouseover':
      event.target.style.backgroundColor = 'gray';
      break;
    case 'mouseup':
      event.target.style.backgroundColor = '';
      break;
    case 'mouseout':
      event.target.style.backgroundColor = '';
      break;
  }

}

document.body.onclick = (event) => {
  console.log('body click');

};

EventUtil.addHandler(dombtn, 'mousedown', changeColor);
EventUtil.addHandler(dombtn, 'mouseover', changeColor);
EventUtil.addHandler(dombtn, 'mouseup', changeColor);
EventUtil.addHandler(dombtn, 'mouseout', changeColor);

//eventPhase 1 捕获阶段
//eventPhase 2 处于目标阶段
//eventPhase 3 冒泡阶段
dombtn.addEventListener('click', (event) => {
  //结果为2
  console.log('event.eventPhase :', event.eventPhase);
});

document.body.addEventListener('click', (event) => {
  //结果为1 因为首先从window捕获
  console.log('event.eventPhase :', event.eventPhase);
}, true);

document.body.addEventListener('click', (event) => {
  //结果为3 因为最后冒泡到window
  console.log('event.eventPhase :', event.eventPhase);
}, false);