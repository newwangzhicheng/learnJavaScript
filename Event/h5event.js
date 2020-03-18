window.onload = () => {
  const menu = document.getElementById('menu');

  //先把menu的display消失掉
  menu.style.display = 'none';

  //再添加一个鼠标点击让menu消失的方法
  document.addEventListener('click', (event) => {
    menu.style.display = 'none';
  });

  //让菜单的单击事件取消冒泡
  menu.addEventListener('click', (event) => {
    //这一步是干嘛的？
    // event = event || window.event;
    event.cancelBubble = true;
  });

  //为了捕捉到鼠标的显示位置，获得可视区的宽度和高度的函数
  const winWidth = () => {
    return document.documentElement.clientWidth || document.body.clientWidth;
  };
  const winHeight = () => {
    return document.documentElement.clientHeight || document.body.clientHeight;
  };

  //contextmenu右键菜单功能
  document.oncontextmenu = (event) => {
    // event = event || window.event;
    menu.style.display = 'block';

    //获取鼠标坐标
    let l = event.clientX;
    let t = event.clientY;

    //获取menu的布局宽度和高度
    const offsetWidth = menu.offsetWidth;
    const offsetHeight = menu.offsetHeight;

    //根据鼠标位置显示菜单
    if (l >= winWidth() - offsetWidth) {
      l = winWidth() - offsetWidth;
    }
    if (t >= winHeight() - offsetHeight) {
      t = winHeight - offsetHeight;
    }

    //设置menu位置
    menu.style.left = `${l}px`;
    menu.style.top = `${t}px`;

    return false;
  };
}

//pageshow和pagehide
(function () {
  var showContent = 0;

  window.addEventListener('load', () => {
    console.log('load fired');
  });

  window.addEventListener('pageshow', (event) => {
    showContent++;

    //persisted false 页面没有被保存在内存中
    console.log('show fired ' + showContent + ' times! ', event.persisted);
  });
})();

//事件委托利用了事件冒泡的特性，在尽可能高的dom树元素里处理子元素所有事件