const inputText = document.getElementById('keyboard');

//keypress只触发字符编码（能编辑或删除的键）
//标准浏览器用which
//charCode keyCode which返回值为keyCode，微软中文返回229
inputText.onkeypress = (event) => {
  // console.log('event.keyCode :', event.keyCode);
  // console.log('event.charCode :', event.charCode);
  // console.log('event.which :', event.which);

  //保证兼容性
  const code = event.keyCode || event.charCode;
  console.log('code :', code);
};

//keydown keyup支持所有所有键码
const keyboard2 = document.getElementById('keyboard2');
keyboard2.onkeydown = (event) => {
  //DOM3 key：文本字符+键名  char：文本字符+null
  //但是chrome不支持char
  console.log('event.key :', event.key);

  //location代表键盘位置
  //0默认键盘 1左侧键 2右侧键 3数字小键盘 4虚拟键盘 5手柄
  console.log('event.location :', event.location);

  //检测修改键是否活跃的方法 Shift Control AltGraph Meta
  console.log('event.getModifierState("Shift") :', event.getModifierState("Shift"));
};

/**
 * keypress textInput区别
 * keypress触发：可获得焦点的元素 textInput触发：可编辑区域
 * keypress触发：输入实际字符的键 textInput触发：影响文本显示的键（如退格）
 * textInput只有表示字符的data，which为0，没有其他的
 * textInput没有on事件，用addEventListener实现
 */
const keyboard3 = document.getElementById('keyboard3');
keyboard3.addEventListener('textInput', (event) => {
  console.log('event.data :', event.data);
  console.log('event.which :', event.which);

  //仅IE支持
  // console.log('event.inputMethod :', event.inputMethod);
});