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