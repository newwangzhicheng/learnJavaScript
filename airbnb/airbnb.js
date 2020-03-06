const wangzhicheng = "wang zhi cheng";
const atom = {
    value: 12,
    addValue(value) {
        return atom.value + value
    },
    wangzhicheng,
};
console.log(atom.addValue(2));
// 对象属性值简写仅限ES6
// console.log(atom.wangzhicheng);  

const item = [1, 2, 3, 4];
//拓展运算符...，将数组转化为逗号分隔的参数序列
const itemCopy = [...item];
console.log('itemCopy :', itemCopy);

//伪数组对象变数组
const foo = {
    0: "a",
    1: "b",
    2: "c",
    4: "d",
    "length": 5,
};
const fooArr = Array.from(foo);
console.log('fooArr :', fooArr);

//解构
function getFullName({
    firstName,
    lastName
}) {
    return `${firstName} ${lastName}`;
}
const wzc = getFullName({
    firstName: "wang",
    lastName: "zhicheng"
});
console.log('wzc :', wzc);

//回传的对象解构
function everyWhere({
    left,
    right,
    topp
}) {
    left = `left: ${left}`;
    right = `right: ${right}`;
    topp = `topp: ${topp}`;
    return {
        left,
        topp,
        right
    };
}
const {
    left,
    topp
} = everyWhere({
    topp: 15,
    left: 12
});
console.log('left :', left);
console.log('topp :', topp);

//箭头函数表达立即调用函数表达式
(() => {
    console.log("这是一个立即调用函数表达式");
})();

//不要在非函数代码块声明函数
let test;
if (1) {
    test = () => {
        console.log('yep');
    }
}
//rest语法...替代arguments
function notSure(...args) {
    return args.join('');
}
const nums = notSure(1, 2, 3, 4);
console.log('nums :', nums);

//需要时直接指定默认值
function moren(otps = {}) {}

//如何使用链式调用
class Link {
    jump() {
        this.jump = true;
        return this;
    }
    setHeight(height) {
        this.height = height;
        return this;
    }
}
const Luka = new Link();
Luka.jump().setHeight(20);
console.log('Luka.height :', Luka.height);