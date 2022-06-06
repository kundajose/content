//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function fourNum(param1, param2, param3, parame4) {
  let multiplyTwoNums = param1 * param2;
  console.log(multiplyTwoNums);
  if (multiplyTwoNums > 100) {
    let multiplyTwoNumsAdd = multiplyTwoNums + (param3 + parame4);
    console.log(multiplyTwoNumsAdd);
  } else if (multiplyTwoNums < 100) {
    let multiplyTwoNumsSubtr = multiplyTwoNums - (param3 - parame4);
    console.log(multiplyTwoNumsSubtr);
  } else if (multiplyTwoNums === 100) {
    let divideBy4th = (param1 * param2 * param3) % parame4;
    console.log(divideBy4th);
  } else {
    console.log("impossible number");
  }
}
fourNum(3, 25, 30, 11);

function isEven(n) {
  for (let i = 0; i <= n; i++) {
    if (n % 2) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

// Reverse Loop
const items = ["apricot", "banana", "cherry"];

for (let i = items.length - 1; i >= 0; i -= 1) {
  console.log(`${i}. ${items[i]}`);
}
// Prints: 2. cherry
// Prints: 1. banana
//

// checks if a condition is true, and then repeats the loop as long as the condition is true.
x = 0;
i = 0;

do {
  x = x + i;
  console.log(x);
  i++;
} while (i < 5); // Prints: 0 1 3 6 10

// Looping Through Arrays
let item = ["apricot", "banana", "cherry"];
for (let i = 0; i < item.length; i++) {
  console.log(item[i]);
} // apricot,banana,cherry

// Break Keyword
for (let i = 0; i < 99; i += 1) {
  if (i > 5) {
    break;
  }
  console.log(i);
} // Output: 0 1 2 3 4 5

// Nested For Loop
for (let outer = 0; outer < 2; outer += 1) {
  for (let inner = 0; inner < 3; inner += 1) {
    console.log(`${outer}-${inner}`);
  }
}

/* 
Output:
0-0
0-1
0-2
1-0
1-1
1-2
*/

//Assign a function to a variable originalFunc
const originalFunc = (num) => {
  return num + 2;
};

//Re-assign the function to a new variable newFunc
const newFunc = originalFunc;

//Access the function's name property
console.log(newFunc.name); //'originalFunc'

//Return the function's body as a string
console.log(newFunc.toString()); //'(num) => { return num + 2 }'

//Add our own isMathFunction property to the function
newFunc.isMathFunction = true;

//Pass the function as an argument
const functionNameLength = (func) => {
  return func.name.length;
};
console.log(functionNameLength(originalFunc)); //12

//Return the function
const returnFunc = () => {
  return newFunc;
};
console.log(returnFunc()); //[Function: originalFunc]

// Array Method .forEach()
const numbers = [28, 77, 45, 99, 27];

numbers.forEach((number) => {
  console.log(number);
}); // 28, 77, 45, 99, 27

// array Method .map()
const finalParticipants = ["Taylor", "Donald", "Don", "Natasha", "Bobby"];

const announcements = finalParticipants.map((member) => {
  return member + " joined the contest.";
});
console.log(announcements);

// Objects are Mutable and delete any one
const student = {
  name: "Sheldon",
  score: 100,
  grade: "A",
};
console.log(student);
// { name: 'Sheldon', score: 100, grade: 'A' }
delete student.score;
student.grade = "F";
console.log(student);
// { name: 'Sheldon', grade: 'F' }

// for...in loop
let mobile = {
  brand: "Samsung",
  model: "Galaxy Note 9",
};

for (let key in mobile) {
  console.log(`${key}: ${mobile[key]}`);
}

// destructuring assignment shorthand syntax
const rubiksCubeFacts = {
  possiblePermutations: "43,252,003,274,489,856,000",
  invented: "1974",
  largestCube: "17x17x17",
};
const { possiblePermutations, invented, largestCube } = rubiksCubeFacts;
console.log(possiblePermutations); // '43,252,003,274,489,856,000'
console.log(invented); // '1974'
console.log(largestCube); // '17x17x17'

// Breaking Out of a Loop
for (let current = 20; ; current += 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}
// → 21

// Looping a triangle
for (var triangle = "#"; triangle.length <= 7; triangle += "#")
  console.log(triangle);
// or
var x = "";
for (let i = 0; i < 8; i++) {
  x = "#" + x;
  console.log(i + "." + x);
}

// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines
var chessBoard = "",
  size = 8,
  c;

for (var i = 0; i < size; i++) {
  c = i % 2 ? "# " : " #";
  for (var j = 0; j < size / 2; j++) {
    chessBoard += c;
  }
  chessBoard += "\n";
}

console.log(chessBoard);

// Object.assign function that copies all properties from one object into another.

let objectA = { a: 1, b: 2 };
Object.assign(objectA, { b: 3, c: 4 });
console.log(objectA);
// → {a: 1, b: 3, c: 4}

// Object.keys function returns an array of strings
console.log(Object.keys({ x: 0, y: 0, z: 2 }));
// → ["x", "y", "z"]

// Default Parameters 1st
function makeShoppingList(item1 = "milk", item2 = "bread", item3 = "eggs") {
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
makeShoppingList();

// second
function greeting(name = "stranger") {
  console.log(`Hello, ${name}!`);
}

greeting("Nick"); // Output: Hello, Nick!
greeting(); // Output: Hello, stranger!

// Helper Functions
function monitorCount(rows, columns) {
  return rows * columns;
}
function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}
const totalCost = costOfMonitors(5, 4);
console.log(totalCost);

// Method remove whitespace at the beginning and end of string is   trim()
console.log("    Remove whitespace   ".trim());

// Built-in Objects
// generate a random number between 0 and 50
Math.random() * 50;

// Math.floor() takes a decimal number, and rounds down to the nearest whole number.
Math.floor(Math.random() * 50);

// Math.ceil() method to calculate the smallest integer greater than or equal to 43.8
console.log(Math.ceil(43.8)); // Prints false

// isInteger() method from the Number object to check if 2017 is an integer.not decimal nums
console.log(Number.isInteger(34.6)); // Prints false

// Math.abs() method change negative number in positive nums
console.log(Math.abs(-333));

// Math.trunc  :convert decimal to intigers

console.log(String(Math.trunc(Number("1.2"))));

// Array.flat() method concatenate nested array into one array

favMovies = [
  "Begin Again",
  "Soul",
  ["Matrix", "Matix Reloaded", "Matrix Revolutions"],
  ["Frozen", "Frozen 2", ["Tangled", "Alladin"]],
];

flattenedArray = favMovies.flat();
console.log(flattenedArray); // depth is not specified
// expected result: ["Begin Again", "Soul", "Matrix", "Matix Reloaded", "Matrix Revolutions", "Frozen", "Frozen 2", Array(2)]

flatWithDepth = favMovies.flat(2);
console.log(flatWithDepth); // depth of 2 is mentioned so we get complete flat array
// expected result: ["Begin Again", "Soul", "Matrix", "Matix Reloaded", "Matrix Revolutions", "Frozen", "Frozen 2", "Tangled", "Alladin"]

// //Create a function that takes in an array of numbers
// //Alert the sum of the second lowest and the second highest number
function sumSecondLowAndHigh(arr) {
  let sorted = arr.sort((a, b) => a - b);
  console.log(sorted[1] + sorted[sorted.length - 2]);
}
sumSecondLowAndHigh([2, 3, 1, 5, 4]); // 6

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function minusFiveAndAbs(n1, n2, n3, n4, n5) {
  let difference = 100 - n1 - n2 - n3 - n4 - n5;
  console.log(Math.abs(difference));
}
minusFiveAndAbs(27, 83, 42, 1, 5);

//  Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function logHighAndLow(n1, n2, n3) {
  let min = Math.min(n1, n2, n3);
  let max = Math.max(n1, n2, n3);
  console.log(`The lowest num is ${min} and the highest num is ${max}`);
}
logHighAndLow(100, 50, 25);

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headsOrTails() {
  let result = Math.random();
  if (result < 0.5) {
    return "heads";
  } else {
    return "tails";
  }
}
// const headsOrTails = _ => Math.random() < .5 ? 'heads' : 'tails'

console.log(headsOrTails());

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function flipFlipFlipadelphia(n) {
  for (let i = 1; i <= n; i++) {
    let result = headsOrTails();
    console.log(result);
  }
}
flipFlipFlipadelphia(1);

// some() and every() work in the same way
//  array.prototype.some() check atleast one
// array.prototype.every()  check all

let people = [
  { name: "peter", year: 2000 },
  { name: "ana", year: 1999 },
  { name: "tana", year: 2012 },
];
// 1st way
let peopleN = people.some(function (years) {
  let currentYear = new Date().getFullYear();
  if (currentYear >= 19) {
    return true;
  }
});
console.log(peopleN); //  true
// 2nd way
let dope = people.some(
  (person) => new Date().getFullYear() - person.year >= 19
);
console.log(dope); //  true

// checks whether an element is even
const array = [1, 2, 3, 4, 5];

const even = (element) => element % 2 === 0;

console.log(array.some(even)); //  true

// array.prototype.find() is like filter but return one you are looking for

let checkId = [
  { text: "peter", id: 2000 },
  { text: "ana", id: 1999 },
  { text: "tana", id: 2012 },
];
// 1st way
let allId = checkId.find(function (old) {
  if (old.id === 1999) {
    return true;
  }
});
console.log(allId);
// 2nd
let allI = checkId.find((old) => old.id === 1999);
console.log(allI);

// findIndex()
let checkByIndex = [
  { text: "peter", id: 2000 },
  { text: "ana", id: 1999 },
  { text: "tana", id: 2012 },
];
let index = checkByIndex.findIndex((comment) => comment.id === 2012);
console.log(index); // 2
// delete id of 1999
// 1 way
console.log(checkByIndex.splice(1, 1)); //  { text: "ana", id: 1999 }
console.table(checkByIndex);

// filter() method
// array.prototype.filter()
const inventors = [
  { first: "kaka", last: "Ema", year: "1808", passed: 1815 },
  { first: "papa", last: "pascal", year: "1968", passed: 2008 },
  { first: "Tito", last: "mani", year: "1888", passed: 2021 },
  { first: "kana", last: "Ruth", year: "2008", passed: 2018 },
];
// filter a list for those born in  1800
// 1st
let nineteen = inventors.filter(function (inventor) {
  if (inventor.year >= 1800 && inventor.year <= 1900) {
    return true;
  }
});
console.log(nineteen);
// 2nd
let nineteens = inventors.filter(
  (inventor) => inventor.year >= 1800 && inventor.year <= 1900
);

console.log(nineteens);

// array.prototype.map() method
// give us an array of inventors first and last name
let fullName = inventors.map((allName) => allName.first + " " + allName.last);
console.log(fullName);

// array.prototype.sort() method
//  sort by birth and oldest to young 1st way
let order = inventors.sort(function (a, b) {
  if (a.year > b.year) {
    return 1;
  } else {
    return -1;
  }
});
console.log(order);
// 2nd
let orderd = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
console.table(orderd);

// array.prototype. reduce()
// how many year did all inventors lived?
//  1st way

let totalInventorsYears = inventors.reduce((a, b) => {
  return a + (b.passed - b.year);
}, 0);
console.log(totalInventorsYears);

// sort invertors by years lived
let oldest = inventors.sort(function (a, b) {
  let older = a.passed - a.year;
  let sunset = b.passed - b.year;
  if (older > sunset) {
    return 1;
  } else {
    return -1;
  }
});
console.table(oldest);

// sort exercise
// sort driver alphabetically by last name
const driver = [
  "Damas, bato",
  "cendo, Damas",
  "Gato, pando",
  "juma, moses",
  "Gato, keke",
];
let arrange = driver.sort(function (lastOne, nextOne) {
  let [aLast, aFirst] = lastOne.split(", ");
  let [bLast, bFirst] = nextOne.split(", ");
  console.log(aLast, bLast);
});
console.log(arrange);

// reduce exercise
// sum up instances of each of these
const date = [
  "car",
  "bike",
  "trunk",
  "van",
  "car",
  "bike",
  "van",
  "walk",
  "car",
  "trunk",
  "car",
  "car",
  "car",
  "van",
  "trunk",
];
let select = date.reduce(function (object, item) {
  if (!object[item]) {
    object[item] = 0;
  }
  object[item]++;
  return object;
}, {});
console.log(select);

// Lesson OBJECT
// Factory function 1st
function myfunction(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}
let circle = myfunction(1);
// constructor function
function Circle(radius) {
  (this.radius = radius),
    (this.draw = function () {
      console.log("draw");
    });
}
const other = new Circle(1);

// add object property
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let adder = 0;
for (let key in salaries) {
  adder += salaries[key];
}

console.log(adder); // 390

// count positive num and add negative nums
function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) {
    return [];
  }
  let posCount = 0;
  let negSum = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      posCount++;
    }
    if (input[i] < 0) {
      negSum += input[i];
    }
  }
  return [posCount, negSum];
}
console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);

const user = {
  name: "Nehal Mahida",
  userName: "nehal_mahida",
  password: "password:)",
  login: function (userName, password) {
    if (userName === this.userName && password === this.password) {
      console.log("Login Successfully");
    } else {
      console.log("check username or password is correct");
    }
  },
};

user.login("nehal", "nehal");
// user.login("nehal_mahida", "password:)");

// Object.assign()  combine object together into {} or []
const one = { one: "one" };
const two = { two: "two" };
const combined = Object.assign({}, one, two);
console.log(combined);
