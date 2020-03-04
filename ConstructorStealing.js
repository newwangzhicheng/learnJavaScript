function SuperType(job){
    this.names = ["wang", "zhi", "cheng"];
    this.job = job;
}
SuperType.prototype.sayNames = function () {  
    return this.names;
}
function SubType(job) {  
    SuperType.call(this, job);
}
SubType.prototype.sayJob = function () {  
    return this.job;
}

var instance1 = new SubType("IT");
var instance2 = new SubType("programmer");
instance1.names.push("shabi");
console.log(instance1.names);
console.log(instance2.names);

console.log(instance1.job);
console.log(instance2.job);

console.log(instance1.sayJob());
// 没有继承原型，所以方法不可用
// console.log(instance2.sayNames()); 

