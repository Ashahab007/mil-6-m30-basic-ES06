//! 1. Function  default parameter
// for addition
function sum(num1 = 0, num2 = 0) {
  let result = num1 + num2;
  return result;
}

let result = sum(10); //In case of forget to pass 2nd parameter
console.log(result);

// for multiplication

function multiply(num1 = 1, num2 = 1) {
  return num1 * num2;
}

let multiplication = multiply(5); //In case of forget to pass 2nd parameter
console.log(multiplication);

//! 2. Arrow function
/* Different types of arrow function */

//i. without parameter
const name = () => "hello World";
console.log("Without parameter", name());

//ii. with single parameter
const divide = (a) => a / 2;
console.log("With single parameter", divide(10));

//ii. with multiple line statement with return statement

const fullName = (fname, lname) => {
  return fname + " " + lname;
};

let personName = fullName("Ammar", "Shahab");
console.log("with multiple line statement with return statement: ", personName);

/* Note: Basic difference with normal function and arrow function */
// i. Arrow function don't take the arguments object
const fullName2 = (fname, lname) => {
  console.log(arguments);
  return fname + " " + lname;
};

// let personName2 = fullName2("Ammar", "Shahab");
console.log("with multiple line statement with return statement: ", personName); //Uncaught ReferenceError: arguements is not defined

// ii. Normal function takes arguments object
function personName3(fname, lname) {
  console.log(arguments);
  return fname + lname;
}

personName3("Shihab", "Hasan"); //Arguments(2) ['Shihab', 'Hasan', callee: ƒ, Symbol(Symbol.iterator): ƒ]

//! 3. Spread operator (...a)

const fruits = ["Apple", "Mango"];
console.log(...fruits); //Apple Mango i.e it will return the value of the array

//i. concatenate or copying two arrays with spread operator

const newFruits = ["Banana", "grape"];
console.log(...newFruits, ...fruits); //Banana grape Apple Mango

//ii.find out the max or min value using spread operator

const number = [20, 25, 600, 50, 177, 150];
console.log(Math.max(...number)); //600
console.log(Math.min(...number)); //600

//! 4. Object & Array destructuring
// i. Object destructuring
const people = {
  fname: "Hero Alam",
  age: 38,
  isMarried: false,
  friends: ["hena alom", "Jorina", "Sokhina"],
};

const { age, fname, friends } = people; //use the property name to destructure
console.log("Object Destructuring: ", fname, age, ...friends); //Object Destructuring:  Hero Alam 38 hena alom Jorina Sokhina

// ii. Array destructuring
const color = [
  "Red",
  "tomato",
  { newAddedColor: "apple-green" },
  "green",
  "skyblue",
];
const [index1, index2, index3, index4, index5] = color; //in array destructuring you have to put variable according to index number

console.log(index1, index2, index3, index5, index4); //Red tomato {newAddedColor: 'apple-green'}newAddedColor: "apple-green"[[Prototype]]: Object skyblue green
