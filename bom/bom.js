//全局变量不可被删除，[[configurable]]为false
var age = 12;
window.name = "wang";
console.log(delete age);
console.log(delete name);

// var newValue = oldValue; 报错，访问未定义的变量

//属性查询为undefined
var newValue = window.oldValue;
console.log(newValue);

//窗口相关的对象
console.log(self);
console.log(top);
console.log(parent);

//firefox支持screenX,screenY; 其他支持screenLeft,screenRight
var leftPos = (typeof window.screenLeft == "number") ?
                window.screenLeft : window.screenX;
var topPos = (typeof window.screenTop == "number") ? 
                window.screenTop : window.screenY;
console.log('leftPos :', leftPos);
console.log('topPos :', topPos);
//移动窗口,IE的方法，其他浏览器不支持
window.moveTo(10,10);
window.moveBy(0, 200);


//窗口大小, chrome中不同  与书中不同
//页面视图大小
console.log('window.innerWidth :', window.innerWidth);
console.log('window.innerHeight :', window.innerHeight);
//浏览器本身大小
console.log('window.outerWidth :', window.outerWidth);
console.log('window.outerHeight :', window.outerHeight);
//页面视图大小
console.log('document.documentElement.clientWidth :', document.documentElement.clientWidth);
console.log('document.documentElement.clientHeight :', document.documentElement.clientHeight);

//调整窗口大小.chrome，firefox被禁用
window.resizeTo(200, 300);
window.resizeBy(200, 300);

//打开新的窗口,第二个参数不会用，第三个会打开为弹窗
window.open("./bomframe1.html", "bomframe2", "haha");