function creat() {  
    var result = new Array();
    for(var i = 0; i < 10; i++){
        result[i] = function () {  
            return i;
        }
    }
    return result;
}
var arr = creat();
console.log(arr[0]());
console.log(arr[1]());
console.log(arr[2]());


//立即执行函数
function create2() {  
    var result = new Array();
    for(var i = 0; i < 10; i++){
        result[i] = function (num) {  
            return function(){
                return num;
            };
        }(i);
    }
    return result;
}
var art = create2();
console.log(art[0]());
console.log(art[1]());
console.log(art[2]());

//闭包中的this
var name = "window";
var o = {
    name: "object",
    getName: function () {  
        var that = this;
        return function(){
            return that.name;
        };
    }
};
console.log(o.getName()());

var js = "windows";
var obj = {
    js: "objects",
    that: this,
    getName: function () {  
        return this.js;
    }
};
console.log(obj.getName());
console.log(obj.that);

//闭包模仿块级作用域
(function () {  
    for(var k in 3){
        console.log(i);
    }
})();

//构造函数 私有变量
function pmObj() {  
    //私有变量及方法
    var privateV = 90;
    function privateF() {  
        return false;
    }
    //特权方法
    this.publicM = function () {  
        privateV++;
        return privateV;
    }
}
console.log(new pmObj().publicM());

//静态私有变量,MyObject作为全局变量可以访问,原型模式，私有变量共享。
//每个实例都没有自己的私有变量
(function () {  
    var privateV = 10;
    function privateF() {
        return false;
    }
    //构造一个函数
    MyObject = function () {  };
    //公有方法
    MyObject.prototype.publicM = function () {  
        return privateV;
    }
})();
var myObject = new MyObject();
console.log(myObject.publicM()); 

//模块模式
var singleton = function () {  
    //私有变量和私有方法
    var privateV = 11;
    function poivateF() {  
        return false;
    }

    //公有方法
    return {
        publicP: true,
        publicM: function () {  
            return privateV;
        }
    }
}
console.log(singleton().publicM());

//增强模块模式。匿名对象变为自定义对象
function CustomObj () {  };
var strongSingleton = function () {  
    //私有变量和私有方法
    var privateV = 12;
    function poivateF() {  
        return false;
    }
    //通过特定对象对象创建公有方法和属性
    var object = new CustomObj();
    object.publicP = true;
    object.publicM = function () {  
        return privateV;
    };
    return object;
}
console.log(strongSingleton().publicM());
