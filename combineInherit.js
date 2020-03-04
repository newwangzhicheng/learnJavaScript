function SuperType(name) {  
    this.name = name;
    this.color = ["wang", "zhi", "cheng"];
}
SuperType.prototype.sayName = function(){
    return this.name;
}

function SubType(name, age) {  
    //属性继承
    SuperType.call(this, name);

    this.age = age;
}

//方法继承
SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;

SubType.prototype.sayAge = function () {  
    return this.age;
}

var instance1 = new SubType("wzc", 19);
console.log(instance1.sayAge());

var instance2 = new SubType("zhl", 32);
instance2.color.push("shabi");
console.log(instance1.color);
console.log(instance2.color);

//原型式继承:把一个引用类型的实例作为原型对象创建新的对象，属性和原型链继承类似
function Person(){
    this.name = "wang";
    this.friends = ["1", "2", "3"];
}
var p1 = new Person();
p1.age = 12;
var chinese = Object.create(p1, {
    age: {
        value: 9,
        writable: true
    }
});
chinese.age = 3;
console.log(chinese.age);

//寄生式继承：在原型式继承的基础上增强对象
function createAnother(o){
    var clone = Object.create(o);
    clone.print1 = function () {  
        return 1;
    };
    return clone;
}

var jiang = {
    name: "zm",
    age: 94
};
var su = createAnother(jiang);
console.log(su.print1());