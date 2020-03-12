const inputBtn = document.getElementById('inputBtn');

//foucs不冒泡 focusin冒泡
inputBtn.addEventListener('focus', () => {
  console.log('button focus');
});

//blur不冒泡 focusout冒泡
inputBtn.addEventListener('blur', () => {
  console.log('button blur');
});