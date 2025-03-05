// ! Some object methods

const car = {
  carName: "Toyota",
  model: "Corolla",
  year: 2024,
};

// i. Object.keys() = get the key's name as an array from an object
console.log(Object.keys(car)); //['carName', 'model', 'year']

// ii. Object.values = get the key's value as an array from an object
console.log(Object.values(car)); //as an array from an object

// iii. Object.entries() = Make the object to an array with the array of key values

console.log(Object.entries(car)); /* [Array(2), Array(2), Array(2)]
0: (2) ['carName', 'Toyota']
1: (2) ['model', 'Corolla']
2:(2) ['year', 2024]
*/

// iv. Object.seal() = cannot add new property to an object but can change the existing property of an object
const bus = {
  busName: "Volvo",
  year: 2020,
};

bus.model = "VX100"; //added model
console.log("Before using seal method: ", bus); //{busName: 'Volvo', year: 2020, model: 'VX100'}

Object.seal(bus);
bus.driverName = "Hanif";

console.log(
  "After adding seal method: bus.driverName = Hanif is not added",
  bus
); //After adding seal method: bus.driverName = Hanif is not added
/* {busName: 'Volvo', year: 2020, model: 'VX100'} */

// v. Object.freeze() = cannot add or change property of an object

const webDevelopment = {
  lang: "Javascript",
  markupLang: "HTML",
};

Object.freeze(webDevelopment);

webDevelopment.lang = "Django"; //change the property
webDevelopment.styles = "css"; //added property

console.log(webDevelopment); //{lang: 'Javascript', markupLang: 'HTML'}

// vi. for in loop over object

const shirtPrice = {
  easy: 2000,
  ecstasy: 1700,
  catsEye: 2100,
  colors: 1500,
};

console.log(shirtPrice["easy"]); //2000

for (const key in shirtPrice) {
  console.log(`key: ${key}, value: ${shirtPrice[key]}`);
} /* 
key: easy, value: 2000
key: ecstasy, value: 1700
key: catsEye, value: 2100
key: colors, value: 1500
*/

// vii. we know for of loop is not work in object. But u can use it by Object.entries() method

const employee = {
  name: "Yasmin",
  id: 5875,
  age: 30,
  department: "QA",
};

for (const [key, value] of Object.entries(employee)) {
  //by destructuring in [key, value]
  console.log(`${key} : ${value}`);
  /* name : Yasmin
id : 5875
age : 30
script2.js:86 department : QA */
}
