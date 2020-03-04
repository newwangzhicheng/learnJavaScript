function autoPlus(num) {
    if (num > 0){
        return num + arguments.callee(num - 1);
    } else {
        return 0;
    }
}

var number = autoPlus(3);
console.log(number);