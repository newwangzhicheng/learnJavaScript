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
window.moveTo(10, 10);
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

//打开新的窗口
//第二个参数指示窗口在哪里加载或窗口名字
//第三个会打开为弹窗
const wroxWin = window.open("./bomframe1.html", "_blank", "height = 400, width = 300, top = 20, left = 20, resizable = yes");

//弹窗的屏蔽
if (wroxWin === null) {
	console.log('baiduWin is blocked');
}

//弹窗的resize和move生效
wroxWin.resizeTo(100, 100);
wroxWin.resizeBy(300, 100);

wroxWin.moveTo(200, 200);
wroxWin.moveBy(-200, 200);

//关闭新窗口
// wroxWin.close();

//新创建的窗口的opener指向原始窗口的window
console.log('wroxWin.opener === window :', wroxWin.opener === window);

//切断与原窗口的通信
wroxWin.opener = null;

//检测弹窗是否被屏蔽
let blocked = false;

try {
	const baiduWin = window.open('https://www.baidu.com', '_blank');
	if (baiduWin === null) {
		blocked = true;
	} else {
		//window.location or document.location
		console.log('baiduWin.location.pathname :', baiduWin.location.pathname);
		console.log('baiduWin.location.host :', baiduWin.location.host);
	}
} catch (ex) {
	//抛出错误说明弹窗被屏蔽了
	blocked = true;
}

if (blocked) {
	console.log("baiduWin is blocked");
}

//超时调用setTimeout与取消clearTimeout
const timeoutId1 = setTimeout(() => {
	alert('这是200ms的超时调用');

	//非严格模式this指向window，严格模式this为undefined
	console.log('this :', this);
});
clearTimeout(timeoutId1);

//间歇调用setInterval与取消clearInterval
let num = 0;
const max = 2;

const timeoutId2 = setInterval(() => {
	if (num >= max) {
		clearInterval(timeoutId2);
	} else {
		num++;
		console.log('num :', num);
	}
}, 50);

//超时调用模拟间歇调用,因为没必要追踪调用id，所以是最佳实践？
let num2 = -1;
const max2 = 2;
const timeout = 100;

function increaseNum() {
	if (num2 < max2) {
		num2++;
		console.log('num2 :', num2);
		setTimeout(increaseNum, timeout);
	}
}

setTimeout(increaseNum, timeout);

//打印对话框
// window.print();

//非标准规范，目前无效
// window.find();

//alert，confirm，prompt的用法
alert('this is alert');

if (confirm('点击确认打印"OK"，取消打印"Cancel"!')) {
	console.log('OJBK');
} else {
	console.log('Cancel');
}

//取消返回nul，其他情况返回字符串
const promptResult = prompt('What is you name?', 'wzc');

if (promptResult === null) {
	console.log('prompt is closed or canceled');
} else {
	console.log(promptResult);
}

//location
console.log('document.location.hash :', document.location.hash);
console.log('document.location.pathname :', document.location.pathname);
console.log('document.location.host :', document.location.host);
console.log('document.location.port :', document.location.port);
console.log('document.location.hostname :', document.location.hostname);
console.log('document.location.protocol :', document.location.protocol);
console.log('document.location.search :', document.location.search);


/**
 * 获取url的查询参数
 *
 * @param {string} [qs='']
 * @returns {object}
 */
function getSearchObject(qs = '') {
	//取得每一项
	const items = qs.length ? qs.split('&') : [];

	//保存数据的对象
	let args = {};

	items.forEach((item) => {
		item = item.split('=');
		const name = decodeURIComponent(item[0]);
		const value = decodeURIComponent(item[1]);

		if (name.length) {
			args[name] = value;
		}
	});

	return args;
}

//假设qs是location.search去掉？的结果
// const qs = (location.search.length > 0 ? location.search.substring(1) : '');
const qs = 'service=WMS&version=1.1.0&request=' +
	'&layers=wzc_test%3AMeter3&bbox=-40.2924346923828%2C-20.2390899658203%2C-40.2782821655273%2C-20.2259922027588' +
	'&width=768&height=710&srs=EPSG%3A4326&format=application/openlayers';
const qsResult = getSearchObject(qs);
console.log('qsResult :', qsResult);

//页面回跳转到指定的url,这三种方法都可以跳转,理论可以回退到上一个界面
// document.location.assign('https://www.baidu.com');
// document.location = 'https://www.zhihu.com';
// document.location.href = 'https://www.github.com';

//replace是替代当前页面，无后退
// document,location.replace('http://192.168.15.32:8080/hgisserver');

//reload 刷新页面  
//无参/false 没有改变从缓存加载
//true 从服务器重新下载文档
//千万别试。。。
// document.location.reload(true);

//navigator 检测插件的参数
console.log('window.navigator.plugins :', window.navigator.plugins);

//history实现页面前进或后退
// history.go(-1);
// history.go(1);
// history.go('bom');
// history,back();
// history.forward();
console.log('history.length :', history.length);

