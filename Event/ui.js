window.addEventListener('load', () => {
  console.log('window loaded');
})

const kimImg = document.getElementById('kimImg');
console.log('kimImg :', kimImg);

//加载太快 没来得及绑定
//放在html onload中姐可以了
kimImg.addEventListener('load', () => {
  console.log('kimImg loaded');
});

window.addEventListener('unload', () => {
  console.log('window unloaded');
});

//浏览器窗口被调整时，包括最大化 最小化
window.onresize = () => {
  console.log('window resized');
}

//页面滚动时触发
window.onscroll = () => {
  if (document.compatMode === 'CSS1Compat') {
    console.log('document.documentElement.scrollTop :', document.documentElement.scrollTop);
  } else {
    //兼容safari3.1之前的版本
    console.log('document.body.scrollTop :', document.body.scrollTop);
  }
}