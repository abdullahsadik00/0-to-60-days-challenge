const x: number = 1;
console.log(x);

function greet(firstname: string) {
  console.log('Hello ' + firstname);
}
greet('sasasd');
function sum(a: number, b: number) {
  return a + b;
}
const value = sum(2, 6);

function isLegal(age: number) {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}

console.log(isLegal(2));

function delayedCall(fn: () => void) {
  setTimeout(fn, 1000);
}

delayedCall(function () {
  console.log('hi there');
});



interface User{
    firstname:string,
    lastname:string,
    age:number
}
function isLegal1(user:User){
    if(user.age>18){
        console.log("Legal")
    }else{
        console.log("ILLegal")
    }

}

interface Person {
  name:string,
  age:number,
  greet(phrase:string):void
}

class Employee implements Person{
  name: string;
  age: number;

  constructor(n:string,a:number){
    this.name= n;
    this.age = a;
  }
  greet(phrase: string): void {
    console.log(`${phrase} ${this.name}`)
  }
}

type User1 = {
	firstName: string;
	lastName: string;
	age: number
}

type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}

printId(101); // ID: 101
printId("202"); // ID: 202

type Employee1 = {
  name: string;
  startDate: Date;
};

type Manager = {
  name: string;
  department: string;
};

type TeamLead = Employee1 & Manager;

const teamLead: TeamLead = {
  name: "harkirat",
  startDate: new Date(),
  department: "Software developer"
};

interface User2 {
	firstName: string;
	lastName: string;
	age: number;
}

function filteredUsers(users: User2[]) {
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
}, ]));