// // old way
// var life = 100; // this is the life bar NUMBER

// life = 50; // declare a new value

// life = life - 10; // another new value but with math :o

// var name = "make sure it is in quotes"; // name displayed in game (String)

// var checkout = false; //Boolean
// var box; // undefined (no value in variable)
// var box = null; // has a value of nothing

// // new way
// const life = 100;
// life = 50; // this doesn't work it: wont change unlike var
// // once const is declared you cant change it
// const life = 100; // cannot redeclare like this

// let life = 100; // if you want to change variable use let
// life = life - 50;

// console.log("life");

// hw number 2
//video 1
// const myAge = 24;

// const yourAge = 21;

// console.log(myAge + yourAge);

// console.log("Hello my name is " + "Vicky"); //be careful of spaces

// console.log("Hello it's me Vicky"); //have to use quoble quotes when theres an ' in the text

// const name = "Vicky";
// const age = 17;
// console.log(`hello it's me and my name is ${name}`);
// console.log("hello it's me " + name + " and my age is " + age + " and I am getting old");
// console.log(`hello it's me ${name} and my age is ${age}`);

// const combined = name + age;
// console.log(combined);
// console.log(typeof combined); // this would show what type of code it is: this is a string

// video 2
// const name = 'Vicky';

// function logger() {
//     console.log("Party time");
//     console.log("Party time");
//     console.log("Party time");
//     console.log("Party time");
// }

// logger(); // will show party time

// function logger() {
//     const name = 'Vicky';
//     console.log("Party time");
//     console.log("Party time");
//     console.log("Party time");
//     console.log("Party time");
// }// name is only avaiable inside the logger function and you cannot console.log(name); outside of it

// //function vs global scope --> everything inside of function can be taken from global but global cant be taken from function

// function adder(num1, num2) {
//     console.log(num1+ num2);
// }

// adder(5,10);

// function toUpper(text) {
//     const upperCased = text.toUpperCase();
//     console.log(upperCased);
// }

// toUpper(name);

// const toUpper = function(){
//     adfbad
// }

// const toUpper = () =>{
//     adfbad
// }

//video 3
// const num1 = 100;
// const num2 = 50;
// let val;

// //simple math with numbers
// val = num1 + num2;
// val = num1 * num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;

// // math object
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.8);
// val = Math.ceil(2.4); // round up (3)
// val = Math.floor(2.4); // round down (2)
// val = Math.sqrt(64);
// val = Math.abs(-3);
// val = Math.pow(8, 2); //8^2
// val = Math.min(2,5,6,33,-5,56,23,45); //only show min
// val = Math.max(2,5,67,88,-2,3); //only show max
// val = Math.random(); // gives us a random decimal

// val = Math.floor(Math.random() * 20 + 1); // random deicmal from 0-19

// console.log(val);

//video 4
// function calculateBill(billAmount, taxRate) {
//   //paramaters or placeholders
//   console.log("Running Calculate Bill");
//   const total = billAmount * (1 + taxRate);
//   return total;
// }

// const myTotal = calculateBill(100, 0.13); //arguments
// console.log(myTotal);

// const hisTotal = 500;
// const herTotal = 0.3;
// const myTotal = calculateBill(hisTotal, herTotal);

// function sayHiTo(firstName) {
//   return `Hello ${firstName}`;
// }

// const greeting = sayHiTo("Vicky");
// console.log(greeting);

// const myTotal3 = calculateBill(100, 0.15);
// const myTotal4 = calculateBill(20 + 20 + 30 + 20, 0.15);

// const kait: 100;
// const myTotal5 = calculateBill(kait + 50m 0.15);

// function doctorize(name) {
//   return `Dr. ${name}`;
// }

// function yell(name = 'Silly Goose') {
//   return `HEY ${name.toUpperCase()}`;
// }
// // name can be resued because its a parameter
// // set a default to name (silly goose)

// doctorize()
// yell()
// yell(doctorize('vicky'))

// function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
//     //paramaters or placeholders
//     console.log("Running Calculate Bill");
//     const total = billAmount + billAmount * taxRate + billAmount * tipRate;
//     return total;
// }
// // only falls to default when its not defined

// const Bill6 = calculateBill(100, undefined, 0.2);
// console.log(myBill6);
