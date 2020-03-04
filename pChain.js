function SuperType(){
    this.name = ["wang", "zhi", "cheng"];
}
function subType(){

}
//继承
subType.prototype = new SuperType();

var instance1 = new subType();
instance1.name.push("shabi");
console.log(instance1.name);

var instance2 = new subType();
console.log(instance2.name);

