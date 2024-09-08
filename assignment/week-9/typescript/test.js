"use strict";
const x = 1;
console.log(x);
function greet(firstname) {
    console.log('Hello ' + firstname);
}
greet('sasasd');
function sum(a, b) {
    return a + b;
}
const value = sum(2, 6);
function isLegal(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegal(2));
function delayedCall(fn) {
    setTimeout(fn, 1000);
}
delayedCall(function () {
    console.log('hi there');
});
