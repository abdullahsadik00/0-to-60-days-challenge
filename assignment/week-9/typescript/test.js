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
function isLegal1(user) {
    if (user.age > 18) {
        console.log("Legal");
    }
    else {
        console.log("ILLegal");
    }
}
class Employee {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
function printId(id) {
    console.log(`ID: ${id}`);
}
printId(101); // ID: 101
printId("202"); // ID: 202
const teamLead = {
    name: "harkirat",
    startDate: new Date(),
    department: "Software developer"
};
