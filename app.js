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

// homework 3
// if else statement

// const age = 20;
// if (age > 18) {
//   console.log("you are good to go");
// } else if (age < 15) {
//   console.log("you are really young");
// } else if (age === 15) {
//   console.log("you are good to go");
// } else {
//   console.log("you are not old enough");
// }
// // can also use >= or <=
// // if (dice 1 === 6 && dice 2 === 6);
// // || --> check one value and run the console log but the & checks both

//objects and keyword this

// const user = {
//     name: 'Edwin',
//     age: 24,
//     married: false,
//     purchase: [" phone", "car", "laptop"]

//     sayName: function(){
//         console.log(this.name);
//     }
// };
// user.sayName();

// console.log(user.purchases);

// console.log(this);
// //--> this makes a window object

//switches

// const color = "red";
// // a different way to use if else
// //switch is used if theres more cases
// switch (color) {
//   case "red":
//     console.log("color is red");
//     break;
//   case "blue":
//     console.log("color is blue");
//     break;
//   default:
//     console.log("color is not red or blue");
//     break;
// }

// let day;

// switch (new Date().getDay()) {
//   case 0:
//     day = "sunday";
//     break;
//   case 1:
//     day = "monday";
//     break;
//   case 2:
//     day = "tuesday";
//     break;
//   case 3:
//     day = "wednesday";
//     break;
//   case 4:
//     day = "thursday";
//     break;
//   case 5:
//     day = "friday";
//     break;
//   case 6:
//     day = "saturday";
//     break;
// }

// console.log(`today is ${day}`);

//traversy arrays

const number = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ["apple", "banana", "orange", "pear"];
const mixed = [22, "hello", true, undefined, null, { a: 1, b: 1 }, new Date()];

console.log(mixed);

let val;
//get array length
val = numbers.length;
//check if is array
val = Array.isArray(numbers);
//get a single value
val = numbers[3];
// arrays starts at 0 so for the 3rd value itll be the 4th number 23
val = numbers[0];
//insert into array
numbers = [2] = 100;
//find index of value
val = numbers.indexOf(36);

//mutating arrays
//add on to end of array
numbers.push(250);
//add on to front
numbers.unshift(120);
//take off from end
numbers.pop();
//take off from front
numbers.shift();
//splice out values
numbers.splice(1, 1); // where we want to startand end (1,3)
//reverse
numbers.reverse();

//concatenate array
val = numbers.concat(numbers2); // 2 arrays in it

//sorting array
val = fruit.sort();
val = numbers.sort(); // sorted by the first number whichever place value is on the furthest left
//use the "compare function" to fix ^
val = numbers.sort(function (x, y) {
  return x - y;
});
//revesrt sort
val = numbers.sort(function (x, y) {
  return y - x;
});

//find
function under50(num) {
  return num < 50;
}

val = numbers.find(under50); //looked at the array, first number that popped up after 50 will pop up

console.log(numbers);
console.log(val);
