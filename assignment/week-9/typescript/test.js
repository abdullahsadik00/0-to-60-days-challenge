"use strict";
// const app = express()
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
function filteredUsers(users) {
    return users.filter(x => x.age >= 18);
}
console.log(filteredUsers([{
        firstName: "harkirat",
        lastName: "Singh",
        age: 21
    }, {
        firstName: "Raman",
        lastName: "Singh",
        age: 16
    },]));
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "Down";
    Direction["Left"] = "Left";
    Direction["Right"] = "Right";
})(Direction || (Direction = {}));
function doSomething(keyPressed) {
    // do something.
}
doSomething(Direction.Down);
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus[ResponseStatus["Success"] = 200] = "Success";
    ResponseStatus[ResponseStatus["NotFound"] = 404] = "NotFound";
    ResponseStatus[ResponseStatus["Error"] = 500] = "Error";
})(ResponseStatus || (ResponseStatus = {}));
// app.get("/", (req, res) => {
//   if (!req.query.userId) {
//     res.status(ResponseStatus.Error).json({})
//   }
//   // and so on...
//   res.status(ResponseStatus.Success).json({});
// })
