// function

// 1. Declaration Function
sum(10, 20)
function sum(n1, n2) {
    console.log(n1 + n2);
}
// 2. Expression Function
// const times = function (n1, n2) {
//     console.log(n1 * n2);
// }
const times = (n1, n2) => console.log(n1 * n2);
// times(10, 20)

// const power = function(number) {
//     return number**2;
// }
// const power = (number) => number**2;
// const power = number => number**2; //Lambda expression

// console.log(power(10));

// const sayHello = function() {
//     console.log('Hello World')
// }
const sayHello = () => console.log('Hello World');

sayHello();

// 3. Anonymous/Callback Function

let numbers = [1, 3, 4, 5, 5];

// let filter = numbers.filter(function(n){
//     if(n % 2 != 0){
//         return n
//     }
// })
let filter = numbers.filter((n) => n % 2)

console.log(filter);
// const process = function(n){
//     return n * 2;
// }
// let result = numbers.map(function(n){
//     return n * 2;
// })
let result = numbers.map((n) => n * 2)
console.log(result);
// console.log(process(5));
// 4. Define Class
function Student(name, age) {
    this.name = name;
    this.age = age;
    // 5. Define Method
    this.greeting = function () {
        console.log(`My name is ${this.name}`);
    }
}

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        console.log(`My name is ${this.name}`);
    }
}